import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="bg-gradient-to-br from-[#3B1D60] via-[#0F1145] to-[#040D3E] min-h-screen text-white">
      <Outlet />
    </div>
  );
}
