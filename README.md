## Hello Guys
#### If you are interested in learning more about the React Fiber Architecture or wish to dive deeper into React, I highly recommend referring to this GitHub repository.
https://github.com/acdlite/react-fiber-architecture


### These are the commands followed to create a React + Vite Project<br>

```cmd
npm create vite@latest 
cd Project_name
npm install
npm run dev
```
### If you want to use Tailwind in your project follow these


```cmd
npm install -D tailwindcss
npx tailwindcss init
```


And update the tailwind.config.js file as follows-<br>


``` css
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}


```
### Now add these 3 lines in your main css file<br>

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Now you are ready to use Tailwind in your project just run npm run dev command :)
