import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-900 text-white min-h-screen hidden md:block">
      <div className="p-6">
        <h2 className="text-xl font-bold">Society Bank</h2>
        <p className="text-sm text-gray-300">Premium Banking Solutions</p>
      </div>

      <nav className="mt-4 space-y-2 px-4">
        <NavLink to="/" className="block px-4 py-2 rounded hover:bg-blue-700">
          Dashboard
        </NavLink>

        <NavLink
          to="/members"
          className="block px-4 py-2 rounded bg-orange-500 text-black font-semibold"
        >
          Members
        </NavLink>

        <div className="block px-4 py-2 hover:bg-blue-700 rounded">
          Accounts
        </div>

        <div className="block px-4 py-2 hover:bg-blue-700 rounded">
          Transaction
        </div>

        <div className="block px-4 py-2 hover:bg-blue-700 rounded">Loans</div>
      </nav>
    </div>
  );
};

export default Sidebar;
