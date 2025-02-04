import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) navigate('/login');
      else setUser(user);
    };
    fetchUser();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      <aside className="w-64 bg-gray-800 p-4">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <nav>
          <ul>
            <li className="mb-2">
              <a href="#" className="block p-2 hover:bg-gray-700 rounded">Route 1</a>
            </li>
            <li className="mb-2">
              <a href="#" className="block p-2 hover:bg-gray-700 rounded">Route 2</a>
            </li>
            <li className="mb-2">
              <a href="#" className="block p-2 hover:bg-gray-700 rounded">Route 3</a>
            </li>
          </ul>
        </nav>
        <button
          onClick={handleLogout}
          className="w-full p-2 mt-4 bg-red-600 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </aside>
      <main className="flex-1 p-4">
        <div className="grid grid-cols-5 gap-4 h-full">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="bg-gray-800 p-4 rounded-lg">
              Section {i + 1}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;