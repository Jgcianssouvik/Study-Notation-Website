import { useState } from "react";

import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai';
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LoginForm({setIsLoggedIn}){

const navigate=useNavigate();

const [formdata,setFormData]=useState({Email:'',password:''})

const [showPassword,setShowPassword]=useState(false)

function changeHandler(event){
    setFormData((prevData)=>(
        {...prevData,[event.target.name]:event.target.value}
    ))
}

function submitHandler(event){
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In")
console.log("printing the form data");
console.log(formdata);
    navigate("/dashboard")
}

    return(
        <div className="">

<form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6 ">

<label id="Email" className="w-full "><p className="text-white text-[0.875rem] mb-1 leading-[1.375rem]">Email Address<sup className="text-pink-300">*</sup></p>

<input className="bg-white rounded-[0.5rem] text-blue-300 w-full p-[12px] " required  type="email" name="Email" id="Email" value={formdata.Email} onChange={changeHandler} placeholder="Enter email address"></input>

</label>

<label id="password" className="w-full relative"  ><p className="text-white text-[0.875rem] mb-1 leading-[1.375rem]">Password<sup className="text-pink-300">*</sup></p>

<input  className="bg-white rounded-[0.5rem] text-blue-300 w-full p-[12px] "  required type={showPassword ? ("text"):("password")} name="password" id="password" value={formdata.password} onChange={changeHandler} placeholder="Enter Your Password"></input>

<span className="absolute right-3 cursor-pointer top-[38px]" onClick={()=>setShowPassword((prev)=>!prev)}>

    {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />  ):(<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
</span>


<Link to="#" ><p className=" text-xs mt-1 text-blue-300 ml-auto max-w-max">Forgot password</p></Link>

</label>

<button className="bg-yellow-200 rounded-[8px] text-black font-medium px-[12px] py-[8px] mt-6">Sign In</button>



</form>  




            
        </div>
    )
}
export default LoginForm;