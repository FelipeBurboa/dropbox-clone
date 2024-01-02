import { auth } from "@clerk/nextjs";

function Dashboard() {
  const { userId } = auth();
  return <div>Dashboardd</div>;
}

export default Dashboard;
