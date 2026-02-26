const Header = () => {
  return (
    <div className="bg-blue-700 text-white flex justify-between items-center px-6 py-4">
      <h2 className="text-lg font-semibold">Welcome back, Admin!</h2>

      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search members, transactions..."
          className="px-4 py-2 rounded bg-blue-600 placeholder-gray-200 text-sm outline-none"
        />

        <div className="bg-orange-500 w-8 h-8 flex items-center justify-center rounded-full font-bold">
          AU
        </div>
      </div>
    </div>
  );
};

export default Header;
