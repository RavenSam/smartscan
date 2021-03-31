import { ChevronLeftOutline } from "heroicons-react"
import { IconDashboard, IconUpload, IconExceptions, IconSettings, IconHelp } from "@components/shared/DashIcons"
import Link from "next/link"
import { useRouter } from "next/router"

const sidePages = [
   { name: "Dashboard", href: "/dashboard", icon: IconDashboard },
   { name: "Upload Document", href: "#", icon: IconUpload },
   { name: "Exceptions", href: "#", icon: IconExceptions },
   { name: "Settings", href: "#", icon: IconSettings },
   { name: "help", href: "#", icon: IconHelp },
]

export default function LeftNav({ open, setOpen }) {
   // Side menu Class
   // when open menu and when close
   // on small screen
   const classToggle = open ? "left-0 w-3/4" : "-left-full"

   //    Function to close the Menu
   const handleClose = () => setOpen(false)

   // return the current page path
   const path = useRouter().pathname

   return (
      <>
         <div className={`bg-bg1 fixed top-0 ${classToggle} bottom-0 mt-20 z-10 md:pt-7 md:left-0 md:w-14 lg:w-75`}>
            <div className="flex flex-col text-white">
               {/* Button to close the side nav on small screen */}
               <div className="w-full text-center flex items-center justify-center py-3 md:hidden">
                  <button className="rounded-full  p-2" onClick={handleClose}>
                     <ChevronLeftOutline />
                  </button>
               </div>

               {sidePages.map((page) => (
                  <Link key={page.name} href={page.href}>
                     <a
                        className={`flex items-center w-full p-4 opacity-50 text-sm transition duration-200  hover:opacity-100 ${
                           path === page.href && "opacity-100"
                        } `}
                     >
                        <div className="icon ">{page.icon}</div>
                        <p className="ml-2 md:hidden lg:block">{page.name}</p>
                     </a>
                  </Link>
               ))}
            </div>
         </div>
      </>
   )
}
