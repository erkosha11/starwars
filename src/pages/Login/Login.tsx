import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { Button } from "../../shared/ui/Button/Button";
import { Input } from "../../shared/ui/Input/Input";

import { IoArrowBackCircleOutline } from "react-icons/io5";
import s from "./Login.module.scss";

export const Login = observer(() => {
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
        <div className={s.loginContent}>
          <div className={s.loginTitle}>
            <Link to="/">
              <h2>
                <IoArrowBackCircleOutline />
              </h2>
            </Link>
            <h1>Log in</h1>
          </div>
          <div className={s.loginInput}>
            <div>
              <Input placeholder="Username" />
              <Input type="password" placeholder="Password" />
            </div>
            <Button>Log in</Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
});
