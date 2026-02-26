import { Bell, Menu, Search } from "lucide-react";

const Header = ({ onOpenSidebar }) => {
  return (
    <header className="bg-blue-700 px-4 py-3 text-white shadow md:px-8">
      <div className="flex items-center justify-between gap-3">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="rounded-lg border border-blue-500 p-2 md:hidden"
            onClick={onOpenSidebar}
            aria-label="Open sidebar"
          >
            <Menu size={20} />
          </button>

          <h2 className="text-2xl font-semibold md:text-4xl">
            Welcome back, Admin!
          </h2>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3 md:gap-5">
          {/* Desktop Search */}
          <div className="hidden md:flex items-center gap-2 rounded-xl border border-blue-500 bg-blue-600/80 px-4 py-2">
            <Search size={18} className="text-blue-200" />
            <input
              type="text"
              placeholder="Search members, transactions..."
              className="w-80 bg-transparent text-base placeholder-blue-200 outline-none"
            />
          </div>

          {/* Notification */}
          <div className="relative hidden md:block">
            <Bell size={22} />
            <span className="absolute -right-2 -top-2 rounded-full bg-orange-500 px-1.5 text-xs font-bold text-slate-950">
              3
            </span>
          </div>

          {/* Profile */}
          <div className="hidden md:flex items-center gap-3">
            <div className="text-right">
              <p className="text-2xl font-semibold leading-none">Admin User</p>
              <p className="mt-1 text-sm text-blue-200">societybank@org</p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-lg font-bold text-slate-950">
              AU
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="mt-3 flex items-center gap-2 rounded-xl border border-blue-500 bg-blue-600/80 px-4 py-2 md:hidden">
        <Search size={16} className="text-blue-200" />
        <input
          type="text"
          placeholder="Search members, transactions..."
          className="w-full bg-transparent text-sm placeholder-blue-200 outline-none"
        />
      </div>
    </header>
  );
};

export default Header;
