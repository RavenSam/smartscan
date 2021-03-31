import { Pencil, Trash, Selector } from "heroicons-react"

export default function DashTable() {
   return (
      <>
         <h2 className="text-lg font-semibold capitalize mt-6">recent documents</h2>
         <div className="bg-white mt-3 w-full p-3 rounded-sm shadow-md">
            <table className="  w-full ">
               <thead>
                  <tr>
                     <th className="text-sm text-left  capitalize ">
                        Name <Selector size=".95rem" className="inline" />
                     </th>
                     <th className="text-sm text-left  capitalize hidden lg:table-cell">
                        Type <Selector size=".95rem" className="inline" />
                     </th>
                     <th className="text-sm text-left  capitalize ">
                        Description <Selector size=".95rem" className="inline" />
                     </th>
                     <th className="text-sm text-left  capitalize   hidden sm:table-cell ">
                        Process <Selector size=".95rem" className="inline" />
                     </th>
                     <th className="text-sm text-left  capitalize  hidden md:table-cell">
                        Accuracy <Selector size=".95rem" className="inline" />
                     </th>
                     <th className="text-sm text-left  capitalize">Actions</th>
                  </tr>
               </thead>
               <tbody>
                  {[1, 2, 3, 4, 5, 6].map((row) => (
                     <tr key={row}>
                        <td className="text-xs font-light">
                           <img
                              src="/static/icons/pdf.png"
                              alt="pdf"
                              className=" h-6 w-5 mr-1 hidden sm:inline"
                              width="27px"
                              height="30px"
                           />
                           document name
                        </td>
                        <td className="text-xs font-light capitalize  hidden lg:table-cell"> document type</td>
                        <td className="text-xs font-light ">Lorem, ipsum dolor sit amet consectetur</td>
                        <td className="text-xs font-light capitalize hidden sm:table-cell "> document process</td>
                        <td className="text-xs font-light  hidden md:table-cell">90%</td>
                        <td className="flex items-center justify-between">
                           <button
                              className="rounded-full bg-gray-300 w-8 h-8 flex items-center justify-center m-px text-gray-700"
                              aria-label="Edit Button"
                           >
                              <Pencil size="1.1rem" />
                           </button>
                           <button
                              className="rounded-full bg-gray-300 w-8 h-8 flex items-center justify-center m-px text-gray-700"
                              aria-label="Delete Button"
                           >
                              <Trash size="1.1rem" />
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </>
   )
}
