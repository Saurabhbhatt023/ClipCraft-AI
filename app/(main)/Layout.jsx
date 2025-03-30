import React from 'react'
import DashboardProvider from './provider'

const DashboardLayout = ({children}) => {
  return (
    <div className="relative h-full">
      <DashboardProvider>
        {children}
      </DashboardProvider>
    </div>
  )
}

export default DashboardLayout
