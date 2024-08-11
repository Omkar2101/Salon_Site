import StylistCard from '../components/StylistCard';
import stylistImage from '../assets/images/5.jpg';
import profile from "../assets/images/profile-image.jpg"
import artist from "../assets/images/artist3.jpg";
import haircut from "../assets/images/hair.jpg";
import model from "../assets/images/6.jpg"
import young from "../assets/images/young.jpg"
import asian from "../assets/images/asian.jpg"
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import JoinUs from './JoinUs';
import { motion, AnimatePresence } from 'framer-motion';

const Stylists = () => {
  const [open, setOpen] = useState(false);

  const handleChange = () => setOpen(!open);

  const stylists = [
    { name: 'Alice', bio: 'Expert in hair styling.', image: young},
    { name: 'Alan', bio: 'Professional manicurist.', image: profile },
    { name: 'Charlie', bio: 'Facial and skincare specialist.', image: artist },
    { name: 'Diana', bio: 'Massage therapist.', image: asian },
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-8 font-edu-hand font-medium">
        <h1 className="text-4xl font-bold text-center mb-8">Our Stylists</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stylists.map((stylist, index) => (
            <StylistCard key={index} {...stylist} />
          ))}
        </div>
      </div>

      <div className="fixed bottom-2 right-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={handleChange}
            className="bg-black mb-12 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            {open ? 'Close' : 'Join Us'}
          </button>
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className=" bg-white shadow-lg rounded-lg p-4"
              >
                <JoinUs />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <Outlet />
    </>
  );
};

export default Stylists;
