import React, { useEffect, useState } from 'react';

const useTasks = () => {

    const [tasks,setTasks]=useState([]);
    const [taskLoading,setTaskLoading]=useState(true);

    useEffect(()=>{
        const url = "https://fierce-shelf-11391.herokuapp.com/tasks";
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setTaskLoading(false)
            setTasks(data)});

    },[])

    return [tasks,taskLoading,setTasks];


    

};

export default useTasks;