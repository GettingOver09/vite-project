import React from "react";
import Nav from "@/components/Nav";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Nav />
        <main className="mt-5 space-y-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
