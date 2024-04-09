import s from "./Header.module.scss";

import { Button } from "../../shared/ui/Button/Button";
import { Input } from "../../shared/ui/Input/Input";

export const Header = () => {
  return (
    <div className={s.Header}>
      <div className={s.headerBtns}>
        <Button>People</Button>
        <Button>Starship</Button>
      </div>
      <div className={s.headerSearch}>
        <Input placeholder="Search" />
      </div>
    </div>
  );
};
