import React from 'react'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from "@/components/ui/sidebar"

const AppSidebar = () => {
  return (
    <Sidebar className="border-r">
      <SidebarHeader className="border-b p-4">
        <h2 className="text-lg font-semibold">ClipCraft AI</h2>
      </SidebarHeader>
      <SidebarContent className="p-4">
        <SidebarGroup className="space-y-2">
          {/* Add your sidebar items here */}
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        {/* Add footer content */}
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar
