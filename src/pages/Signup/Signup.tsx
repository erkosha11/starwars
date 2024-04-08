import { Link } from "react-router-dom";

import { IoArrowBackCircleOutline } from "react-icons/io5";
import s from "./Signup.module.scss";

import { motion } from "framer-motion";

import {Input } from "../../shared/ui/Input/Input"
import { Button } from "../../shared/ui/Button/Button";

export const Signup = () => {
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
        <div className={s.signupContent}>
          <div className={s.signupTitle}>
            <Link to="/">
              <h2>
                <IoArrowBackCircleOutline />
              </h2>
            </Link>
            <h1>Sign up</h1>
          </div>
          <div className={s.signupInput}>
            <div>
              <Input placeholder="Username" />
              <Input type="password" placeholder="Password" />
              <Input placeholder="Confirm Password" />
            </div>
            <Button>Sign Up</Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
