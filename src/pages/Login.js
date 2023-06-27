import Template from "../components/Template";





function Login({setIsLoggedIn}){
    return(
       <div>

      <Template

    title="Welcome Back"
    desc1="Build skills for today ,tomorrow, and beyond"
    desc2="Education to future-proof your carrer"
    image="https://www.visualsstock.com/details_watermark.php?filename=32031"
    formType="login"
    setIsLoggedIn={setIsLoggedIn}

      />


       </div>
    )
}
export default Login;