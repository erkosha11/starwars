import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Pagination } from "antd";
import s from "./peopletest.module.scss";
import { AnimatedBox } from "../../components/AnimatedBox/AnimatedBox";
import { Header } from "../../components/header/Header";
import peopleStore from "../../store/test-store";
import { Link } from "react-router-dom";

export const PeopleTestpage = observer(() => {
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
              {peopleStore.getDisplayedPeople().map((person, index) => (
                <Link
                  to={`/people/${index}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                  key={index}
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
          </AnimatedBox>
          <div className={s.mainPagination}>
            <Pagination
              total={peopleStore.people.length}
              pageSize={peopleStore.pageSize}
              current={peopleStore.currentPage}
              onChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default PeopleTestpage;
