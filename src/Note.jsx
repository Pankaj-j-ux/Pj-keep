import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

function Note({title,content,id,deleteFun}){
    
    const del1 = () => {
        deleteFun(id);
    }

    
    return(
        <>
        <div className="d-flex flex-column my-4 mx-4 py-3 px-3 border shadow rounded" style={{width: '29%'}}>
            {/* <input name="title"  style={{border:'none',outline:'none'}}/> */}
            {/* <textarea name="content"  style={{border:'none',outline:'none'}}/> */}
            <h3>{title}</h3>
            <p>{content}</p>
            <Button
                onClick={del1}
                className="bg-info text-white w-50 ms-auto shadow custom_btn"
                variant="contained"
                startIcon={<DeleteIcon />}
            >Delete</Button>
        </div>
        </>
    );
}

export default Note;