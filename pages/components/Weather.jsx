import React from'react' 
import Image from 'next/image';
const Weather=({data})=>{
    console.log(data)
    return(
        
        <div className='relative flex flex-col justify-between max-w-[500px] w-full p-4 h-[90vh] m-auto text-gray-700 z-4'>
            <div className='relative flex  justify-between pt-12'>
                <div className='flex flex-col item-center'>
                   <Image src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt='/'  height='100'width='100' className='z-[5] relative'/>
                <p className='text-2xl'>{data.weather[0].main}</p>
                <p className='text-xl'>{data.weather[0].description}</p>
                </div>
             <p className='text-9xl'>{data.main.temp.toFixed(0)}&#176;</p>

            </div>
            <div className='bg-black/70 text-white rounded-md p-8'>
               <p className='text-center text-2xl pb-6'>Weather in {data.name}</p>
               <p className='text-center text-2xl pb-6'>City in {data.sys.country}</p>
            <div className='flex justify-between text-center'>
            <div>
            <p className='text-xl'>Feels Like</p>
                <p className='font-bold text-2xl'>{data.main.feels_like.toFixed(0)}&#176;</p>
                
            </div>
            <div>
            <p className='text-xl'>Humidity</p>
                <p className='font-bold text-2xl'>{data.main.humidity}%</p>
                
            </div>
            <div>
            <p className='text-xl'>Wind</p>
                <p className='font-bold text-2xl'>{data.wind.speed.toFixed(0)}MPH</p>
                
            </div>
            </div>
            </div>

        </div>
    );
}
export default Weather;