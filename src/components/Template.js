
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";

import {FcGoogle} from 'react-icons/fc'


function Template({title,desc1,desc2,image,formType,setIsLoggedIn}){
    return(

<div className="flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 justify-between">
         
    <div className="w-11/12 max-w-[450px] mx-0">
    <h1 className="text-white font-semibold text-[1.875rem] leading-[2.375rem]">{title}</h1>

<p className="text-[1.125rem] leading-[1.625rem] mt-4">
<span className="text-white">{desc1}</span>
<br/>
<span className="text-blue-300 italic">{desc2}</span>
</p>
 
{ formType ==="SignUp"?(<SignUpForm setIsLoggedIn={setIsLoggedIn} />):(<LoginForm  setIsLoggedIn={setIsLoggedIn}   />)}

<div className="flex flex-row w-full items-center my-4 gap-x-2 ">

      <div className="h-[1px] w-full bg-blue-700"></div>
      <p className="text-white font-medium leading-[1.375rem] ">OR</p>
      <div  className="h-[1px] w-full bg-blue-700"></div>

 </div>


    
  <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-white border border-blue-500 px-[12px] py-[8px] gap-x-2 mt-2">
       <FcGoogle/>
       <p>Sign in with Google</p>
       </button>

  
    </div>



     

<div className="relative w-11/12 max-w-[450px] ">
<img src="https://cdn.pixabay.com/photo/2016/02/19/15/27/frame-1210509_640.png" alt="pattern" width={350} height={80} loading="lazy" className=" -top-4 right-4 ml-28"   />
<img src={image} alt="students" width={300} height={100} loading="lazy" className="absolute -top-4 right-4 mt-12"/>
</div>


 </div>
    )
}
export default Template;