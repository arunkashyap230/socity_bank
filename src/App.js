import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardLayout from "./components/layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Members from "./pages/Members";
import Accounts from "./pages/Accounts";
import Transactions from "./pages/Transactions";
import Loans from "./pages/Loans";
import Reports from "./pages/Reports";
import Notices from "./pages/Notices";
import Summary from "./pages/Summary";

function App() {
  return (
    <BrowserRouter>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/members" element={<Members />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  );
}

export default App;
