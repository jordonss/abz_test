/* eslint-disable react/prop-types */
import classes from "./UserCard.module.scss";

export default function UserCard(props) {
  const { id, name, email, position, phone, photo } = props;

  return (
      <div className={classes.card}>
        <div key={id} className={classes.userCard}>
          <img src={photo} alt="photo" />
          <h3>{name}</h3>
          <p>{position}</p>
          <p>{email}</p>
          <p>{phone}</p>
        </div>
      </div>
  );
}
