const Members = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Members Management</h1>
      <p className="text-gray-500 mb-6">
        Manage society members, KYC verification, and membership fees
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <StatCard color="bg-blue-600" title="Total Members" value="6" />
        <StatCard color="bg-pink-500" title="KYC Verified" value="4" />
        <StatCard color="bg-green-500" title="Fee Paid" value="3" />
        <StatCard color="bg-orange-500" title="Active Members" value="5" />
      </div>

      {/* Search Section */}
      <div className="bg-white p-4 rounded shadow mb-4 flex flex-col md:flex-row gap-4 justify-between">
        <input
          type="text"
          placeholder="Search by name, email, or member ID"
          className="border p-2 rounded w-full md:w-1/2"
        />

        <select className="border p-2 rounded w-full md:w-40">
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-3">Member ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Contact</th>
              <th className="p-3">KYC</th>
              <th className="p-3">Fee</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            <TableRow />
            <TableRow />
          </tbody>
        </table>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, color }) => (
  <div className={`${color} text-white p-5 rounded-lg shadow`}>
    <h3 className="text-lg">{value}</h3>
    <p>{title}</p>
  </div>
);

const TableRow = () => (
  <tr className="border-b hover:bg-gray-50">
    <td className="p-3 text-blue-600">MSR-0001</td>
    <td className="p-3">Satyam Ray</td>
    <td className="p-3">+91 9810000001</td>
    <td className="p-3">
      <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-sm">
        Verified
      </span>
    </td>
    <td className="p-3">
      <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded text-sm">
        Due
      </span>
    </td>
    <td className="p-3">
      <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-sm">
        Active
      </span>
    </td>
  </tr>
);

export default Members;
