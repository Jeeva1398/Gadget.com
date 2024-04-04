import { Outlet } from 'react-router-dom'
import { NavBar } from './NavBar'
import { Footer } from './Footer'

export const HomePage = ()=>{
return(
    <div>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
)
}