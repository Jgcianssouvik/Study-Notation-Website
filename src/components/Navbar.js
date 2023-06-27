import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar(props){

    let isLoggedIn=props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;
    return(
        <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">

<Link to='/'>

<img  src="https://assets.website-files.com/62b3125df8c8a46ebb3fe082/62b31ba5226e316dfe84141f_Group%201%20(5).png"  alt="logo" width={160} height={32} loading="lazy"/>
</Link>

<nav>
<ul className="flex gap-x-6 text-white">
    <li>
        <Link to='/'>Home</Link>
    </li>
    <li>
        <Link to='/'>About</Link>
    </li>
    <li>
        <Link to='/'>Contact</Link>
    </li>
   
</ul>

</nav>

<div className="flex items-center gap-x-4">

{!isLoggedIn && <Link to="/login"><button className="bg-black text-white py-[8px] px-[12px] rounded-[8px] border border-blue-700 ">Login</button></Link>}
{!isLoggedIn  &&   <Link to="/signUp"><button  className="bg-black text-white py-[8px] px-[12px] rounded-[8px] border border-blue-700 " >Sign up</button></Link>}
{isLoggedIn && <Link to="/"><button className="bg-black text-white py-[8px] px-[12px] rounded-[8px] border border-blue-700 " onClick={
    ()=>{
        setIsLoggedIn(false);
        toast.success("Logged Out")
    }}>Logout</button></Link>}
{isLoggedIn &&  <Link to="/dashboard"><button className="bg-black text-white py-[8px] px-[12px] rounded-[8px] border border-blue-700 "    >Dashboard</button></Link>}







</div>


        </div>
    )
}
export default Navbar;