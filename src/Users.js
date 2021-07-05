import { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";

// import { Card, CardHeader, Avatar} from 'barrel.js';

// barrel

function getUsers(setUsers) {
  console.log("User is mounted");
  fetch("https://609e2a5c33eed80017957ddb.mockapi.io/users", {
    method: "GET"
  })
    .then((res) => res.json())
    .then((res) => setUsers(res));
}

function Users() {
  // callback & dependency array
  const [users, setUsers] = useState([]);

  // const getUsers = () => {
  //   console.log("User is mounted");
  //   fetch("https://609e2a5c33eed80017957ddb.mockapi.io/users", {
  //     method: "GET"
  //   })
  //     .then((res) => res.json())
  //     .then((res) => setUsers(res));
  // };
  // useEffect(getUsers, []);

  useEffect(() => getUsers(setUsers), []);

  return (
    <>
      {users.map((user) => (
        <Card>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" src={user.avatar}>
                R
              </Avatar>
            }
            title={user.name}
            //  subheader={(new Date(user.createdAt)).toString()}
            subheader={new Date(user.createdAt).toDateString()}
            //  subheader={user.createdAt}
          />
        </Card>
      ))}
    </>
  );
}

// Default can export only one
// export default Users;

export { Users };
