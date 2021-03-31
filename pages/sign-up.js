
// Meta for SEO
// title => Titile of the page
// desc => Description of the page
import Meta from "@components/partials/seo-meta"

// Components
import SignUpLeft from "@components/sections/SignUpLeft"
import SignUpRight from "@components/sections/SignUpRight"

export default function signUp() {
 
    
   return (
      <>
         <Meta title="Register | SamartScan.ai" desc="Create your account" />

         <div className="flex ">
            <SignUpLeft />

            <SignUpRight />
         </div>
      </>
   )
}
