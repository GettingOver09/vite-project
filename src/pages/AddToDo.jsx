import React, { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import TodoCardWrapper from "@/components/TodoCardWrapper";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const { data: todos } = await axios.get("http://localhost:3000/todolist");

      const newId =
        todos.length > 0
          ? Math.max(...todos.map((todo) => parseInt(todo.id))) + 1
          : 1;

      await axios.post("http://localhost:3000/todolist", {
        id: newId.toString(),
        title,
        description,
        date,
      });

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TodoCardWrapper
      title={"Add New Todo"}
      description={"Fill all fields to create a new todo"}
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <Label className="text-gray-700 font-medium">Title</Label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-gray-700 font-medium">Description</Label>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="focus:ring-2 focus:ring-pink-500 h-32"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-gray-700 font-medium">Date</Label>
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <Button
          onClick={handleSubmit}
          className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 text-lg"
        >
          {"Add Todo"}
        </Button>
      </div>
    </TodoCardWrapper>
  );
};

export default AddTodo;
