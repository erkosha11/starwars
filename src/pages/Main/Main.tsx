import { motion } from "framer-motion";
import { Pagination } from "antd";

import { Button } from "../../shared/ui/Button/Button";
import { Input } from "../../shared/ui/Input/Input";

import s from "./Main.module.scss";

export const Main = () => {
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
          <div className={s.mainItems}></div>
          <div className={s.mainPagination}>
            <Pagination defaultCurrent={1} total={30} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
