const StylistCard = ({ name, bio, image }) => {
    return (
      <div className="bg-white p-4 rounded shadow-md">
        <img src={image} alt={name} className="h-60 w-full object-cover rounded" />
        <h3 className="text-xl font-bold mt-2">{name}</h3>
        <p className="mt-2 text-gray-600">{bio}</p>
        <button className="text-white bg-black px-4 py-2 mt-2 rounded-lg">Book Now</button>
      </div>
    );
  };
  
  export default StylistCard;
  