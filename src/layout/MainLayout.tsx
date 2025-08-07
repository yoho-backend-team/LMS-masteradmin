import { useState } from 'react';
import Navbar from '../components/shared/NavBar'
import Sidebar from '../components/shared/SideBar'
import { Outlet } from 'react-router-dom'

function MainLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const sidebarWidth = isSidebarOpen ? 250 : 87;
  return (
   <>
   <div className="flex flex-col w-screen h-screen overflow-hidden bg-[#1BBFCA]">
      <div className="flex flex-col flex-1">
        <Navbar />
      </div>
      <div className="flex h-screen overflow-hidden">

        <div
          className="transition-all duration-300	"
          style={{ width: `${sidebarWidth}px` }}
        >
          <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        </div>
        <div className="flex-1 overflow-y-auto p-6 bg-white">
          <Outlet />
        </div>
      </div>
    </div>
      </>
  )
}

export default MainLayout