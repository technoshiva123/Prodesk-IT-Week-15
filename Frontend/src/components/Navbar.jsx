import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        navigate('/login');
    };

    return (
        <nav className="flex justify-between items-center p-4 bg-gray-900 text-white border-b border-violet-900/30">
            <Link to="/" className="text-xl font-bold text-violet-400">TaskMatrix</Link>
            <div className="space-x-4">
                {token ? (
                    <>
                        <Link to="/dashboard" className="hover:text-violet-300">Dashboard</Link>
                        <button onClick={handleLogout} className="bg-red-500/20 text-red-400 px-4 py-1 rounded border border-red-500/50 hover:bg-red-500 hover:text-white transition">
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="hover:text-violet-300">Login</Link>
                        <Link to="/register" className="bg-violet-600 px-4 py-1 rounded hover:bg-violet-700">Register</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;