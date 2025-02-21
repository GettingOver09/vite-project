import React from "react";
import { Button } from "@/components/ui/button";

const ClickMe = () => {
  return (
    <div>
      <Button variant="default" size="lg" onClick={() => alert("Hello")}>
        Click me
      </Button>
    </div>
  );
};

export default ClickMe;
