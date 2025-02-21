import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

const TodoCard = ({ data }) => {
  return (
    <Card className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1 cursor-pointer">
      <CardHeader className="border-b border-gray-200 p-6 pb-4">
        <CardTitle className="text-lg font-bold text-gray-900 hover:text-pink-600 transition-colors">
          <Link to={`todo/${data.id}`} className="block">
            {data.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-4 pb-4">
        <p className="text-gray-700 leading-relaxed text-base line-clamp-3">
          {data.description}
        </p>
      </CardContent>
      <CardFooter className="border-t border-gray-200 p-6 pt-4 flex justify-between items-center">
        <p className="text-sm text-gray-500 font-medium">{data.date}</p>
        <Link
          to={`todo/${data.id}`}
          className="text-sm font-medium text-pink-600 hover:text-pink-700 transition-colors"
        >
          View Details →
        </Link>
      </CardFooter>
    </Card>
  );
};

export default TodoCard;
