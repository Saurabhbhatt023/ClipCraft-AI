import React from "react";
import AppSidebar from "./_components/AppSidebar";
import AppHeader from "./_components/AppHeader";
import { SidebarProvider } from "@/components/ui/sidebar";

const DashboardProvider = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <AppHeader />

          {/* Page Content */}
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardProvider;
