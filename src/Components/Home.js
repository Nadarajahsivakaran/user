import React, { useEffect, useState } from "react";
import { Card, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=1")
      .then((res) => res.json())
      .then((res) => setUsers(res.data));
  }, []);

  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand className="m-auto">Title</Navbar.Brand>
        </Container>
      </Navbar>
      <div className="row">
        {users.map((item, index) => {
          return (
            <div className="col-4" style={{ padding: "20px" }}>
              <Link to={`/view/${item.id}`}>
                <Card style={{ width: "20rem" }} className="m-auto">
                  <Card.Img variant="top" src={item.avatar} />
                  <Card.Body>
                    <Card.Text>
                      <h5>{item.first_name}</h5>
                      <h6>{item.email}</h6>
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
