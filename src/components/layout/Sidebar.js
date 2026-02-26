import { NavLink } from "react-router-dom";
import {
  Banknote,
  Bell,
  ClipboardList,
  FileText,
  HandCoins,
  LayoutDashboard,
  Users,
  Wallet,
  X,
} from "lucide-react";

const menuItems = [
  { label: "Dashboard", to: "/", icon: LayoutDashboard },
  { label: "Members", to: "/members", icon: Users },
  { label: "Accounts", to: "/accounts", icon: Wallet },
  { label: "Transaction", to: "/transactions", icon: Banknote },
  { label: "Loans", to: "/loans", icon: HandCoins },
  { label: "Reports", to: "/reports", icon: ClipboardList },
  { label: "Notices", to: "/notices", icon: Bell },
  { label: "Summary", to: "/summary", icon: FileText },
];

const navLinkClass = ({ isActive }) =>
  `flex items-center gap-3 rounded-xl px-4 py-3 text-[1.05rem] transition-colors ${
    isActive
      ? "bg-orange-500 text-slate-950 font-semibold"
      : "text-slate-100 hover:bg-blue-800"
  }`;

const SidebarContent = ({ onClose }) => (
  <>
    {/* Logo Section */}
    <div className="border-b border-blue-800 px-6 py-7">
      <div className="flex items-center justify-between md:justify-start">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-lg font-black text-slate-950">
            SB
          </div>
          <div>
            <h2 className="text-4xl font-bold leading-none">Society Bank</h2>
            <p className="mt-1 text-sm text-slate-300">
              Premium Banking Solutions
            </p>
          </div>
        </div>

        {/* Mobile Close Button */}
        <button
          type="button"
          className="rounded-full p-2 hover:bg-blue-800 md:hidden"
          onClick={onClose}
          aria-label="Close sidebar"
        >
          <X size={20} />
        </button>
      </div>
    </div>

    {/* Navigation */}
    <nav className="flex-1 space-y-2 overflow-y-auto px-4 py-6">
      {menuItems.map(({ label, to, icon: Icon }) => (
        <NavLink
          key={label}
          to={to}
          className={navLinkClass}
          onClick={onClose}
          end={to === "/"}
        >
          <Icon size={22} />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  </>
);

const Sidebar = ({ isOpen, onClose }) => (
  <>
    {/* Desktop Sidebar */}
    <aside className="hidden md:flex min-h-screen w-80 flex-col bg-blue-900 text-white">
      <SidebarContent onClose={onClose} />
    </aside>

    {/* Mobile Sidebar */}
    {isOpen && (
      <div
        className="fixed inset-0 z-40 md:hidden"
        role="dialog"
        aria-modal="true"
      >
        <button
          type="button"
          className="absolute inset-0 bg-slate-950/45"
          onClick={onClose}
          aria-label="Close sidebar"
        />
        <aside className="relative h-full w-72 flex-col bg-blue-900 text-white shadow-2xl">
          <SidebarContent onClose={onClose} />
        </aside>
      </div>
    )}
  </>
);

export default Sidebar;
