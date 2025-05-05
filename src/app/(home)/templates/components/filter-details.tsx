"use client";

import React, { useState } from "react";

export default function FilterDetails() {
  const [sortBy, setSortBy] = useState("most-relevant");

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="text-[#B7B7B7] flex items-center">
      <p className="text-sm">12 results</p>

      <select
        onChange={handleFilter}
        value={sortBy}
        className="bg-transparent focus:outline-none"
      >
        <option value="oldest">Oldest</option>
        <option value="most-relevant">Most relevant</option>
      </select>
    </div>
  );
}
