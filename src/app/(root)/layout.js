import DashboardNav from "@/components/navbar/DashboardNav";
import { Suspense } from "react";

const MainLayout = ({ children }) => {
  return (
    <main>
      <Suspense fallback={<h2>Loading Nav</h2>}>
        <DashboardNav />
      </Suspense>

      <div className="pt-10">{children}</div>
    </main>
  );
};

export default MainLayout;
