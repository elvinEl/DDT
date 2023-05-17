import React from 'react'
import { Outlet } from 'react-router-dom'

function PortfolioLayout() {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default PortfolioLayout