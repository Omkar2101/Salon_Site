import { FaFacebookF, FaGoogle, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container sanchez-regular mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Logo and Description */}
          <div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
            <h2 className="text-pink-500 text-3xl font-bold mb-4">Glamour Grove Salon</h2>
            <p className="mb-4 text-gray-400">
              Welcome to Glamour Grove Salon, where we offer the finest beauty treatments and services. Our team of experienced professionals is dedicated to providing exceptional care and personalized services to ensure you leave feeling pampered and rejuvenated.
            </p>
            <h3 className="font-bold mb-2">Subscribe For Offers</h3>
            <div className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 mb-2 sm:mb-0 sm:mr-2 w-full sm:w-auto rounded-l-lg text-black focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button className="bg-pink-500 text-white px-4 py-2 rounded-r-lg hover:bg-pink-600 transition-colors">Subscribe</button>
            </div>
          </div>

          {/* Quick Links
          <div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
            <h3 className="font-bold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-pink-500 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Contact</a></li>
            </ul>
          </div> */}

          {/* Contact Info */}
          <div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
            <h3 className="font-bold mb-4 text-lg">Say Hi!</h3>
            <p className="mb-2">info@glamourgrove.com</p>
            <p className="mb-2">contact@glamourgrove.com</p>
            <h3 className="font-bold mb-4 text-lg">Call Us</h3>
            <p className="mb-2">Phone: +91 1234567890</p>
            <p className="mb-2">Toll Free: 1800 123 456</p>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
            <h3 className="font-bold mb-4 text-lg">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-pink-500 hover:text-white transition-colors"><FaFacebookF size={24} /></a>
              <a href="#" className="text-pink-500 hover:text-white transition-colors"><FaGoogle size={24} /></a>
              <a href="#" className="text-pink-500 hover:text-white transition-colors"><FaInstagram size={24} /></a>
              <a href="#" className="text-pink-500 hover:text-white transition-colors"><FaYoutube size={24} /></a>
            </div>
          </div>

          {/* Address */}
          <div className="w-full md:w-1/3 lg:w-1/4">
            <h3 className="font-bold mb-4 text-lg">Find Us</h3>
            <p className="text-gray-400">123 Main Street, Near Clock Tower, Jodhpur, Rajasthan, India</p>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="mt-8">
          <h3 className="font-bold text-2xl mb-4 text-center">Reach Out To Us At</h3>
          <div className="flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.7653266608113!2d73.0243074149194!3d26.28290218339219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c4c5a5b3e1f%3A0x6f90a26e2178c1d!2sClock%20Tower%2C%20Jodhpur%2C%20Rajasthan%20342001%2C%20India!5e0!3m2!1sen!2sus!4v1625588028327!5m2!1sen!2sus"
              width="100%"
              height="300"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              className="border-0 rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-400">Copyright © 2024 Glamour Grove Salon</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
