import { SearchOutline, Bell } from "heroicons-react"
import UserDropDown from "@components/shared/UserDropDown"

export default function TopNav() {
   return (
      <>
         <div className="fixed top-0 left-0 w-full h-20 z-10 bg-white">
            <div className="w-full h-full flex items-center justify-between px-4 lg:px-7">
               <div className="flex h-full  items-center ">
                  <img
                     className="h-8"
                     src="/static/images/logo2.png"
                     alt="SmartScan.AI Logo"
                     width="164px"
                     height="32px"
                  />

                  <div className="md:flex items-center bg-g-2 px-4 rounded ml-10 lg:ml-20 hidden ">
                     <SearchOutline className="text-g-1" />
                     <input
                        type="text"
                        className="bg-g-2 focus:outline-none p-2 "
                        placeholder="Search"
                        aria-label="Searc"
                     />
                  </div>
               </div>

               <div className="flex items-center  h-full ">
                  <div className="notification relative  cursor-pointer text-gray-400 mr-4 hidden sm:block">
                     <span className="w-4 h-4 text-center text-xs leading-4 absolute top-0 right-0 rounded-full text-white bg-red-600">
                        2
                     </span>
                     <Bell size="2rem" />
                  </div>

                  <UserDropDown />
               </div>
            </div>
         </div>
      </>
   )
}
