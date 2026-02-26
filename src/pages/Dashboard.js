import {
  ArrowUpRight,
  CircleEllipsis,
  IndianRupee,
  Receipt,
  UsersRound,
  WalletCards,
} from "lucide-react";

const statCards = [
  {
    title: "Total Members",
    value: "1,248",
    subtitle: "+12% from last month",
    trend: "12.3%",
    icon: UsersRound,
    gradient: "from-blue-600 to-blue-400",
  },
  {
    title: "Active Loans",
    value: "342",
    subtitle: "₹ 8.2M total disbursed",
    trend: "67%",
    icon: WalletCards,
    gradient: "from-pink-500 to-pink-400",
  },
  {
    title: "Total Savings",
    value: "₹ 12.4M",
    subtitle: "Avg ₹ 9,935 per member",
    trend: "8.4%",
    icon: IndianRupee,
    gradient: "from-emerald-500 to-green-400",
  },
  {
    title: "Transactions",
    value: "7,821",
    subtitle: "Last 30 days",
    trend: "15.2%",
    icon: Receipt,
    gradient: "from-orange-500 to-orange-400",
  },
];

const transactionRows = [
  {
    id: "TX001",
    date: "2025-09-20",
    member: "Ravi Kumar",
    type: "Deposit",
    amount: "₹ 25,000",
    status: "Completed",
  },
  {
    id: "TX002",
    date: "2025-09-19",
    member: "Sita Menon",
    type: "Withdrawal",
    amount: "₹ 5,000",
    status: "Pending",
  },
];

const Dashboard = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6 space-y-8">
      {/* Heading */}
      <h1 className="text-2xl font-semibold text-slate-900 md:text-3xl">
        Welcome back, Admin
      </h1>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {statCards.map(
          ({ title, value, subtitle, trend, icon: Icon, gradient }) => (
            <div
              key={title}
              className={`rounded-xl bg-gradient-to-r ${gradient} p-4 text-white shadow-sm`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs opacity-80">{title}</p>
                  <p className="text-xl font-bold mt-1">{value}</p>
                  <p className="text-xs opacity-80 mt-1">{subtitle}</p>
                </div>
                <Icon size={22} className="opacity-70" />
              </div>

              <div className="flex items-center gap-1 text-xs font-medium mt-3">
                <ArrowUpRight size={14} />
                {trend}
              </div>
            </div>
          ),
        )}
      </div>

      {/* Transactions */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200">
        <div className="px-4 py-3 border-b">
          <h2 className="text-lg font-semibold text-slate-900">
            Recent Transactions
          </h2>
          <p className="text-sm text-slate-500">
            Latest transactions from your society
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-100 text-slate-600">
              <tr>
                <th className="px-4 py-3 text-left">ID</th>
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-left">Member</th>
                <th className="px-4 py-3 text-left">Type</th>
                <th className="px-4 py-3 text-left">Amount</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {transactionRows.map((row) => (
                <tr key={row.id} className="border-t hover:bg-slate-50">
                  <td className="px-4 py-3 text-blue-600">{row.id}</td>
                  <td className="px-4 py-3">{row.date}</td>
                  <td className="px-4 py-3 font-medium">{row.member}</td>
                  <td className="px-4 py-3">{row.type}</td>
                  <td className="px-4 py-3 font-semibold">{row.amount}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        row.status === "Completed"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <CircleEllipsis size={18} className="text-slate-500" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden p-4 space-y-4">
          {transactionRows.map((row) => (
            <div key={row.id} className="border rounded-lg p-3 space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">{row.member}</span>
                <span className="text-xs text-blue-600">{row.id}</span>
              </div>
              <div className="text-xs text-slate-500">
                {row.date} • {row.type}
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">{row.amount}</span>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    row.status === "Completed"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {row.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
