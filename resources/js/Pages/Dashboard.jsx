import React from 'react';
import { Head, usePage } from '@inertiajs/inertia-react';
import Navigation from '@/Components/Navigation';

const Dashboard = () => {
  const { auth } = usePage().props;

  return (
    <div>
      <Head title="Dashboard" />
      <Navigation user={auth.user} />
      <div className="p-6 space-y-6">
        {/* Your dashboard content */}
      </div>
    </div>
  );
};

export default Dashboard;
