import { useEffect, useState } from "react";
import Button from "../components/ui/Button";
import UserCard from "./ui/UserCard";

import classes from "./GetRequest.module.scss";

export default function GetRequestSection() {
  const [userData, setUserData] = useState([]);
  const [count, setCount] = useState(6);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const fetchRequestSection = async () => {
      const fetchData = await fetch(
        `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${count}`
      );

      const data = await fetchData.json();
      const users = data.users;
      if (count >= users.length + 1) {
        setVisible(false);
      }
      setUserData(users);
      console.log(users, count);
    };

    fetchRequestSection();
  }, [count]);

  function loadMore() {
    setCount((prevCount) => prevCount + 6);
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.requestSection}>
        <h2>Working with GET request</h2>
        <div className={classes.users}>
          {userData.map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              email={user.email}
              position={user.position}
              phone={user.phone}
              photo={user.photo}
            />
          ))}
        </div>
        {visible && <Button onClick={loadMore}>Show more</Button>}
      </div>
    </div>
  );
}
