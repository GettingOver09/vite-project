import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

import axios from "axios";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate, useParams } from "react-router-dom";
import TodoCardWrapper from "@/components/TodoCardWrapper";

const UpdateTodo = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/todolist/${id}`
        );
        setTitle(response.data.title);
        setDescription(response.data.description);
        setDate(response.data.date);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTodo();
  }, [id]);

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:3000/todolist/${id}`, {
        id,
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
      title={"Update Todo"}
      description={"Modify your todo item"}
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
          onClick={handleUpdate}
          className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 text-lg"
        >
          {"Update Todo"}
        </Button>
      </div>
    </TodoCardWrapper>
  );
};

export default UpdateTodo;
