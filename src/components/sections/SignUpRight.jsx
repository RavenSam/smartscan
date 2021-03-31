import { useState } from "react"
import { EyeOffOutline, EyeOutline } from "heroicons-react"

export default function SignUpRight() {
   // Name input State
   const [name, setName] = useState("")
   // Email input State
   const [email, setEmail] = useState("")
   // Password input State
   const [password, setPassword] = useState("")
   // Show Password Icon
   const [showPW, setShowPW] = useState(false)

   // Function For Sign up
   // Function run on submit of the form
   const handleSubmit = (e) => {
      e.preventDefault()

      console.log({ name, email })
   }

   return (
      <>
         <div className="flex-1 h-screnn flex items-center justify-center flex-col h-screen md:px-4 lg:px-0">
            <h1 className="font-body text-3xl font-semibold mb-5">Register</h1>

            <p className="text-g-1 font-body text-base text-center mb-5">
               Fill out the information below to <br /> create your account
            </p>

            <form onSubmit={handleSubmit} className="w-full px-4 sm:w-110 md:w-full lg:w-110 lg:p-0 mx-auto">
               <div className="flex flex-col mt-2 mb-4 ">
                  <label htmlFor="name" className="text-g-1 font-body">
                     Name
                  </label>
                  <input
                     onChange={(e) => setName(e.target.value)}
                     value={name}
                     type="text"
                     name="name"
                     id="name"
                     className="bg-g-2 w-full rounded border font-body font-medium py-3 sm:py-4 px-3 text-base  transition duration-300 ease-in-out focus:outline-none focus:border-primary "
                  />
               </div>

               <div className="flex flex-col mt-2 mb-4">
                  <label htmlFor="email" className="text-g-1 font-body">
                     Email
                  </label>
                  <input
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     type="email"
                     name="email"
                     id="email"
                     className="bg-g-2 w-full rounded border font-body font-medium  py-3 sm:py-4  px-3 text-base transition duration-300 ease-in-out focus:outline-none focus:border-primary "
                  />
               </div>

               <div className="flex flex-col mt-2 mb-4 relative">
                  <label htmlFor="password" className="text-g-1 font-body">
                     Password
                  </label>
                  <input
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     type={showPW ? "text" : "password"}
                     name="password"
                     id="password"
                     className="bg-g-2 w-full rounded border font-body font-medium  py-3 sm:py-4  px-3 pr-14 text-base transition duration-300 ease-in-out  focus:outline-none focus:border-primary"
                  />

                  <span className="absolute right-4 text-g-1 top-2/4 cursor-pointer" onClick={() => setShowPW(!showPW)}>
                     {showPW ? <EyeOutline /> : <EyeOffOutline />}
                  </span>
               </div>

               <input
                  type="submit"
                  value="Sign Up"
                  className=" bg-primary cursor-pointer text-white w-full rounded font-body font-medium  py-3   px-3 text-base mt-2 mb-4 transition duration-300 ease-in-out sm:py-4 hover:bg-blue-700"
               />
            </form>

            <p className="font-body text-base mt-3">
               Already have an account?{" "}
               <a href="#" className="text-secondary font-semibold">
                  Sign In
               </a>
            </p>
         </div>
      </>
   )
}
