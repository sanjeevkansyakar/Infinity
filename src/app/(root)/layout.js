import DashboardNav from "@/components/navbar/DashboardNav";

const MainLayout = ({ children }) => {
  return (
    <main>
      <DashboardNav />

      <div className="pt-10">{children}</div>
    </main>
  );
};

export default MainLayout;
