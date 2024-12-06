import { useState,useCallback ,useEffect,useRef} from 'react'

function App() {

  const [length,setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password , setPassword] = useState('');

  //useRef Hook

  const passwordRef =  useRef(null);
  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    if(numberAllowed) str += "1234567890";
    if(charAllowed) str += "!@#$%^&*()_+<>?:{}|/~`";

    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);

  },[length,charAllowed,charAllowed,setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password);
  },[password]);


  useEffect(()=>{
    passwordGenerator();
  },[length,charAllowed,numberAllowed,passwordGenerator])
  return (
    <>
<div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://videos.pexels.com/video-files/3129977/3129977-uhd_2560_1440_30fps.mp4"
        autoPlay
        loop
        muted
      ></video>
//       <div className='relative z-10 w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-blue-500 bg-gray-900'
        
      >
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" 
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            onClick={copyPasswordToClipboard}
          >
            
            copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>

          <div className='flex item-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='curosr-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label > Length: {length}</label>
          </div>

          <div className='flex item-center gap-x-1'>
            <input type="checkbox" 
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor='NumberInput'>Number</label>
          </div>

          <div className='flex item-center gap-x-1'>
            <input type="checkbox" 
              defaultChecked={charAllowed}
              id='charInput'
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor='characterInput' >Special Char</label>
          </div>
            </div>
         </div>
       </div>
     </>
  )
}

export default App

