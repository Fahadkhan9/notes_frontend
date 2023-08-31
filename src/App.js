import React from 'react';
import Home from "./component/Home"
import Navb from './component/Navb';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import EditNotes from './component/EditNotes';
import AddNotes from './component/AddNotes';
import ShowNotes from './component/ShowNotes';
function App(props) {
  return (
   <div>
    <BrowserRouter>
     <Navb/>
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/addnotes" element={<AddNotes />} />
     <Route path="/shownotes" element={<ShowNotes />} />
     <Route path="/editnotes/:id" element={<EditNotes/>} />
  
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;




