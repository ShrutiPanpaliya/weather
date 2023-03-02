import axios from "axios"
import { useState ,useRef} from "react"
import {BsSearch} from 'react-icons/bs'
import Head from "next/head"
import Image from "next/image"
import Weather from "./components/Weather"
export default function Home() {
  const [city,setCity]=useState('')
  const [weather,setWeather]=useState({})
  const [load,setLoad]=useState(false)
  const message=useRef(null);
  
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4a200620925961b941e6fcb763415922`
  const weatherF=async(e)=>{
    e.preventDefault()
    setLoad(true)
    message.current.value='';

    axios.get(url,{headers:{'Content-Type': 'application/json'}}).then(async(res)=>
    {
      setWeather(res.data)
      // console.log(res.data)
    })
    setCity('')
    setLoad(false)
  }
  if(load)
  { return <i class="fa fa-spinner fa-2x fa-spin" aria-hidden='true'></i>}
  else{
  
  return (
    <div>
      <Head>
      <title>NextJs</title>
    </Head>
    <div className="absolute top-0 bottom-0 right-0 left-0 bg-black/59 z-[1] "/>
    <Image src='https://images.unsplash.com/photo-1505533542167-8c89838bb19e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
     layout='fill'
     alt=''
     className="cover"/>
    
      <div className="relative flex justify-between item-center max-w-[500px] w-full m-auto pt-5 text-black z-10 ">
        <form onSubmit={weatherF} className='flex justify-between m-auto bg-transparent border border-grey-300 w-full text-black rounded-2xl item-center p-3 '>
          <div>
            <input 
            ref={message}
            onChange={(e)=>setCity(e.target.value)}
            className='bg-transparent text-grey focus:outline-none text-2xl placeholder:text-grey-300' type='text' placeholder="Search by City Name"/>
          </div>
          <button onClick={weatherF}><BsSearch size={20}/></button>
         
        </form>
    </div>
    {/* weather */}
    {weather.main && <Weather data={weather}/>}
    </div>
      
    
  );
}
}