import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TodoCardWrapper = ({ children, title, description }) => {
  return (
    <Card className="bg-white rounded-lg shadow-md">
      <CardHeader className="border-b border-gray-200 p-6">
        <CardTitle className="text-2xl font-bold text-gray-800">
          {title}
        </CardTitle>
        {description && (
          <CardDescription className="text-gray-600 mt-1">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="p-6">{children}</CardContent>
      <CardFooter className="border-t border-gray-200 p-6 text-sm text-gray-500">
        Made with ♥ by Jan Wayne Sepe
      </CardFooter>
    </Card>
  );
};

export default TodoCardWrapper;
