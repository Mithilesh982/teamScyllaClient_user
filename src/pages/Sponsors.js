import React,{useEffect} from 'react'
import './Sponsr.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Sponsors() {

  
  useEffect(()=>{
   Aos.init ({duration:2000})
  },[])

  return (
    <>
    <Navbar/>

    <div className="container-fluid px-0">
      <div className="row position-relative px-0 bg-dark" style={{filter:"blur(5px)" , marginTop:"-10%"}} ><img src="images/sponsor.jpg" className='px-0 mx-0 opacity-50' alt="" /></div>
      <div className="row position-absolute a-pa justify-content-center " style={{marginTop:"-30%"}}>
        <div className="row w-100 text-center"><h1>Sponsors</h1></div>

        <div className="row px-5 py-5 align-items-center m-col " style={{backgroundColor:"black" }}> 
            <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 quote text-white text-center"><h2 style={{fontSize:"3vw"}} > " Thank you for Being our part in our Journey " </h2></div>
            <div className="col col-xl-6 col-lg-6 col-md-6 col-sm-6 p-5  "><img src="images/crossHead.jpeg" className='w-75' alt="" /></div>
            <div className="col col-xl-6 col-lg-6 col-md-6 col-sm-6 p-5  "><img src="images/ansys.jfif" className='img-fluid' alt="" /></div>

        </div>

        <div className="px-0">
        <Footer/>
        </div>
        
      
      </div>
    </div>










    </>
  )
}
