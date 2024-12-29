import NotificationPanel from '../components/dashboard/NotificationPanel';
import CommunicationGrid from '../components/dashboard/CommunicationGrid';
import QuickActions from '../components/dashboard/QuickActions';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-xl font-bold mb-4">Notifications</h2>
        <NotificationPanel />
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Communications</h2>
        <CommunicationGrid />
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
        <QuickActions />
      </section>
    </div>
  );
};

export default Dashboard;
