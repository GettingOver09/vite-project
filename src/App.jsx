import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import Todos from "./pages/Todos";
import Todo from "./pages/Todo";
import AddTodo from "./pages/AddTodo";
import UpdateTodo from "./pages/UpdateTodo";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Todos />} />
      <Route path="/todo/:id" element={<Todo />} />
      <Route path="/add-todo" element={<AddTodo />} />
      <Route path="/update-todo/:id" element={<UpdateTodo />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
