import { useState } from "react"
import { ChevronDown } from "heroicons-react"

export default function DropDown({ children, title = "Options", className }) {
   const [show, setShow] = useState(false)

   const showClasses = show
      ? "transition ease-in duration-75 transform opacity-100 scale-100"
      : "transition ease-out duration-100 transform opacity-0 scale-95 hidden"

   return (
      <>
         <div className={`relative inline-block text-left ${className}`}>
            <div>
               <button
                  onBlur={() => setShow(false)}
                  onClick={() => setShow(!show)}
                  type="button"
                  className="inline-flex justify-between w-full rounded-md px-4 py-2 bg-white text-sm font-medium text-gray-400 hover:bg-gray-50 focus:outline-none "
                  id={title}
                  aria-expanded="true"
                  aria-haspopup="true"
               >
                  {title}

                  <ChevronDown />
               </button>
            </div>

            <div
               className={`${showClasses} origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none `}
               role="menu"
               aria-orientation="vertical"
               aria-labelledby="options-menu"
            >
               <div className="py-1" role="none">
                  {children}
               </div>
            </div>
         </div>
      </>
   )
}
