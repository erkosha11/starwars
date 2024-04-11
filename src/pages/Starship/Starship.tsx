import { Pagination } from "antd";

import { AnimatedBox } from "../../components/AnimatedBox/AnimatedBox";
import { Header } from "../../components/header/Header";

import s from "./Starship.module.scss";

import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import StarShipStore from "../../store/starship-store";
import { Link } from "react-router-dom";
import Skeleton from "../../shared/ui/Skeleton/Skeleton";

export const Starship = observer(() => {
  useEffect(() => {
    StarShipStore.fetchStarship();
  }, []);

  const handlePageChange = (page: number) => {
    StarShipStore.setCurrentPage(page);
  };

  const handleSearch = (text: string) => {
    StarShipStore.setSearchText(text);
  };

  return (
    <div className="container">
      <div className={s.starship}>
        <Header onSearch={handleSearch} />
        <div className={s.starshipContent}>
          <AnimatedBox>
            <div className={s.starshipItems}>
              <div>
            {StarShipStore.loading ? (
                [...new Array(4)].map((_, index) => (
                  <Skeleton key={index} />
                ))
              ) : (
              StarShipStore.getDisplayedStarship().map((person, index) => (
                <Link
                  to={`/starship/${index}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                  key={index}
                >
                  <div className={s.starshipCard}>
                    <div className={s.starshipCardText}>
                      <h1>{person.name}</h1>
                      <p>Model: {person.model}</p>
                      <p>Manufacturer: {person.manufacturer}</p>
                      <p>Consumables: {person.consumables}</p>
                    </div>
                  </div>
                </Link>
              ))
              )}
              </div>
            </div>
          </AnimatedBox>
          <div className={s.mainPagination}>
            <Pagination
              total={StarShipStore.starship.length}
              pageSize={StarShipStore.pageSize}
              current={StarShipStore.currentPage}
              onChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
});
