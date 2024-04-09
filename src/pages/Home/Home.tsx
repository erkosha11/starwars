import { Link } from "react-router-dom";
import s from "./Home.module.scss";


import { AnimatedBox } from "../../components/AnimatedBox/AnimatedBox";
import { Button } from "../../shared/ui/Button/Button";
export const Home = () => {
  return (
    <>
      <div className="container">
        <AnimatedBox>
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
        </AnimatedBox>
      </div>
    </>
  );
};
