import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Figure, Navbar } from "react-bootstrap";

const View = () => {
  const [user, setUser] = useState({});
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => res.json())
      .then((res) => setUser(res.data));
  }, []);

  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Link to="/">
          <Navbar.Brand style={{ marginLeft: "10px" }}>Back</Navbar.Brand>
        </Link>
      </Navbar>
      <div className="container">
        <div className="row" style={{ marginTop: "60px" }}>
          <div className="col-6">
            <Figure>
              <Figure.Image
                width={300}
                height={200}
                alt="171x180"
                src={user.avatar}
              />
            </Figure>
          </div>

          <div className="col-6" style={{ marginTop: "60px" }}>
            <div className="row" style={{ display: "flex" }}>
              <div className="col-4">
                <h3>First Name </h3>
                <h3>Last Name </h3>
                <h3> Email </h3>
              </div>
              <div className="col-4">
                <h3> {user.first_name}</h3>
                <h3> {user.last_name}</h3>
                <h3> {user.email}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
