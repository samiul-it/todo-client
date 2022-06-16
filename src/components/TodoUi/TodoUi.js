import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import Task from '../Task/Task';
import { useQuery } from "react-query";

const TodoUi = () => {


    const nameRef=useRef();
    const descriptionRef=useRef();

     const {
       data: tasks,
       isLoading,
       refetch,
     } = useQuery("tasks", () =>
       fetch(`https://fierce-shelf-11391.herokuapp.com/tasks`).then((res) => res.json())
     );


    if(isLoading){
      return <p> Loading....</p>
    }

    




    const handleFormSubmit=(e)=>{
        e.preventDefault();
        const name=nameRef.current.value;
        const description=descriptionRef.current.value;
        const isCompleted=false;

        console.log(name,description,isCompleted);
        const data={name,description,isCompleted};

        const url = "https://fierce-shelf-11391.herokuapp.com/task";
        fetch(url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result)
          refetch()})
          .then(toast.success("Success!Item Added"));
    }

    
    return (
      <div>
        <h1>Total Tasks: {tasks?.length}</h1>

        
          
            {tasks.map((task) => (
              <Task key={task._id} refetch={refetch} task={task}></Task>
            ))}
       

        <form onSubmit={handleFormSubmit}>
          <input type="text" ref={nameRef} placeholder="Enter todo Name" />
          <input type="text" ref={descriptionRef} placeholder="Description" />
          <input type="submit" />
        </form>
      </div>
    );
};

export default TodoUi;