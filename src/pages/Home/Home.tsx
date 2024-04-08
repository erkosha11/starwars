import { Link } from "react-router-dom";
import s from "./Home.module.scss";
import { motion } from "framer-motion";

import { Button } from "../../shared/ui/Button/Button";
export const Home = () => {
  return (
    <>
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
          <div className={s.homeContent}>
            <h1>Welcome to Star Wars</h1>
            <div className={s.homeBtns}>
              <Link to="signup">
                <Button>Sign up</Button>
              </Link>
              <Link to="login">
                <Button>Log in</Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};
