import { useState, useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import { Link } from 'react-router-dom'
export default function App() {

  const [breakMe,setBreakMe] = useState(false);

  const handleClick = () => {
    setBreakMe(prevBreak => {
      const newBreak = !prevBreak;
      console.log(newBreak);
      return newBreak
    })
  };
  return (
    <>
  

    <h1 className={"bg-amber-800 text-4xl text-amber-200 text-center"}>
      <img src="https://wallpapercave.com/wp/wp8729574.jpg" alt="Rick is Watching"
      className={"h-[50vmin] w-[100%]"}/>
      </h1>  
        <div className="nav">
        <Link as = {Link} to="/"> Home </Link>
        <Link as = {Link} to="/AboutPage/"> about </Link>
        <Link as = {Link} to="/NotFoundPage/"> Not Found </Link>
    </div>
    <button className={"border-2"} onClick={handleClick}>Break ME</button>      
    <Outlet /></>
  )
}


