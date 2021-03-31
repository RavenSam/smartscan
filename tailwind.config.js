module.exports = {
    // for developement
   //purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
    // for production
    purge: {
       enabled: true,
       content:["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"]
    },
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
         fontFamily: {
            body: ["Poppins", "sans-serif"],
         },

         spacing: {
            110: "480px",
            75: "300px",
         },

         colors: {
            primary: "#4F6AEC",
            secondary: "#00BFFF",
            bg1: "#080E36",
            g: {
               1: "#979797",
               2: "#F6F6F8",
               3: "#F4F7FA",
            },
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
}
