import React, { useEffect, useState } from "react";
import { Card} from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);

  console.log(users);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=1")
      .then((res) => res.json())
      .then((res) => setUsers(res.data));
  }, []);

  return (
    <div>
      <div className="row">
        {users.map((item, index) => {
          return (
            <div className="col-4" style={{ padding:"20px" }}>
            <Link to={`/view/${item.id}`}>
              <Card style={{ width: "18rem"}}>
                <Card.Img variant="top" src={item.avatar} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    {item.first_name}
                    {item.email}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
