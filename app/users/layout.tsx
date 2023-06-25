import Sidebar from "../components/Sidebar";

interface layoutProps {
  children: React.ReactNode;
}

const layout = async ({ children }: layoutProps) => {
  return (
    <Sidebar>
      <div className="h-full">{children}</div>;
    </Sidebar>
  );
};

export default layout;
