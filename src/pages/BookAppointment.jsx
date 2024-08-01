import AppointmentForm from '../components/AppointmentForm';
import register from "../assets/images/Register.jpg";

const BookAppointment = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-16"> {/* Added padding-top to accommodate the fixed navbar */}
      <div className="container mx-auto p-4 sm:p-6 lg:p-8 flex flex-col-reverse lg:flex-row items-center lg:items-start">
        <div className="lg:w-1/2 w-full mb-8 lg:mb-0 flex justify-center">
          <img src={register} alt="Register" className="w-full h-auto object-cover rounded-lg shadow-lg" />
        </div>
        <div className="lg:w-1/2 w-full px-4 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 lg:mb-8">
            Book an Appointment
          </h1>
          <div className="max-w-md mx-auto lg:mx-0">
            <AppointmentForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
