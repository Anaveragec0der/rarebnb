import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Image from "../Image"
export default function IndexPage(){
    const[places,setPlaces]=useState([])
    useEffect(()=>{
            const testAd = document.createElement('div');
            testAd.className = 'ad';
            testAd.style.width = '1px';
            testAd.style.height = '1px';
            testAd.style.position = 'absolute';
            testAd.style.top = '-10px';
            testAd.style.left = '-10px';
            document.body.appendChild(testAd);
        
            setTimeout(() => {
              if (testAd.offsetHeight === 0) {
                alert("Please disable your adblocker and enable all cookies for https://rarebnb.vercel.app otherwise you will get cors error and will be unable to access the full functionality of this website.");
              }
              document.body.removeChild(testAd);
            }, 100)
            
        axios.get('/places').then(response=>{
           setPlaces(response.data)
        })
    },[])
    return(
        <div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {places.length>0 && places.map((place,index)=>(
                <Link to={'/place/'+place._id} key={index}>
                    <div className="bg-gray-500 mb-2 rounded-2xl flex">
                    {place.photos?.[0] &&(
                        <Image className="rounded-2xl object-cover aspect-square" src={place.photos ?.[0]} alt="photos of different locations" />
                    )}
                    </div>
                    <h2 className="font-bold">{place.address}</h2>
                    <h3 className="text-sm text-gray-500">{place.title}</h3>
                    <div className="mt-1">
                    <span className="font-bold">₹{place.price}</span> per night
                    </div>
                </Link>
            ))}
        </div>
    )
} 
