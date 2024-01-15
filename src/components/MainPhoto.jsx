import classes from "./MainPhoto.module.scss";
import Button from "./ui/Button";

export default function MainPhoto() {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.mainPhoto}>
          <div className={classes.text}>
            <h1>Test assignment for front-end developer</h1>
            <p>
              What defines a good front-end developer is one that has skilled
              knowledge of HTML, CSS, JS with a vast understanding of User
              design thinking as they&apos;ll be building web interfaces with
              accessibility in mind. They should also be excited to learn, as
              the world of Front-End Development keeps evolving.
            </p>
						<Button>Sign Up</Button>
          </div>
        </div>
      </div>
    </>
  );
}
