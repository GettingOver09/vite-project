import React, { useEffect, useState } from "react";
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
import { useNavigate, useParams } from "react-router-dom";

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
    <div>
      <Card className="w-[750px]">
        <CardHeader>
          <CardTitle>Update To Do</CardTitle>
          <CardDescription>Modify your existing to-do item.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-y-5 py-10 w-full">
          <div className="gap-y-2">
            <Label>Title</Label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="gap-y-2">
            <Label>Description</Label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="gap-y-2">
            <Label>Date</Label>
            <Input value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
          <Button onClick={handleUpdate}>Update To Do</Button>
        </CardContent>
        <CardFooter className="flex justify-between">
          <h1>Made with ♥ by Jan Wayne Sepe</h1>
        </CardFooter>
      </Card>
    </div>
  );
};

export default UpdateTodo;
