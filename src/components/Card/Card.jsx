const Card = ({ value, handleClick }) => {
  const { image, artist, name, id, fav } = value;
  return (
    <div className="w-64 bg-zinc-300 p-4 pb-14 rounded-md flex gap-4 mt-10 relative">
      <div className="h-28 w-28 bg-orange-400 rounded-md">
        {" "}
        <img className="h-full w-full object-cover " src={image} />{" "}
      </div>
      <div>
        <div className="text-xl font-semibold">{name}</div>
        <div className="text-gray-600">{artist}</div>
      </div>
      <button
        onClick={() => handleClick(id)}
        className={`${
          fav === true ? "bg-teal-500" : "bg-orange-500"
        } text-white rounded-full bottom-2  left-20 px-4 py-1.5 absolute`}
      >
        {fav === true ? "Added" : "Add to Fav   "}
      </button>
    </div>
  );
};

export default Card;
