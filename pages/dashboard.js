import { useState } from "react"
import Meta from "@components/partials/seo-meta"

// Components
import TopNav from "@components/sections/TopNav"
import LeftNav from "@components/sections/LeftNav"
import DashboardContent from "@components/sections/DashboardContent"

export default function dashboard() {
   const [open, setOpen] = useState(false)

   return (
      <>
         <Meta title="Dashboard" desc="Nextjs Tailwind CSS" />

         <TopNav />

         <div className="mt-20 relative w-full">
            <LeftNav open={open} setOpen={setOpen} />

            <DashboardContent setOpen={setOpen} />
         </div>
      </>
   )
}
