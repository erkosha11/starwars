import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

import { Pagination } from "antd";
import s from "./PeoplePage.module.scss";

import { AnimatedBox } from "../../components/AnimatedBox/AnimatedBox";
import { Header } from "../../components/header/Header";

import InfoStore from "../../store/base-store";

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
      <AnimatedBox>
        <div className={s.mainContent}>
          <Header />
          <div className={s.mainContent}>
            <div className={s.mainItems}>
              {InfoStore.people?.state === "fulfilled" &&
                cardsToShow(currentPage).map((person, i) => (
                  <Link
                    key={i}
                    to={`/person/${i}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div className={s.mainCard}>
                      <div className={s.mainCardText}>
                        <h1>{person.name}</h1>
                        <p>Height: {person.height}</p>
                        <p>Mass: {person.mass}</p>
                        <p>Gender: {person.gender}</p>
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
      </AnimatedBox>
    </div>
  );
});

export default PeoplePage;
