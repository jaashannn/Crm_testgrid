import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LeadList = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await axios.get('/api/leads'); // Adjust URL to match your backend
        setLeads(response.data);
      } catch (error) {
        console.error('Error fetching leads:', error);
      }
    };
    fetchLeads();
  }, []);

  return (
    <div>
      <h2>Leads List</h2>
      <ul>
        {leads.map((lead) => (
          <li key={lead._id}>
            <strong>{lead.name}</strong> - {lead.company} - {lead.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeadList;
