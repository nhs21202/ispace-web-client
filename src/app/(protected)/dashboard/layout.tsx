import DashboardSideBar from "@/components/DashboardSideBar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto mt-5 grid overflow-hidden lg:grid-cols-12">
      <div className="w-full overflow-hidden pr-3 lg:col-span-3">
        <DashboardSideBar />
      </div>

      <div className="w-full overflow-hidden lg:col-span-9">{children}</div>
    </div>
  );
};

export default DashboardLayout;
