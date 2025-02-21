import React, { useEffect, useState } from "react";
import TodoCard from "@/components/TodoCard";
import TodoCardWrapper from "@/components/TodoCardWrapper";
import axios from "axios";

const Todos = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await axios.get("http://localhost:3000/todolist");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTodo();
  }, []);

  const reversedData = [...data].reverse();

  return (
    <TodoCardWrapper
      title="Your Todos"
      description="Here are all your pending tasks"
    >
      <div className="space-y-4 width-full">
        {reversedData.map((todo, index) => (
          <TodoCard key={index} data={todo} />
        ))}
      </div>
    </TodoCardWrapper>
  );
};

export default Todos;
