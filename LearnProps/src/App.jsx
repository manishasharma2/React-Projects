import { useState } from 'react'
import Card from './components/Card';
import './App.css'

function App() {
  
  const[count, setCount] = useState(0);

  function handleCountClick(){
    
    setCount(count+1 > 20 ? count : count +1);
  }
  function DecCount(){0+-
    setCount(count - 1 < 0 ? 0 : count - 1);
  }
  return (
    <>

     <div className="flex flex-wrap gap-4 p-4">
        <Card Img="https://images.pexels.com/photos/19127257/pexels-photo-19127257/free-photo-of-woman-sitting-on-a-rug-in-a-living-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" Username="Alina" Title="React Developer"/>

        <Card Img="https://images.pexels.com/photos/29626562/pexels-photo-29626562/free-photo-of-stylish-woman-posing-in-baku-cityscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" Username="Hites" Title="Web Developer"/>

        <Card Img="https://images.pexels.com/photos/20369629/pexels-photo-20369629/free-photo-of-smiling-woman-sitting-in-black-coat-and-tights.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" Username="Jack" Title="Android Developer"/>
        

       
        </div>
    </>
  )
}

export default App
