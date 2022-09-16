import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Figure from "react-bootstrap/Figure";

const View = () => {
  const [user, setUser] = useState({});
  const params = useParams();
  const { id } = params;

  console.log(user);

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => res.json())
      .then((res) => setUser(res.data));
  }, []);

  return (
    <div className="row">
      <div className="col-6">
        <Figure>
          <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src={user.avatar}
          />
        </Figure>
      </div>

      <div className="col-6">
        <h3>{user.first_name}</h3>
        <h3>{user.last_name}</h3>
        <h3>{user.email}</h3>
      </div>
    </div>
  );
};

export default View;
