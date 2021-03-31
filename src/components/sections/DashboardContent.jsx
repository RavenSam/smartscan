import { AdjustmentsOutline } from "heroicons-react"
import DropDown from "@components/shared/DropDown"
import DashTable from "./DashTable"

// drop down data
const dropDownOptions = ["Option 1", "Option 2", "Option 3"]

// section 2 data
const cardIcons = [
   { title: 250, sub: "total pages automated", img: "/static/icons/pages_automated.png" },
   { title: "90.99%", sub: "average accuracy", img: "/static/icons/average_accuracy.png" },
   { title: 100, sub: "totla exceptions", img: "/static/icons/total_exceptions.png" },
   { title: "22 h", sub: "time saved", img: "/static/icons/time_saved.png" },
   { title: "1500 $", sub: "cost saved", img: "/static/icons/cost_saved.png" },
]

export default function DashboardContent({ setOpen }) {
   const handleOpen = () => setOpen(true)

   return (
      <>
         <div className="bg-g-3 p-2 sm:p-5 md:p-9  md:ml-14 lg:ml-75">
            {/* SECTION 1   TITLE & DROPDOWN >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
               <div className="flex items-center justify-start md:mb-0 mb-5">
                  <button className="mr-5  bg-gray-500 rounded-xl text-white p-2 md:hidden" onClick={handleOpen}>
                     <AdjustmentsOutline size="1.5rem" />
                  </button>
                  <h1 className="text-2xl md:text-3xl font-semibold">Dashboard</h1>
               </div>

               <div className="flex flex-col sm:flex-row items-center w-full md:w-max">
                  <DropDown title="Business Process" className="m-2">
                     {dropDownOptions.map((option) => (
                        <a
                           href="#"
                           key={option}
                           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                           role="menuitem"
                        >
                           {option}
                        </a>
                     ))}
                  </DropDown>

                  <DropDown title="Document Type" className="m-2">
                     {dropDownOptions.map((option) => (
                        <a
                           href="#"
                           key={option}
                           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                           role="menuitem"
                        >
                           {option}
                        </a>
                     ))}
                  </DropDown>

                  <DropDown title="Document Name" className="m-2">
                     {dropDownOptions.map((option) => (
                        <a
                           href="#"
                           key={option}
                           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                           role="menuitem"
                        >
                           {option}
                        </a>
                     ))}
                  </DropDown>
               </div>
            </div>

            {/* SECTION 2   GRID INFO CARDS  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-6">
               {cardIcons.map((card) => (
                  <div
                     key={card.sub}
                     className=" w-full bg-white rounded-md px-3 py-4 flex items-center justify-between"
                  >
                     <div className="">
                        <h2 className="text-xl font-semibold mb-3">{card.title}</h2>
                        <p className="text-gray-400 text-sm capitalize">{card.sub}</p>
                     </div>

                     <img src={card.img} alt={card.sub} className="w-16" width="37px" height="35" />
                  </div>
               ))}
            </div>

            {/* SECTION 3   RECENT DOCUMENT  TABLE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

            <DashTable />
         </div>
      </>
   )
}
