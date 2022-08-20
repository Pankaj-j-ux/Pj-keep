/** @format */

import React, { useState } from "react";
import Add from "@material-ui/icons/AddCircle";
import IconButton from "@material-ui/core/IconButton";

function Textarea({ addNote }) {
  var [note, upNote] = useState({
    title: "",
    content: "",
    date: new Date().toDateString(),
  });
  var [initial, upInitial] = useState({ vis: false, height: "10vh" });

  const makeChange = () => {
    upInitial({ vis: true, height: "20vh" });
  };

  const collectData = (E) => {
    const { name, value } = E.target;
    upNote((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const saveNote = () => {
    addNote(note);
  };

  return (
    <>
      <section>
        <div
          className="my-5 mx-auto w-50 px-2 py-4 text-center shadow position-relative"
          style={{ borderRadius: "10px" }}
        >
          {initial.vis && (
            <input
              type="text"
              name="title"
              value={note.title}
              onChange={collectData}
              autoComplete="off"
              className="w-100 px-3 py-2 text- fs-3 fw-bold text-capitalize"
              placeholder="Title"
              style={{
                border: "none",
                outline: "none",
                borderRadius: "10px",
                height: "10vh",
              }}
            />
          )}
          <textarea
            onClick={makeChange}
            name="content"
            value={note.content}
            onChange={collectData}
            className="py-2 px-3 w-100 "
            placeholder="Write a note ..."
            style={{
              border: "none",
              outline: "none",
              borderRadius: "10px",
              height: initial.height,
            }}
          />
          {/* <button className="position-absolute btn btn-outline-secondary top-100 start-100 translate-middle border-0">
                <Add color="disabled" className="text-info" style={{ fontSize: 40 }}/>
                </button> */}
          {/* <p className="position-absolute  top-100 start-50 translate-middle w-25 bg-secondary rounded-circle">.</p> */}
          {initial.vis && (
            <IconButton
              onClick={saveNote}
              className="position-absolute  top-100 start-50 translate-middle"
              aria-label="delete"
            >
              <Add className="text-info" style={{ fontSize: 60 }} />
            </IconButton>
          )}
        </div>
      </section>
    </>
  );
}

export default Textarea;
