import React, { useState } from 'react';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Textarea from './Textarea';
import Footer from './Footer';
import Note from './Note';

function App() {
  
  const [set ,upSet]= useState([]);

  const callEvent = (note) => {
    upSet((pre)=>{
      return(
        [note, ...pre]
      );
    });
  }

  const myfun = (id) =>{
      upSet((pre)=>{
        return( pre.filter((cur, index)=>{
                return index !== id;
              })
        );
      });
  }
  
  return (
    <>
    <Header/>
    <Textarea
      addNote={callEvent}
    />
    <section className="d-flex flex-rows flex-wrap">
    
      {set.map((val, index)=>{
        return(
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteFun={myfun}
          />
        );
      })}
    </section>

    <Footer/>
    </>
  );
}

export default App;
