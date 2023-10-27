import React from "react";
import DashboardContent from "@/components/editor/DashboardContent";
import { Suspense } from "react";

const Dashboard = () => {
  return (
    <section className="min-h-screen pt-16">
      <h2 className="text-center text-3xl pb-4 font-semibold">Create blog</h2>
      <div className="max-w-10xl mx-auto w-full max-md:mb-20">
        <Suspense fallback={<p>Loading feed...</p>}>
          <DashboardContent />
        </Suspense>
      </div>
    </section>
  );
};

export default Dashboard;
