// import galleryImage from '../assets/images/';
import image1 from '../assets/images/1.jpg';
import image2 from '../assets/images/2.jpg';
import image3 from '../assets/images/3.jpg';
import image4 from '../assets/images/4.jpg';
import image5 from '../assets/images/5.jpg';
import image6 from '../assets/images/6.jpg';

import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6
  ];

  return (
    <>
    <div className="bg-orange-60 font-edu-hand py-16">
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-edu-hand font-bold text-center mb-8">Our Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 object-cover gap-8 p-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity duration-300"></div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</>
);
};
 

export default Gallery;
