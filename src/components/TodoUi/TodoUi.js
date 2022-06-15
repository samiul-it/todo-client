import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';

const TodoUi = () => {


    const nameRef=useRef();
    const descriptionRef=useRef();

    const [todoName,setToDoName]=useState("");
    const [todoDetails,setToDoDetails]=useState("");
    const [loading,setLoading]=useState(true);

    // if(loading){
    //   return <p> Loading...</p>;
    // }




    const handleFormSubmit=(e)=>{
        e.preventDefault();
        const name=nameRef.current.value;
        const description=descriptionRef.current.value;

        console.log(name,description);

        setToDoName(name);
        setToDoDetails(description);
        const data={name,description};

        const url = "http://localhost:5000/task";
        fetch(url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            setLoading(false);
            console.log(result)})
          .then(toast.success("Success!Item Added"));


    }
    return (
      <div>

        <h1>Name: {todoName}</h1>
        <p>Description: {todoDetails}</p>


        <form onSubmit={handleFormSubmit}>
          <input type="text" ref={nameRef} placeholder="Enter todo Name" />
          <input type="text" ref={descriptionRef} placeholder="Description" />
          <input type="submit" />
        </form>
      </div>
    );
};

export default TodoUi;