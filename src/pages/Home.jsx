import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/images/cute.png";
import vdo from "../assets/images/vdo.mp4";
import owner from "../assets/images/profile-image.jpg";
import discount from "../assets/images/25off.png";
import haircut from "../assets/images/hair.jpg";
import nails from "../assets/images/nails.jpg";
import skin from "../assets/images/skin.jpg";
import industry from "../assets/images/industry.avif";
import { HiScissors } from "react-icons/hi2";
import { PiSprayBottleFill } from "react-icons/pi";
import model1 from "../assets/images/Model1.avif";
import best from "../assets/images/Best.jpg";
import artist from "../assets/images/artist3.jpg";
import artist2 from "../assets/images/artist2.jpg";
import artist3 from "../assets/images/artist3.jpg";
import artist4 from "../assets/images/artist4.jpg";
import barber from "../assets/images/barber.avif";
import wed from "../assets/images/wed.jpg";
import asian from "../assets/images/asian.jpg"
import TypingEffect from 'react-typing-effect';
import young from "../assets/images/young.jpg"
import close from "../assets/images/close.jpg"

const Home = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 1000;

    if (start === end) return;

    const incrementTime = Math.abs(Math.floor(2000 / (end - start)));
    const timer = setInterval(() => {
      start += 1;
      setNumber(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, []);

  const cardVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <div className="bg-orange-50 min-h-screen flex flex-col items-center justify-center p-10">
        <div className="container mx-auto p-16">
          <div className="text-center mb-12  bg-orange-300/20">
            <h1 className="text-6xl md:text-7xl font-medium p-2 sanchez-regular text-pink-600 shadow-xl">
              Luxury <span className="text-black ">YOU<br></br></span> Can <span className="text-pink ">Afford</span>
            </h1>
          </div>
          <h1 className="text-4xl font-bold sanchez-regular">
        <TypingEffect
          text={["Welcome to Glamour Grove Salon", "Experience the Best Beauty Treatments", "Book Your Appointment Now"]}
          speed={100}
          eraseSpeed={50}
          typingDelay={500}
          eraseDelay={1500}
        />
      </h1>
          <div className="discount flex flex-col md:flex-row items-center justify-between gap-10 p-16">
            <div className="bg-slate-800 p-6 rounded-3xl flex flex-col md:flex-row w-full">
              <motion.div
                className="text-center md:text-left md:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <h1 className="text-4xl md:text-5xl font-light text-pink-600 mb-4">
                  Skin Care & Beauty Salon
                </h1>
                <p className="text-gray-600 mb-8 text-white">
                  Look natural and fresh with our professional skin care and beauty services.
                </p>
                <motion.button
                  className="bg-pink-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-pink-700"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get membership
                </motion.button>
              </motion.div>
              <div className="w-full md:w-1/2 flex justify-center items-center">
                <img className="w-full md:w-auto" src={discount} alt="Discount" />
              </div>
            </div>

            <motion.div
              className="w-full md:w-1/2 mt-8 md:mt-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.video
                src={vdo}
                alt="Beauty Salon"
                className="w-full md:w-auto h-1/2 md:h-full rounded-lg shadow-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
                loop // Add the loop attribute to make the video play continuously
                autoPlay // Add autoPlay to start the video automatically
                muted // Add muted to play the video without sound
                playsInline // Add playsInline to prevent fullscreen on mobile devices
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="bg-orange-200 font-edu-hand p-4 md:p-16">
        <motion.div
          className="text-center md:text-left mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
            About Us
          </h2>
          <p className="text-gray-600 font-bold">
            We are a beauty salon Our expert stylists and beauticians specialize in haircuts, coloring, facials, manicures, pedicures, and makeup applications. At Bliss Beauty Parlour, we use only the finest products to ensure your skin and hair receive the best care possible. Our serene and welcoming environment is designed to provide a relaxing experience, leaving you rejuvenated and refreshed. Whether you're preparing for a special occasion or simply indulging in some self-care,
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="w-full md:w-[30vw] overflow-hidden mb-8 md:mb-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              className="w-full rounded-lg"
              src={owner}
              alt="Owner"
              whileHover={{ scale: 1.1, rotate: 1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
          <div className="text-center md:text-left p-4 md:p-10">
            <h1 className="font-semibold text-xl md:text-2xl">
              Alan Jones: Owner
            </h1>
            <p>
              The owner of the beauty parlour is a passionate and experienced stylist known for their creativity and dedication to enhancing clients' natural beauty. With a keen eye for trends and a commitment to excellence, they ensure every visit is exceptional.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="services bg-violet-200 p-8 text-black font-montserrat">
        <h1 className="font-semibold text-3xl text-center flex justify-center items-center gap-2">
          <HiScissors />
          Services We Provide At our Shop
          <PiSprayBottleFill />
        </h1>
        <div className="card-container flex flex-wrap justify-center gap-8 mt-4">
          {[
            {
              src: haircut,
              title: "Professional Haircut",
              text: "Experience a precision haircut tailored to your style and personality by our skilled stylists. We ensure a perfect look that complements your features and enhances your confidence."
            },
            {
              src: nails,
              title: "Professional Nail Art",
              text: "Indulge in our exquisite nail art services, featuring intricate designs and high-quality finishes. Our nail artists are dedicated to creating beautiful and unique designs that express your individuality."
            },
            {
              src: industry,
              title: "Industry-Level Makeup Artists",
              text: "Our makeup artists are experts in the latest trends and techniques, ensuring a flawless and stunning look for any occasion. Whether it's a photoshoot or a special event, we've got you covered."
            },
            {
              src: skin,
              title: "Skin Care",
              text: "Pamper your skin with our luxurious skin care treatments designed to rejuvenate and revitalize. From facials to advanced skincare routines, we offer personalized solutions for a radiant complexion."
            },
            {
              src: wed,
              title: "Groom's Makeup",
              text: "Look your best on your special day with our professional groom's makeup services. We provide a natural and polished look, ensuring you feel confident and picture-perfect for your wedding."
            },
            
          ].map((service, index) => (
            <motion.div
              key={index}
              className="card w-full md:w-1/2 lg:w-1/4 bg-gray-100 rounded-lg overflow-hidden"
              whileHover="hover"
              variants={cardVariants}
            >
              <div className=" rounded-t-lg overflow-hidden object-cover">
                <motion.img
                  className=" w-full h-full"
                  src={service.src}
                  alt={service.title}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-edu-hand font-bold mb-2">{service.title}</h2>
                <p className="text-gray-600">{service.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
  <div className="testimonials">
  <h1 className="ml-8 font-medium text-3xl p-2 font-edu-hand">
    Customers Thoughts
  </h1>
    <div className="bg-yellow-300 flex flex-col lg:flex-row">
      <div className="one w-full lg:w-1/2 p-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 grid-rows-2 gap-4 p-4">
          <div className="col-span-2 row-span-2 transition-transform duration-300 hover:scale-105">
            <img
              src={young}
              alt="Large item"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-gray-200 p-4 transition-transform duration-300 hover:scale-105">
            <img
              src={barber}
              alt="Item 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-gray-200 p-4 transition-transform duration-300 hover:scale-105">
            <img
              src={model1}
              alt="Item 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-gray-200 p-4 transition-transform duration-300 hover:scale-105">
            <img
              src={close}
              alt="Item 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-gray-200 p-4 transition-transform duration-300 hover:scale-105">
            <img
              src={asian}
              alt="Item 4"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="two w-full lg:w-1/2 bg-orange-200 p-4 font-montserrat flex flex-col lg:flex-row gap-10 p-8">
        <h1 className="text-3xl font-edu-hand transition-opacity duration-300 hover:opacity-75">
          Reviews & Ratings
        </h1>
        <div className="div1 w-full lg:w-1/2">
          <div className="flex gap-4 p-2 items-center transition-opacity duration-300 hover:opacity-75">
            <div className="h-[8vh] w-[8vw] flex justify-center items-center">
              <p className="font-semibold text-3xl">{number}+</p>
            </div>
            <p className="font-semibold text-3xl">Happy customers</p>
          </div>
          <div className="review block">
            <div className="bg-blue-200 h-[300px] w-[300px] transition-transform duration-300 hover:scale-105">
              <img src={best} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="mt-5">
              <p className="font-medium  text-3xl transition-opacity duration-300 hover:opacity-75">
                <span className=".font-edu-hand">Avg Rating Of 4.5</span>
              </p>
            </div>
          </div>
        </div>
        <div className="div2 w-full lg:w-1/2 rounded-lg bg-blue-200 text-black p-2">
          <div className="card1 p-2 transition-transform duration-300 hover:scale-105">
            <div className="flex gap-2 items-center">
              <img
                className="rounded-full h-[60px] w-[60px]"
                src={artist}
                alt=""
              />
              <p>Nick</p>
            </div>
            <div className="bg-gray-200 rounded-lg p-1 mt-2">
              <h1>Best place to manicure yourselves</h1>
            </div>
          </div>
          <div className="card1 p-2 transition-transform duration-300 hover:scale-105">
            <div className="flex gap-2 items-center">
              <img
                className="rounded-full object-cover h-[60px] w-[60px]"
                src={artist2}
                alt=""
              />
              <p>Jonathan</p>
            </div>
            <div className="bg-gray-200 rounded-lg p-1 mt-2">
              <h1>Best place to manicure yourselves</h1>
            </div>
          </div>
          <div className="card1 p-2 transition-transform duration-300 hover:scale-105">
            <div className="flex gap-2 items-center">
              <img
                className="rounded-full object-cover h-[60px] w-[60px]"
                src={artist3}
                alt=""
              />
              <p>Amelia</p>
            </div>
            <div className="bg-gray-200 rounded-lg p-1 mt-2">
              <h1>Best place to manicure yourselves</h1>
            </div>
          </div>
          <div className="card1 p-2 transition-transform duration-300 hover:scale-105">
            <div className="flex gap-2 items-center">
              <img
                className="rounded-full object-cover h-[60px] w-[60px]"
                src={artist4}
                alt=""
              />
              <p>Tom</p>
            </div>
            <div className="bg-gray-200 rounded-lg p-1 mt-2">
              <h1>Best place to manicure yourselves</h1>
            </div>
          </div>
        </div>
      </div>
      </div>
     
    </div>
    </>
  );
};

export default Home;
