import React from "react";
import Navbar from "../components/Home/Navbar";
import { useNavigate } from "react-router-dom";

import myImage from './bg-mcoe.jpg';
import logo from "./finallogo20.png";

const Home = () => {
    const navigate = useNavigate();

    return (<div className="bg-primary md:max-h-max h-max  flex flex-col content-center ">
        <Navbar />
        <br />
        <div className="flex flex-col justify-center items-center space-y-8 md:pt-40 py-20">

            <div className="text-white flex flex-col justify-center space-y-6">
                <h1 className="md:text-6xl text-4xl font-semibold text-center" >
                    About Us
                </h1>
            </div>

            <div className="container mx-auto">
                <div className="columns-lg mx-24">

                    <div className="bg-auto bg-no-repeat bg-center" style="background-image: bg-mcoe.jpg"></div>

                    <img src={myImage} alt="mcoe" />
                    <br /><br />
                    <p class="break-after-column snap-right text-white"><p className="text-2xl">ABOUT IT DEPARTMENT</p><br /><br />P.E.S's Modern College of Engineering in Pune established its IT department in 2006 with 60 students, which increased to 120 by 2011-12. The department provides modern technical education with innovative teaching methods and inputs from practicing corporates. It encourages individual initiative, leadership, and adoption of new technology through regular seminars, workshops, and short-term courses. The IT department aims to develop analytical skills, provide academic excellence, promote a multi-dimensional approach, and impart ethical and moral values.</p>



                    <img src="./bg-mcoe.jpg" alt="mcoe" />
                    <br /><br />
                    <p class="snap-right text-white"><p className="text-2xl">ABOUT MPULSE IGNITE</p><br /><br />IgnITe is an annual Tech Fest by Modern College's IT Department that enhances students' technical skills and potential. Its events attract 300+ participants from Pune colleges and are sponsored by top companies. Join us for Ignite 2k19 to ignite young minds to innovate.</p>

                </div>
            </div>
        </div>
    </div >

    );
};

export default Home;
