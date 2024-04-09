import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Pagination } from "antd";
import InfoStore from "../../store/base-store";
import { Button } from "../../shared/ui/Button/Button";
import { Input } from "../../shared/ui/Input/Input";
import s from "./Main.module.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PeoplePage = observer(() => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    InfoStore.getPeopleActions();
  }, []);

  const cardsToShow = (page: number) => {
    if (InfoStore.people?.state === "fulfilled") {
      const totalCards = InfoStore.people.value.length;
      const perPage = page < 3 ? 4 : totalCards % 8;
      return InfoStore.people.value.slice(
        (page - 1) * 4,
        (page - 1) * 4 + perPage
      );
    }
    return [];
  };

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

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
              <Input placeholder="Search" />
            </div>
          </div>
          <div className={s.mainContent}>
            <div className={s.mainItems}>
              {InfoStore.people?.state === "fulfilled" &&
                cardsToShow(currentPage).map((person, i) => (
                  <Link key={i} to={`/person/${i}`}>
                    {" "}
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
            <div className={s.mainPagination}>
              <Pagination
                current={currentPage}
                onChange={handleChangePage}
                total={30}
                pageSize={10}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
});

export default PeoplePage;
