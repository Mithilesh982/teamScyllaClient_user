import React, { useEffect } from 'react';
import Aos from "aos" ;
import "aos/dist/aos.css";
import "animate.css";
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
// import { Link } from 'react-router-dom';



export default function Home() {
    useEffect(() =>{
        Aos.init({duration:1500});
    } , []);


  return (
    // 
    <>
    <Navbar/>
     <div id="carouselExampleFade" className="carousel slide carousel-fade bg-dark" data-bs-ride="carousel">
                <div className="carousel-inner " style={{marginBottom:"-20px"}}>
                    <div className="carousel-item active" >
                        <img  src="images/team_scylla.jpeg" className="d-block w-100 opacity-25 image  "  alt="..." />
                        <div className="carousel-caption ">
                            <h1  className='animate__animated animate__bounceInLeft animate__delay-0.5s ' ><span style={{fontSize:"160%"}} > Team Scylla </span></h1>
                            <p className='animate__animated animate__bounceInRight animate__delay-1.5s fs-4 ' > " Unified we Succeed ! " </p>
                            {/* <Link className="btn animate__animated animate__bounceInLeft animate__delay-1.9s" to="/event">Learn More</Link> */}
                        </div>
                    </div>
                    {/* <div className="carousel-item" >
                        <img src="images/front2.jpeg" className="d-block w-100 opacity-25 image " alt="..." />
                        <div className="carousel-caption ">
                            <p className='animate__animated animate__bounceInUp animate__delay-0.5s'>New to Team Scylla</p>
                            <h1 className='animate__animated animate__bounceInUp animate__delay-1.5s' >Join Now</h1>
                            <Link to="" className='btn animate__animated animate__bounceInUp animate__delay-1.9s' data-bs-toggle="modal" data-bs-target="#register"> <h4>Sign Up</h4></Link>
                        </div>
                    </div> */}
                    
                </div>
                {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button> */}
            </div>

            <div className=' container-fluid text-center p-3' style={{backgroundColor:"rgb(173, 125, 3)"}}>
                <div className="container">
                <div className="row pt-3 text-light">
                    <div className="col ">
                        <span className='text'> call : </span> 8669349120
                    </div>
                    <div className="col ">
                        visit : Mechanical Workshop , NMIET
                    </div>
                </div>
                </div>
            </div>


            <div className="container-fluid  "  style={{backgroundColor:"black"  }}>
                    <div className="row p-xl-5 p-lg-5 p-md-5 p-sm-3 paddingrow" style={{ backgroundImage:" linear-gradient(to bottom, black , rgb(173, 125, 3) 350% ) "}}>
                        <div className=" ab-col col col-xl-7 col-lg-7 col-md-12 col-sm-12 order-xl-1 order-lg-1 order-md-1 order-sm-1">
                            <div >
                                <h1 className="text-start" data-aos="zoom-in" >About Us</h1>
                                <p data-aos="zoom-in" className='abw lh-lg  '>
                                Team Scylla was formed in 2017 in order to bring advancement in ATV (All Terrain Vehicle).After long  hours of discussion  and brain storming of ideas, decided to work on the concept of Quad Bikes since then we design, manufacture, participate and compete in ISNEE Quad Torc which is one of the most 
                                popular tech event in the country where teams from all over the nation participate every year to display their creation. 
                                Team Scylla is a group of students striving to bring to advancement in all terrain vehicle(ATV) domain . <br />
    We are group of UnderGraduate students studing at Nutan Maharastra Institute of Engineering & Technology and aim to Design, Conceptualize ,Fabricate & test a All Terrain Vehical(ATV)
                                </p>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="  col col-xl-5 col-lg-5 col-md-12 col-sm-12 order-xl-2 order-lg-2 order-md-2 order-sm-2 text-center" id='abimg1'><img src="images/frontImg.jpeg" alt="" className='img-fluid ' /></div>
                    </div> 
                    <div className="row p-xl-5 p-lg-5 p-md-5 p-sm-3 paddingrow" style={{ backgroundImage:" linear-gradient(to bottom, rgb(173, 125, 3) -250%, black ) "}}>
                        <div className="ab-col col col col-xl-7 col-lg-7 col-md-12 col-sm-12 order-xl-2 order-lg-2 order-md-1 order-sm-1">
                            <h1 className='text-start' data-aos="zoom-in">Team Goal</h1>
                            <p data-aos="zoom-in" className='abw lh-lg ' > 
                                The main goal of the team is Design & manufacturing ATV (All Terrain Vehical) of the quad bike is to increase the advancement in automobile Field . <br className='d-xl-block d-lg-block d-md-none d-sm-none' />
                                As last time we participated in ISNEE Quad Torc (2021-2022). Which as held from 27th - 31st July 2022  at SIT pullor, Tamil Nadu . <br className='d-xl-block d-lg-block d-md-none d-sm-none' /> Our Team successfully clear the Technical inspection and Qualified for main event . <br className='d-xl-block d-lg-block d-md-none d-sm-none'/>
                                After a successful Quad Torc event our Team is now cheered up and ready to step ahead , Team is currenty gearing up for the forth season of Shadow 4.0 .
                                This time team is going to participate in FMAE Quad Bike Design Challenge (QDBC).
                                
                            </p>
                        </div>
                        <div data-aos="fade-up" className="  col col-xl-5 col-lg-5 col-md-12 col-sm-12 order-xl-1 order-lg-1 order-md-2 order-sm-2 text-center" id='abimg2'><img src="images/front2.jpeg" alt="" className='img-fluid' /></div>
                    </div>
                    <div className="row p-xl-5 p-lg-5 p-md-5 p-sm-3 paddingrow" style={{backgroundImage:"linear-gradient(to bottom, black , #3E5151 200%)"}} >
                        <div className="col">
                            <h1 className='text-start' data-aos="zoom-in">Vision & Mission</h1>
                            <p data-aos="zoom-in" className='abw lh-lg' > 
                                The main goal of the team is Design & manufacturing ATV (All Terrain Vehical) of the quad bike is to increase the advancement in automobile Field . <br />
                                As last time we participated in ISNEE Quad Torc (2021-2022). Which as held from 27th - 31st July 2022  at SIT pullor, Tamil Nadu . <br /> Our Team successfully clear the Technical inspection and Qualified for main event . <br /><br />
                                After a successful Quad Torc event our Team is now cheered up and ready to step ahead , Team is currenty gearing up for the forth season of Shadow 4.0 .
                                This time team is going to participate in FMAE Quad Bike Design Challenge (QDBC).
                                
                            </p>
                        </div>
                    </div>
                    


                    <div className="row text-light text-start " >
                        <div className="col ">
                            <div className="row p-xl-5 p-lg-5 p-md-4 p-sm-3 paddingrow" style={{backgroundImage:"linear-gradient(to bottom, #3E5151 -100%, black)"}} >
                                <div className="text-center col col-xl-4 col-lg-4 col-md-5 col-sm-12 order-xl-1 order-lg-1 order-md-1 order-sm-2 opacity-75 quad-col1 pt-xl-0 pt-lg-0 pt-md-2 pt-sm-2 p-1" id="abimg3" ><img src="images/_MG_4215.jpg"  className="" width="100%" alt="..."/></div>
                                <div className="col col-xl-8 col-lg-8 col-md-7 col-sm-12 order-xl-2 order-lg-2 order-md-2 order-sm-1 pt-xl-5 pt-lg-5 pt-md-0 pt-sm-0 px-xl-5 px-lg-5 px-md-2 px-sm-2 quad-col">
                                    <h1 className='fs-1' style={{fontWeight:"bold"}}>Quad Torc</h1>
                                    <p className=' abw lh-lg' style={{}} >Quad Torc is an off road design challenge for engineering and Diploma undertaking students.  Quad is a four wheeled bike, an ATV (All-Terrain Vehicle) that was manufactured to use as 
                                     a vehicle for transportation in strenuous terrains.  The contest involves designing a Quad bike  following some quoted rules and regulations.  All the manufacturing process must be strictly  undertaken by the students without any direct or indirect involvement of professional help.</p>
                                    <Link className=" btn btn-outline-warning px-3 " aria-current="page" to="/event"><h6> Know more</h6></Link>
                                </div>
                            </div>
                        </div>
                    </div>



                <div className="row text-light text-center p-xl-5 p-lg-5 p-md-3 p-sm-2 prevwork " style={{backgroundImage:"linear-gradient(to bottom, black , gray 300%)"}}>
                    <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12"> <h1>Previous Work</h1> </div>
                    <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 mt-3">
                        <div className="row ">
                            <div className="col col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="card  w-75 mx-auto">
                                <div className="card-body  " >
                                    <div className="card-title"><h2>SHADOW 1.0 (2017-18)</h2></div>
                                    <img src="images/Picture1.jpg" className='card-img border rounded' alt="" />
                                    <p className="card-text abw2"> Team participated in  fifth season of ISNEE Quad Torc Competition. The fifth season held from the 26th -30th September 2018 at Garage1 Race Track chhachhri teep, Bijnor. Team clear the technical inspection and qualified  for main event. Team successfully participated all event.  </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="card w-75 mx-auto">
                                <div className="card-body  " >
                                    <div className="card-title"><h2>SHADOW 2.0 (2018-19)</h2></div>
                                    <img src="images/Picture5.jpg" className='card-img w-75 border rounded' alt="" />
                                    <p className="card-text w-75 mx-auto abw2">Team participated in sixth season of ISNEE Quad Torc Competition. The sixth season held from the 7th -12th September 2019 at Garage1 Race Track chhachhri teep, Bijnor. Team clear the technical inspection and qualified  for main event. Team successfully participated all event.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row m-1">
                            <div className="col col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="card w-75 mx-auto">
                                <div className="card-body  " >
                                    <div className="card-title"><h2>SHADOW 3.0 (2021-22)</h2></div>
                                    <img src="images/_MG_4215.jpg" className='card-img w-75 border rounded' alt="" />
                                    <p className="card-text w-75 mx-auto abw2">Team participated in 8th season of ISNEE Quad Torc Competition. This season held from the 27th -  31th july 2022 at SIT pullor, Tamil Nadu. Team clear the technical inspection and qualified  for main event. Team successfully participated in the event and completed all . </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="card mx-auto p-3">
                                    <div className="card-body  " >
                                        <div className="card-title"><h2>SHADOW 3.0 (2021-22)</h2></div>
                                        <img src="images/Picture7.jpg" className='card-img  border rounded' alt="" />    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                    <div className="row p-xl-5 p-lg-5 p-md-3 p-sm-2 gallery  " style={{backgroundImage:"linear-gradient(to bottom, gray -200%, black)"}} >
                        <div className="col g-col">
                            <div className="row text-center mb-2" ><h2 style={{fontSize:"3.5vw" , color:"whitesmoke" , fontWeight:"bold"}} >GALLERY</h2></div>
                            <div className="row p-xl-5 p-lg-5 p-md-2 p-sm-2 g-row justify-content-center rounded" style={{border:"3px solid gray" ,boxShadow: "0px 0px 9px 3px grey"}}>
                                    <div className="col col-xl-4 col-lg-4 col-md-4 col-sm-6 py-3 "><img src="images/DSC_0017.jpg" className='img-fluid' width="95%" alt="" style={{filter: "saturate(5)"}} /></div>
                                    <div className="col col-xl-4 col-lg-4 col-md-4 col-sm-6 py-3 "><img src="images/DSC_0104.jpg" className='img-fluid' width="95%" alt="" /></div>
                                    <div className="col col-xl-4 col-lg-4 col-md-4 col-sm-6 py-3 "><img src="images/DSC_0102.jpg" className='img-fluid' width="95%" alt="" /></div>
                                    <div className="col col-xl-4 col-lg-4 col-md-4 col-sm-6 py-3 "><img src="images/DSC_0131.jpg" className='img-fluid' width="95%" alt="" /></div>
                                    <div className="col col-xl-4 col-lg-4 col-md-4 col-sm-6 py-3 "><img src="images/DSC_0112.jpg" className='img-fluid' width="95%" alt="" /></div>
                                    <Link  className="col col-xl-4 p-1 text-center btn" aria-current="page" to="/gallery" ><h2 style={{marginTop:"25%",fontWeight:"bold",color:"rgb(211, 153, 7)" }}>More <i className="fa-sharp fa-solid fa-arrow-right"></i></h2></Link>
                            </div>
                        </div>
                    </div>

            </div>

            <Footer/>

            

        

        


{/* <div className="modal fade" id="register" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header ">
        <h1 className="modal-title fs-3 " id="staticBackdropLabel"> Register  </h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form action="https://formspree.io/f/xwkzqdar" method='POST'>
        <div className="form-floating mb-3">
                <input type="text" className="form-control" id="name" name='Name' placeholder="name@example.com"/>
                <label htmlFor="name"> Name </label>
            </div>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="email" name='Email-address' placeholder="name@example.com"/>
                <label htmlFor="email">Email address</label>
            </div>
            <div className="form-floating mb-3">
                <input type="tel" className="form-control" id="mobile" name='Moble no.' placeholder="name@example.com"/>
                <label htmlFor="mobile"> Mobile no. </label>
            </div>
            <select className="form-select" name='Department ' aria-label="Default select example">
                <option defaultValue>Choose Department</option>
                <option value="Chasis">Chasis</option>
                <option value="Steering">Steering</option>
                <option value="Transmission">Transmission</option>
                <option value="Engine">Engine</option>
                <option value="Brake">Brake</option>
                <option value="Suspention">Suspention</option>
                <option value="Electronic & Electrical">Electronic & Electrical</option>
                <option value="Marketing">Marketing</option>
            </select>
            <button type='submit' className='btn btn-primary my-4'>Submit</button>
        </form>
      </div>
      </div>
  </div>
</div> */}

    </>
  )
}
