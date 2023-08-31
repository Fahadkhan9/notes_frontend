import React, { useState } from "react";
import axios  from "axios";
import { useNavigate } from "react-router-dom";

function AddNotes(props) {

const [title, settitle] = useState()
const[body,setbody] = useState()
const navigate = useNavigate();

const submits =(e)=>{
e.preventDefault()
  console.log(title,body)

let obj={title,body}
axios.post("http://localhost:4000/savePost",obj)
.then((res) => {
  console.log(res);
  navigate("/shownotes")
})
.catch((err) => {
  console.log(err);
});
}


  return (
    <div>
      <h1>Add Your Notes</h1>
      <div class="container">
        <form onSubmit={submits}>
          <div class="form-group">
            <label style={{ fontSize: "20px" }}>Enter your subject</label>
            <input
            style={{ fontSize: "20px" }}
              name="title"
              type="text"
              class="form-control"
              id="title"
              placeholder="Subject"
              onChange={(e)=>(settitle(e.target.value))}
              required
            />
          </div>

          <div class="form-group">
            <label style={{ fontSize: "20px" }} for="message">
              Enter your notes
            </label>
            <textarea
            style={{ fontSize: "20px" }}
              name="message"
              class="form-control"
              id="message"
              rows="5"
              placeholder="Notes"
              onChange={(e)=>(setbody(e.target.value))}
              required
            ></textarea>
          </div>

          <div class="d-grid gap-2">
            <button  style={{padding:"20px" ,fontSize:"20px"}} class="btn btn-success" type="submit">
        ADD
            </button>
           
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddNotes;
