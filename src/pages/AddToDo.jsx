import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";

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
    <div>
      <div>
        <Card className="w-[750px]">
          <CardHeader>
            <CardTitle>Add To Do</CardTitle>
            <CardDescription>Fill all fields to add to do</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col  py-10 gap-y-5 w-full">
            <div className="gap-y-2">
              <Label>Title</Label>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="gap-y-2">
              <Label>To do Description</Label>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="gap-y-2">
              <Label>Date</Label>
              <Input value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <Button onClick={handleSubmit}>Add To Do</Button>
          </CardContent>
          <CardFooter className="flex justify-between">
            <h1>Made with ♥ by Jan Wayne Sepe</h1>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AddTodo;
