import React, { useEffect, useState } from 'react';

const useTasks = () => {

    const [tasks,setTasks]=useState([]);
    const [taskLoading,setTaskLoading]=useState(true);

    useEffect(()=>{
        const url = "https://todo-server-l0mq.onrender.com/tasks";
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setTaskLoading(false)
            setTasks(data)});

    },[])

    return [tasks,taskLoading,setTasks];


    

};

export default useTasks;