import React, { useState, ChangeEvent, useEffect } from "react";
import { useLocation } from "react-router-dom";
import s from "./Header.module.scss";
import { Button } from "../../shared/ui/Button/Button";
import { Input } from "../../shared/ui/Input/Input";
import { Link } from "react-router-dom";

interface HeaderProps {
  onSearch: (text: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(
    null
  );
  const [resetSearch, setResetSearch] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (resetSearch) {
      setSearchText("");
      onSearch("");
      setResetSearch(false);
    }
  }, [resetSearch, onSearch]);

  useEffect(() => {
    setResetSearch(true);
  }, [location]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setSearchText(text);
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    const newTypingTimeout = setTimeout(() => {
      onSearch(text);
    }, 1000);
    setTypingTimeout(newTypingTimeout);
  };

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
        <Input
          placeholder="Search"
          value={searchText}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};
