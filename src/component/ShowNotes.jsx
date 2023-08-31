import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom" 

function ShowNotes(props) {
  let [users, setuser] = useState([""]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/getPost");
      console.log(response.data.users);
      setuser(response.data.users);
    } catch (err) {
      console.log(err);
    }
  };

  const deletes = async (id) => {
    console.log("delete");
    console.log(id);
    try {
      const response = await axios.delete(
        "http://localhost:4000/deletePost/" + id
      );
      console.log(response);
      getData();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Show Notes</h1>

      <div className="row m-5">
        {users.map((e) => {
          return (
            <div className="col-sm-4 ">
              <div class="card " style={{ border: "2px solid green" }}>
                <div class="card-body ">
                  <h4 class="card-title">{e.title}</h4>
                  <p class="card-text">{e.body}</p>
                  <Link  to={`/editnotes/${e._id}`} class="card-link">
                    <button className="btn btn-primary">Edit</button>
                  </Link>
                  <a href="#" class="card-link">
                    <button
                      className="btn btn-danger"
                      onClick={() => deletes(e._id)}
                    >
                      Delete
                    </button>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShowNotes;
