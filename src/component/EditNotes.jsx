import React, { useEffect ,useState} from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditNotes(props) {

  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const navigate = useNavigate();
const {id}=useParams()
console.log(id)

useEffect(()=>{
  getData()
},[])


const submit= (e)=>{
e.preventDefault();
console.log(e)

let obj={
  title:e.target.title.value,
  body:e.target.body.value
}

axios.patch("http://localhost:4000/updatePost/" + id,obj)


.then((data)=>{
  console.log(data)
})
navigate("/shownotes")


}




const getData = async () => {
  try {
    const response = await axios.get("http://localhost:4000/singlePost/" + id);
    console.log(response.data.blog[0].title);
    console.log(response.data.blog[0].body);
   setTitle(response.data.blog[0].title)
   setBody(response.data.blog[0].body)


  } catch (err) {
    console.log(err);
  }
};



    return (
        <div>
         <h1>Edit your notes</h1>   
         <div class="container">
        <form onSubmit={submit}>
          <div class="form-group">
            <label style={{ fontSize: "20px" }}>Enter your subject</label>
            <input
            style={{ fontSize: "20px" }}
              name="email"
              type="text"
              class="form-control"
              id="title"
              placeholder="Subject"
              defaultValue={title} 
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
              id="body"
              rows="5"
              placeholder="Notes"
              required
              defaultValue={body} 
            ></textarea>
          </div>

          <div class="d-grid gap-2">
            <button style={{padding:"20px",fontSize:"20px"}} class="btn btn-success" type="submit">
           Add
            </button>
           
          </div>
        </form>
      </div>
        </div>
    );
}

export default EditNotes;