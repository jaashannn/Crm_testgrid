
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LeadNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <nav>
      <button onClick={toggleDropdown}>Leads</button>
      {showDropdown && (
        <ul>
          <li>
            <Link to="/create-lead">Create Lead</Link>
          </li>
          <li>
            <Link to="/leads">View Leads</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default LeadNavbar;
