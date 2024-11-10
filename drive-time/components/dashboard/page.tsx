import DashboardWidgets from "./components/DashboardWidgets";
import RecentActivity from "./components/RecentActivity";

export default function DashboardPage() {
  return (
    <div className="dashboard-overview">
      <h1 className="dashboard-title">Welcome to Drivetime Rental Dashboard</h1>
      <DashboardWidgets />
      <RecentActivity />
    </div>
  );
}