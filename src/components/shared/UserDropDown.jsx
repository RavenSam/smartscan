import { useState } from "react"
import { ChevronDown } from "heroicons-react"

export default function UserDropDown() {
   const [show, setShow] = useState(false)

   const showClasses = show
      ? "transition ease-in duration-75 transform opacity-100 scale-100 "
      : "transition ease-out duration-100 transform opacity-0 scale-95 hidden"

   return (
      <>
         <div className={`relative inline-block text-left lg:w-52`}>
            <div>
               <button
                  onBlur={() => setShow(false)}
                  onClick={() => setShow(!show)}
                  type="button"
                  className="flex items-center justify-between font-semibold  w-full rounded-md px-4 py-2 bg-white text-sm text-gray-400  hover:bg-gray-50 focus:outline-none  "
                  id="user-menu"
                  aria-expanded="true"
                  aria-haspopup="true"
               >
                  <img src="/static/images/user.png" alt="user" className="rounded-full inline" width="40px" height="40px" />
                  <span className=" text-black hidden lg:inline ">John Smith</span>
                  <ChevronDown className="hidden lg:inline" />
               </button>
            </div>

            <div
               className={`${showClasses} origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none `}
               role="menu"
               aria-orientation="vertical"
               aria-labelledby="options-menu"
            >
               <div className="py-1" role="none">
                  <a href="#" className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100" role="menuitem">
                     Profile
                  </a>

                  <a href="#" className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100" role="menuitem">
                     Help & Support
                  </a>

                  <a href="#" className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100" role="menuitem">
                     Settings
                  </a>

                  <hr />

                  <a href="#" className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100" role="menuitem">
                     Log Out
                  </a>
               </div>
            </div>
         </div>
      </>
   )
}
