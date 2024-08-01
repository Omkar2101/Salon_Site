import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Hair Cuts',
    items: [
      { name: "Women's Haircut", price: '₹7000' },
      { name: "Teen's Haircut", price: '₹3000+' },
      { name: 'Stylish Haircut', price: '₹4000' },
      { name: "Children's Haircut", price: '₹3000+' },
    ],
  },
  {
    title: 'Make Up',
    items: [
      { name: "Women's Haircut", price: '₹7000' },
      { name: "Teen's Haircut", price: '₹3000+' },
      { name: 'Stylish Haircut', price: '₹4000' },
      { name: "Children's Haircut", price: '₹3000+' },
    ],
  },
  {
    title: 'Hair Color',
    items: [
      { name: "Women's Haircut", price: '₹7000' },
      { name: "Teen's Haircut", price: '₹3000+' },
      { name: 'Stylish Haircut', price: '₹4000' },
      { name: "Children's Haircut", price: '₹3000+' },
    ],
  },
  {
    title: 'Skin Care',
    items: [
      { name: "Women's Haircut", price: '₹7000' },
      { name: "Teen's Haircut", price: '₹3000+' },
      { name: 'Stylish Haircut', price: '₹4000' },
      { name: "Children's Haircut", price: '₹3000+' },
    ],
  },
];

const ServiceCard = ({ title, items }) => {
  return (
    <motion.div
      className="bg-white rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 w-full max-w-sm"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-pink-600 font-medium text-2xl mb-4">{title}</h2>
      <div className="border-b-2 border-pink-600 w-12 mb-4"></div>
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="mb-2 p-2 rounded-lg transition-colors hover:bg-pink-100"
          whileHover={{ backgroundColor: '#fce4ec' }}
        >
          <p className="text-gray-800">{item.name}</p>
          <p className="text-gray-500">{item.price}</p>
        </motion.div>
      ))}
      <button className='bg-black text-white rounded-lg p-2'>Add new service</button>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} items={service.items} />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
