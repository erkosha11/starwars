import s from "./Header.module.scss";

import { Button } from "../../shared/ui/Button/Button";
import { Input } from "../../shared/ui/Input/Input";

import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className={s.Header}>
      <div className={s.headerBtns}>
        <Link to="/peopletest">
          <Button>People</Button>
        </Link>
        <Link to="/starship">
        <Button>Starship</Button>
        </Link>
      </div>
      <div className={s.headerSearch}>
        <Input placeholder="Search" />
      </div>
    </div>
  );
};
