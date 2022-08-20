/** @format */

import React, { useEffect, useState } from "react";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Textarea from "./Textarea";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  const [set, upSet] = useState([]);

  useEffect(() => {
    upSet(() => JSON.parse(localStorage.getItem("Notes_Array")));
  }, []);

  const callEvent = (note) => {
    upSet((pre) => {
      localStorage.setItem("Notes_Array", JSON.stringify([note, ...pre]));
      return [note, ...pre];
    });
  };

  const myfun = (id) => {
    upSet((pre) => {
      const updated_one = pre.filter((cur, index) => {
        return index !== id;
      });

      localStorage.setItem("Notes_Array", JSON.stringify(updated_one));

      return updated_one;
    });
  };

  return (
    <>
      <Header />
      <Textarea addNote={callEvent} />
      <section className="d-flex flex-rows flex-wrap">
        {JSON.parse(localStorage.getItem("Notes_Array")).map((val, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              deleteFun={myfun}
              date={val.date}
            />
          );
        })}
      </section>

      <Footer />
    </>
  );
}

export default App;
