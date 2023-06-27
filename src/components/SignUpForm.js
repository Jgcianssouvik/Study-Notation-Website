import { useState } from "react";

import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



function SignUpForm({setIsLoggedIn}){


const navigate=useNavigate();

const [formData,setFormData]=useState({firstName:"",lastName:"",email:"",password:"",cnfPassword:""})


const [showPassword,setShowPassword]=useState(false);

const [showcnfPassword,setShowcnfPassword]=useState(false);
const [accountType,setAccountType]=useState("student")

function changeHandler(event){
    setFormData((prevData)=>(
        {...prevData,[event.target.name]:event.target.value}
    ))
}

function submitHandler(event){
event.preventDefault();
if(formData.password!= formData.cnfPassword){
    toast.error("Password do not match");
    return;
}
setIsLoggedIn(true);
toast.success("Account Created");
const accountData={
    ...formData
}

const finalData={...accountData,accountType}

console.log("printing final account data");
console.log(finalData);

navigate("/dashboard")

}

    return(
        <div className="">

<div className="flex flex-row bg-white p-1 gap-x-1 my-6 rounded-full max-w-max">

<button onClick={()=>setAccountType("student")} className={`${accountType==="student" ? " bg-yellow-200 text-black opacity-75" :"bg-transparent text-black " } py-2 px-5 rounded-full transition-all duration-200`}>Student</button>
<button onClick={()=>setAccountType("instructor")} className={`${accountType==="instructor" ? " bg-yellow-200 text-black opacity-75" :"bg-transparent text-black " } py-2 px-5 rounded-full transition-all duration-200`}       >Instructor</button>

</div>
 
<form onSubmit={submitHandler}>

{/* firstName & lastName */}
  
<div className="flex gap-x-4 ">


<label className="w-full"><p className="text-white text-[0.875rem] mb-1 leading-[1.375rem]">First Name<sup className="text-pink-300">*</sup></p>

<input className="bg-white rounded-[0.5rem] text-blue-300 w-full p-[12px] " required type="text" name="firstName" onChange={changeHandler} placeholder="Enter First Name" value={formData.firstName}></input>

</label>


<label className="w-full"><p className="text-white text-[0.875rem] mb-1 leading-[1.375rem]">Last Name<sup className="text-pink-300">*</sup></p>

<input className="bg-white rounded-[0.5rem] text-blue-300 w-full p-[12px] " required type="text" name="lastName" onChange={changeHandler} placeholder="Enter Last Name" value={formData.lastName}></input>

</label>

</div>

{/* email address */}

<div className="mt-[20px]">
<label className="w-full "><p className="text-white text-[0.875rem] mb-1 leading-[1.375rem]">Email<sup className="text-pink-300">*</sup></p>

<input className="bg-white rounded-[0.5rem] text-blue-300 w-full p-[12px] " required type="email" name="email" onChange={changeHandler} placeholder="Enter Email Address" value={formData.email}></input>

</label>

</div>




{/* password and cnfpassword */}

<div className="flex gap-x-4 mt-[20px]">

<label className="relative w-full "><p className="text-white text-[0.875rem] mb-1 leading-[1.375rem]"> Create Password<sup className="text-pink-300">*</sup></p>

<input className="bg-white rounded-[0.5rem] text-blue-300 w-full p-[12px] " required type={showPassword? ("text"):("password")} name="password" onChange={changeHandler} placeholder="Enter Password" value={formData.password}></input>


<span className="absolute right-3 cursor-pointer top-[38px]" onClick={()=>setShowPassword((prev)=>!prev)}>

    {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>):(<AiOutlineEye fontSize={24} fill="#AFB2BF" />)}
</span>

</label>


<label className="relative w-full"><p className="text-white text-[0.875rem] mb-1 leading-[1.375rem]"> Confirm Password<sup className="text-pink-300">*</sup></p>

<input className="bg-white rounded-[0.5rem] text-blue-300 w-full p-[12px] " required type={showcnfPassword? ("text"):("password")} name="cnfPassword" onChange={changeHandler} placeholder="Confirm Password" value={formData.cnfPassword}></input>


<span className="absolute right-3 cursor-pointer top-[38px]" onClick={()=>setShowcnfPassword((prev)=>!prev)}>

    { showcnfPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>):(<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
</span>

</label>

</div>

<button className="bg-yellow-200 rounded-[8px] text-black font-medium px-[12px] py-[8px] mt-2 w-full">Create Account</button>


















</form>

 </div>
    )
}
export default SignUpForm;