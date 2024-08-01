const ServiceCard = ({ title, description, image }) => {
    return (
      <div className="bg-white p-4 rounded shadow-md">
        <img src={image} alt={title} className="h-40 w-full object-cover rounded" />
        <h3 className="text-xl font-bold mt-2">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    );
  };
  
  export default ServiceCard;
  