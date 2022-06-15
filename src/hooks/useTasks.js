import React, { useEffect, useState } from 'react';

const useTasks = () => {

    const [tasks,setTasks]=useState([]);
    const [taskLoading,setTaskLoading]=useState(true);

    useEffect(()=>{
        const url = "http://localhost:5000/tasks";
        fetch(url)
        .then(res=>res.json())
        .then(data=>setTasks(data));

    },[])

    return [tasks];


    

};

export default useTasks;