/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      fontFamily:{
         sans:["Roboto Mono"]
      },
      extend: {
         colors:{
            pizza:"#568932"
         },
         height:{
            screen:"100dvh"
         }

      },
   },
   plugins: [],
};
