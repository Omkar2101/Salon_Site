import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecriutForm = () => {

  const notify = () => toast("Booked Succesfully!");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    exp:'',
    service: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("name is",name);
    console.log("valueis",value);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-slate-200 p-6 rounded shadow-md max-w-md mx-auto">
      <h2 className="text-2xl  mb-4">Fill the details and book the slot</h2>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium">Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" required />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium">Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" required />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium">Experience</label>
        <input type="text" name="exp" value={formData.exp} onChange={handleChange} className="w-full p-2 border rounded" required />
      </div>
      
      <div className="mb-4">
        {/* <input type="time" name="time" value={formData.time} onChange={handleChange} className="w-full p-2 border rounded" required /> */}
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium">Service</label>
        <select name="service" value={formData.service} onChange={handleChange} className="w-full p-2 border rounded" required>
          <option value="">Select a Service</option>
          <option value="haircut">Haircut</option>
          <option value="manicure">Manicure</option>
          <option value="facial">Facial</option>
          <option value="massage">Massage</option>
        </select>
      </div>
      
      {formData.name.length>0 ?  <div>
        
        <button type="submit" onClick={notify} className="bg-black text-white p-2 rounded hover:bg-slate-600">Book Appointment</button>
        <ToastContainer />
      </div> :<button   className="bg-black text-white px-4 py-2 rounded hover:bg-slate-600">Apply</button> }
     
      
    </form>
  );
};

export default RecriutForm;
