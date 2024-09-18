import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="p-2 text-center bg-gray-800 mt-2">
        Made by <strong><a
  href="https://www.linkedin.com/in/ishan-katoch-a2363316b/"
  style={{
    background: 'linear-gradient(90deg, #ff7e5f, #feb47b)',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    textDecoration: 'none',
  }}
>
  Ishan Katoch
</a>

</strong> 
      </div>
    </div>
  );
};

export default AppLayout;
