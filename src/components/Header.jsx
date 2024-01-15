import Button from "./ui/Button";
import Logo from "../assets/Logo.svg";
import classes from "./Header.module.scss";

export default function Header() {
  return (
    <>
      <div className={classes.header}>
        <div className={classes.wrapper}>
          <img src={Logo} />
          <div className={classes.login}>
            <Button>Users</Button>
            <Button>Sign Up</Button>
          </div>
        </div>
      </div>
    </>
  );
}
