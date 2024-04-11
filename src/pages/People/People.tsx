import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "antd";
import s from "./People.module.scss";
import { AnimatedBox } from "../../components/AnimatedBox/AnimatedBox";
import { Header } from "../../components/header/Header";
import Skeleton from "../../shared/ui/Skeleton/Skeleton";
import peopleStore from "../../store/people-store";

export const People = observer(() => {
  useEffect(() => {
    peopleStore.fetchPeople();
  }, []);

  const handlePageChange = (page: number) => {
    peopleStore.setCurrentPage(page);
  };

  const handleSearch = (text: string) => {
    peopleStore.setSearchText(text);
  };

  return (
    <div className="container">
      <div className={s.mainsContent}>
        <Header onSearch={handleSearch} />
        <div className={s.mainContent}>
          <AnimatedBox>
            <div className={s.mainItems}>
              <div>
                {peopleStore.people.state === "pending"
                  ? [...new Array(4)].map((_, index) => (
                      <Skeleton key={index} />
                    ))
                  : peopleStore.getDisplayedPeople().map((person, index) => (
                      <Link
                        to={`/people/${index}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                        key={index}
                      >
                        <div className={s.mainCard}>
                          <div className={s.mainCardText}>
                            <h1>{person.name}</h1>
                            <p>Рост: {person.height}</p>
                            <p>Масса: {person.mass}</p>
                            <p>Пол: {person.gender}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
              </div>
            </div>
          </AnimatedBox>
          <div className={s.mainPagination}>
            {!peopleStore.searchText && (
              <Pagination
                total={peopleStore.getTotalPages() * peopleStore.pageSize}
                pageSize={peopleStore.pageSize}
                current={peopleStore.currentPage}
                onChange={handlePageChange}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

export default People;
