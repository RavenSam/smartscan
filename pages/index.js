import Meta from "@components/partials/seo-meta"
import Link from "next/link"

const pages = [
   { name: "Sign Up", href: "/sign-up" },
   { name: "Dashboard", href: "/dashboard" },
]

export default function Home() {
   return (
      <>
         <Meta title="Home | SamartScan.ai" desc="Nextjs Tailwind CSS" />

         <div className="container mx-auto h-screen flex flex-col items-center justify-center bg-gray-50">
            <div className="w-auto inline-block  bg-black py-6 px-16 rounded-sm">
               <h1 className="text-7xl text-center text-white tracking-wider font-body font-bold">Welcome</h1>
            </div>

            <h2 className="text-4xl text-center mt-8">You can now visit the following pages</h2>

            <div className="flex items-center mt-8">
               {pages.map((page) => (
                  <Link key={page.name} href={page.href}>
                     <a className="bg-primary text-white px-6 py-3 font-semibold rounded-md m-3 tracking-wider">
                        {page.name}
                     </a>
                  </Link>
               ))}
            </div>
         </div>
      </>
   )
}
