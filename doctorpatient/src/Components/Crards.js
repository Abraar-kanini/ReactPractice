import React, { useEffect, useState } from "react";
import GetById from "./GetById";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Crards() {
  const [GetData, SetData] = useState([]);

  useEffect(() => {
    let getdata = async () => {
      let data = await fetch("https://localhost:7043/api/Doctor");
      let response = await data.json();
      SetData(response);
    };
    getdata();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex gap-3 flex-wrap border border-black h-[90vh] w-[70vw] m-auto">
              {GetData.map((e) => (
                <div key={e.id} className="border border-black w-[30%] h-[50%]">
                  <h1>Doctor Name: {e.doctorName}</h1>
                  <h1>Doctor Specialist: {e.doctorSpecialist}</h1>
                  <img className="m-8" src={e.filePath} alt="Doctor Pic" />
                  <Link to={`/GetById/${e.id}`}>
                    <button className="border border-black">
                      Click me to get the doctor id
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          }
        />
        
        <Route path="/GetById/:id" element={<GetById />} />
      </Routes>
    </Router>
  );
}
