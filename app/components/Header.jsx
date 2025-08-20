import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-orange-600">
          PoojaBooking
        </Link>

        {/* Nav Links */}
        <nav className="space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-orange-600 font-semibold"
                : "text-gray-700 hover:text-orange-500"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/booking"
            className={({ isActive }) =>
              isActive
                ? "text-orange-600 font-semibold"
                : "text-gray-700 hover:text-orange-500"
            }
          >
            Booking
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? "text-orange-600 font-semibold"
                : "text-gray-700 hover:text-orange-500"
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-orange-600 font-semibold"
                : "text-gray-700 hover:text-orange-500"
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
