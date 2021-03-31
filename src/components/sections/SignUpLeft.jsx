export default function SignUpLeft() {
   return (
      <>
         <div className="flex-1 h-screen hidden md:block ">
            <img
               className="lg:object-cover w-full h-full"
               src="/static/images/image3.png"
               alt="Register Image"
               width="683px"
               height="697px"
            />

            <img
               className="absolute top-4 left-8  h-8"
               src="/static/images/logo.png"
               alt="SmartScan.AI Logo"
               width="164px"
               height="32px"
            />

            <p className="absolute bottom-4 left-8 text-sm text-white opacity-80">
               © Smart Scan 2021, All Rights Reserved
            </p>
         </div>
      </>
   )
}
