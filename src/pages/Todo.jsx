import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TodoCardWrapper from "@/components/TodoCardWrapper";
import axios from "axios";

const Todo = () => {
  const [todo, setTodo] = useState([]);

  const { id } = useParams();

  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/todolist/${id}`
      );

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/todolist/${id}`
        );
        setTodo(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTodo();
  }, []);

  console.log(todo);

  return (
    <TodoCardWrapper title={todo.title} description={todo.date}>
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">{todo.description}</p>
        <div className="flex space-x-4">
          <Button
            onClick={() => navigate(`/update-todo/${id}`)}
            className="bg-pink-600 hover:bg-pink-700 text-white"
          >
            Edit Todo
          </Button>
          <Button
            onClick={handleDelete}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            Delete Todo
          </Button>
        </div>
      </div>
    </TodoCardWrapper>
  );
};

export default Todo;
