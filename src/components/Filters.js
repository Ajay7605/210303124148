import React from 'react';

const Filters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <select name="category" value={filters.category} onChange={handleChange}>
        {/* Category options */}
      </select>
      <select name="company" value={filters.company} onChange={handleChange}>
        {/* Company options */}
      </select>
      {/* Additional filters */}
    </div>
  );
};

export default Filters;
