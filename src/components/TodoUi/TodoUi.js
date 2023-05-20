import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import Task from "../Task/Task";
import { useQuery } from "react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";
import { signOut } from "firebase/auth";
import { Button } from "@mui/material";

const TodoUi = () => {
  const nameRef = useRef();
  const descriptionRef = useRef();

  const [user, loading, error] = useAuthState(auth);

  const {
    data: tasks,
    isLoading,
    refetch,
  } = useQuery("tasks", () =>
    fetch(`https://todo-server-l0mq.onrender.com/tasks`).then((res) =>
      res.json()
    )
  );

  if (loading) {
    return <p>Laoding...</p>;
  }

  if (isLoading) {
    return <p> Loading....</p>;
  }

  const handleSignOut = () => {
    signOut(auth);
    toast.info("Signed Out");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const description = descriptionRef.current.value;
    const isCompleted = false;

    console.log(name, description, isCompleted);
    const data = { name, description, isCompleted };

    const url = "https://todo-server-l0mq.onrender.com/task";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        refetch();
      })
      .then(toast.success("Success!Item Added"));

     nameRef.current.value = "";
      descriptionRef.current.value = "";
  };

  return (
    <div>
      {user && (
        <Button onClick={handleSignOut} variant="contained" color="success">
          LogOut
        </Button>
      )}
      <h1>Total Tasks: {tasks?.length}</h1>
      {tasks.map((task) => (
        <Task key={task._id} refetch={refetch} task={task}></Task>
      ))}
      <div>
        <form onSubmit={handleFormSubmit}>
          <input
            className="form-control"
            type="text"
            ref={nameRef}
            placeholder="Enter todo Name"
          />
          <br />
          <input
            className="form-control"
            type="text"
            ref={descriptionRef}
            placeholder="Description"
          />
          <br />
          <input className="btn btn-success" type="submit" value="Add Task" />
        </form>
      </div>
    </div>
  );
};

export default TodoUi;
