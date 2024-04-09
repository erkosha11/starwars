import { observer } from "mobx-react-lite";
import { Link, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import s from "./Login.module.scss";

import { Button } from "../../shared/ui/Button/Button";
import { Input } from "../../shared/ui/Input/Input";
import { inputStore } from "../../store/login-store";

export const Login = observer(() => {
  const { inpData, inpDataErr, updateInpData } = inputStore;

  const navigate = useNavigate();
  const handleClick = () => {
    inputStore.clickHandler(navigate);
  };

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
              <Input
                name="login"
                type="text"
                onChange={(e) =>
                  updateInpData(e.target.name, e.target.value)
                }
                placeholder="Username"
                value={inpData.login}
                maxLength={20}
              />
              {inpDataErr.loginErr !== "" && (
                <span className={s.err}>{inpDataErr.loginErr}</span>
              )}
              <Input
                name="password"
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  updateInpData(e.target.name, e.target.value)
                }
                value={inpData.password}
                maxLength={20}
              />
              {inpDataErr.passwordErr !== "" && (
                <span className={s.err}>{inpDataErr.passwordErr}</span>
              )}
            </div>
            <Button onClick={handleClick}>Log in</Button>
            <Link to="/main"></Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
});
