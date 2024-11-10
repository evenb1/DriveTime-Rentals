import DashboardWidgets from "./components/DashboardWidgets";
import RecentActivity from "./components/RecentActivity";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold text-gray-700">Dashboard</h1>
      <DashboardWidgets />
      <RecentActivity />
    </div>
  );
}