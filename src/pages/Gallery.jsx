import React from "react";
import Navbar from "../components/Home/Navbar";
import { useNavigate } from "react-router-dom";

import Image1 from './gallery_images/1.jpg'
import Image2 from './gallery_images/2.jpg'
import Image3 from './gallery_images/3.jpg'
import Image4 from './gallery_images/4.jpg'
import Image5 from './gallery_images/5.jpg'
import Image6 from './gallery_images/6.jpg'
import Image7 from './gallery_images/7.jpg'
import Image8 from './gallery_images/8.jpg'
import Image9 from './gallery_images/9.jpg'
import Image10 from './gallery_images/10.jpg'
import Image11 from './gallery_images/11.jpg'
import Image12 from './gallery_images/12.jpg'
import Image13 from './gallery_images/13.jpg'
import Image14 from './gallery_images/14.jpg'
import Image15 from './gallery_images/15.jpg'
import Image16 from './gallery_images/16.jpg'
import Image17 from './gallery_images/17.jpg'
import Image18 from './gallery_images/18.jpg'

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-primary md:max-h-max h-max  flex flex-col content-center ">
      <Navbar />
      <div className="flex flex-col justify-center items-center space-y-8 md:pt-40 py-20">
        <div className="text-white flex flex-col justify-center space-y-6">
          <h1 className="md:text-6xl text-4xl font-semibold text-center" >
            Gallery
          </h1>
        </div>



        <div className="container mx-auto">
          <div class="columns-lg mx-24">
            <img src={Image1} class="w-full aspect-video" alt="1st gallery Thumb" />
            <p class="justify-center snap-center font-medium text-white">Mpulse Ignite 2k19</p>
            <br/>
            <img src={Image2} class="w-full aspect-video" alt="2st gallery Thumb" />
            <p class="snap-center font-medium text-white">Ignite 2k19 - Poster</p>
            <br/>           
            <img src={Image3} class="w-full aspect-video" alt="3st gallery Thumb" />
            <p class="snap-center font-medium text-white">Ignite 2k19 - Clash of CODERS event</p>
            <br/>           
            <img src={Image4} class="w-full aspect-video" alt="4st gallery Thumb" />
            <p class="snap-center font-medium text-white">SIgnite 2k19 - Inaguration</p>
            <br/>           
            <img src={Image5} class="w-full aspect-video" alt="5st gallery Thumb" />
            <p class="snap-center font-medium text-white">Ignite 2k19 - Keyboard Shuffling Event</p>
            <br/>
            <img src={Image6} class="w-full aspect-video" alt="6st gallery Thumb" />
            <p class="snap-center font-medium text-white">Ignite 2k19 - Events Team</p>
            <br/>
            <img src={Image7} class="w-full aspect-video" alt="7st gallery Thumb" />
            <p class="snap-center font-medium text-white"> Mpulse Ignite 2k19 Inaguration </p>
            <br/>
            <img src={Image8} class="w-full aspect-video" alt="8st gallery Thumb" />
            <p class="snap-center font-medium text-white">Mpulse Ignite 2k19 - Clash of Coders Event</p>
            <br/>
            <img src={Image9} class="w-full aspect-video" alt="9st gallery Thumb" />
            <p class="snap-center font-medium text-white">Ignite 2k19 - Technical Team</p>
            <br/>
            <img src={Image10} class="w-full aspect-video" alt="9st gallery Thumb" />
            <p class="snap-center font-medium text-white">Ignite 2k19 - Inaguration</p>
            <br/>
            <img src={Image11} class="w-full aspect-video" alt="9st gallery Thumb" />
            <p class="snap-center font-medium text-white">Ignite 2k19 - Mock Placement Event</p>
            <br/>
            <img src={Image12} class="w-full aspect-video" alt="9st gallery Thumb" />
            <p class="snap-center font-medium text-white">Ignite 2k19 - TV Trivia Event</p>
            <br/>
            <img src={Image13} class="w-full aspect-video" alt="9st gallery Thumb" />
            <p class="snap-center font-medium text-white">Ignite 2k19 - Decoration Team</p>
            <br/>
            <img src={Image14} class="w-full aspect-video" alt="9st gallery Thumb" />
            <p class="snap-center font-medium text-white">Ignite 2k19 - TV Trivia Events</p>
            <br/>
            <img src={Image15} class="w-full aspect-video" alt="9st gallery Thumb" />
            <p class="snap-center font-medium text-white">Ignite 2k19 - Event</p>
            <br/>
            <img src={Image16} class="w-full aspect-video" alt="9st gallery Thumb" />
            <p class="snap-center font-medium text-white">Ignite 2k19 - Price Distribution</p>
            <br/>
           <img src={Image17} class="w-full aspect-video" alt="9st gallery Thumb" />
            <p class="snap-center font-medium text-white">Ignite 2k19 - Price Distribution</p>
            <br/>
            <img src={Image18} class="w-full aspect-video" alt="9st gallery Thumb" />
            <p class="snap-center font-medium text-white">Ignite 2k19 - Decoration</p>
          </div>
        </div>
      </div>
      <div className="p-4">
      </div>
    </div>
  );
};

export default Home;
