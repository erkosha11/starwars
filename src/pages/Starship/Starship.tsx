import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "antd";
import s from "./Starship.module.scss";
import { AnimatedBox } from "../../components/AnimatedBox/AnimatedBox";
import { Header } from "../../components/header/Header";
import Skeleton from "../../shared/ui/Skeleton/Skeleton";
import StarShipStore from "../../store/starships-store";

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
                {StarShipStore.starship.state === "pending"
                  ? [...new Array(4)].map((_, index) => (
                      <Skeleton key={index} />
                    ))
                  : StarShipStore.getDisplayedStarship().map((ship, index) => (
                      <Link
                        to={`/starship/${index}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                        key={index}
                      >
                        <div className={s.starshipCard}>
                          <div className={s.starshipCardText}>
                            <h1>{ship.name}</h1>
                            <p>Model: {ship.model}</p>
                            <p>Manufacturer: {ship.manufacturer}</p>
                            <p>Consumables: {ship.consumables}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
              </div>
            </div>
          </AnimatedBox>
          <div className={s.mainPagination}>
            {!StarShipStore.searchText && (
              <Pagination
                total={StarShipStore.getTotalPages() * StarShipStore.pageSize}
                pageSize={StarShipStore.pageSize}
                current={StarShipStore.currentPage}
                onChange={handlePageChange}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
});
