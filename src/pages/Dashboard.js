const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        <Card title="Total Members" value="1,248" />
        <Card title="Active Loans" value="342" />
        <Card title="Total Savings" value="₹ 12.4M" />
      </div>
    </div>
  );
};

const Card = ({ title, value }) => (
  <div
    style={{
      flex: "1 1 250px",
      background: "#3b82f6",
      color: "white",
      padding: "20px",
      borderRadius: "10px",
    }}
  >
    <h4>{title}</h4>
    <h2>{value}</h2>
  </div>
);

export default Dashboard;
