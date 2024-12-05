## Hello Guys
#### If you are interested in learning more about the React Fiber Architecture or wish to dive deeper into React, I highly recommend referring to this GitHub repository.
https://github.com/acdlite/react-fiber-architecture


### These are the commands followed to create a React + Vite Project<br>
npm create vite@latest<br>
cd "ProjectName"<br>
npm install -> This installs all the dependencies<br>
npm run dev -> starts the project on localHost<br><br>


### If you want to use Tailwind in your project follow these
npm install -D tailwindcss<br>
npx tailwindcss init<br>


And update the tailwind.config.js file as follows-<br>
/** @type {import('tailwindcss').Config} */<br>

module.exports = {<br>
  content: ["./src/**/*.{html,js}"],<br>
  theme: {<br>
    extend: {},<br>
  },<br>
  plugins: [],<br>
}<br>

### Now add these 3 lines in your main css file<br>
@tailwind base;<br>
@tailwind components;<br>
@tailwind utilities;<br>

## Now you are ready to use Tailwind in your project just run npm run dev command :)
