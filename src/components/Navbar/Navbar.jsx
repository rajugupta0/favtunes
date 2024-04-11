export const Navbar = ({ value }) => {
  return (
    <div className="w-full  py-3 flex justify-between items-center">
      <h1>favTunes</h1>
      <div className="flex px-4 p-2 bg-orange-500 text-white  gap-3 rounded-md text-sm font-semibold">
        <h3>Fav</h3>
        <h4 className="text-gray-100">
          {value.filter((item) => item.fav).length}
        </h4>
      </div>
    </div>
  );
};
