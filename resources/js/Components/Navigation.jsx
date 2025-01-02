import React from 'react';
import { Link } from '@inertiajs/inertia-react';

const Navigation = ({ user }) => {
  return (
    <nav>
      <ul>
        <li><Link href={route('dashboard')}>Dashboard</Link></li>
        {user.role === 'admin' && (
          <li><Link href={route('admin.dashboard')}>Admin Dashboard</Link></li>
        )}
        {user.role === 'approver' && (
          <li><Link href={route('approver.dashboard')}>Approver Dashboard</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
