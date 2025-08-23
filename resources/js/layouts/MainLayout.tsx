import MenuBar from '@/components/MenuBar'
import React from 'react'

const MainLayout = ({children} : {children : React.ReactNode}) => {
  return (
    <div className='w-full h-screen bg-white text-black'>
        <header>
            <MenuBar/>
        </header>
        <main>{children}</main>
    </div>
  )
}

export default MainLayout
