import { observer } from "mobx-react-lite";
import { motion } from "framer-motion";
import { Pagination } from "antd";
import { Button } from "../../shared/ui/Button/Button";
import { Input } from "../../shared/ui/Input/Input";
import s from "./Main.module.scss";
import InfoStore from "../../store/base-store";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Main = observer(() => {
  const { getPeopleActions, people } = InfoStore;
  useEffect(() => {
    getPeopleActions();
  }, []);

  if (!people) null;

  return (
    <div className="container">
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className={s.mainContent}>
          <div className={s.mainHeader}>
            <div className={s.mainbtns}>
              <Button>People</Button>
              <Button>Starship</Button>
            </div>
            <div className={s.mainSearch}>
              <Input placeholder="Seacrh" />
            </div>
          </div>
          <div className={s.mainContent}>
            <div className={s.mainItems}>
              {people?.case({
                pending: () => <h1>Loading...</h1>,
                rejected: (error) => <h1>Error: {error}</h1>,
                fulfilled: (data) => (
                  <div className={s.mainItems}>
                  {data.map((person, i) => (
                    <Link key={i} to={`/person/${i}`}>
                      <div className={s.mainCard}>
                        <div className={s.mainCardText}>
                          <div>Name: {person.name}</div>
                          <div>Height: {person.height}</div>
                          <div>Mass: {person.mass}</div>
                          <div>Gender: {person.gender}</div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ),
            })}
          </div>
            <div className={s.mainPagination}>
              <Pagination defaultCurrent={1} total={30} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
});