import React from 'react';
import useTasks from '../../hooks/useTasks';
import { toast } from 'react-toastify';


const Task = ({task,refetch}) => {
  console.log(task);

  // Deleting a Task

  const handleDeleteItem = (id) => {
    const confirmDelete = window.confirm("Are you Sure?");
    if (confirmDelete) {
      const url = `http://localhost:5000/deletetask/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast.info("Item Deleted");
          refetch();
        });
    }
  };

  return (
    <div>
      <div className="alert alert-primary" role="alert">
        <h5>{task.name}</h5>
        <p>{task.description}</p>
        <button onClick={()=>handleDeleteItem(task._id)}>X</button>
      </div>
    </div>
  );
};

export default Task;