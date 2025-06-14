import React, { useState } from 'react';
import styles from './FilterSidebar.module.scss';

const FilterSidebar = ({filter, setFilter}) => {

  const updateFilter = (key, value) => {
    setFilter(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className={styles.filterContainer}>
      <h3 className={styles.heading}>Filter Courses</h3>

      {/* Location Filter */}
      <div className={styles.section}>
        <h4 className={styles.subheading}>Category</h4>
        {['Web development', 'App development', 'Web designing', 'Data science','Marketing', 'Accounts', 'Javascript'].map(cat => (
          <label key={cat}>
            <input
              type="radio"
              name="location"
              value={cat}
              checked={filter?.category === cat}
              onChange={() => setFilter(prev => ({ ...prev, category: cat }))}
            />{' '}
            {cat}
          </label>
        ))}
      </div>

      {/* Industry Filter */}
      <div className={styles.section}>
        <h4 className={styles.subheading}>Level</h4>
        {['Beginner', 'Intermediate', 'Advanced'].map(lev => (
          <label key={lev}>
            <input
              type="radio"
              name="industry"
              value={lev}
              checked={filter?.level === lev}
              onChange={() => setFilter(prev => ({ ...prev, level: lev }))}
            />{' '}
            {lev}
          </label>
        ))}
      </div>

      {/* Salary Filter */}
      <div className={styles.section}>
        <h4 className={styles.subheading}>Language</h4>
        {['English', 'Urdu', 'Hindi'].map(lang => (
          <label key={lang}>
            <input
              type="radio"
              name="salary"
              value={lang}
              checked={filter?.language === lang}
              onChange={() => setFilter(prev => ({ ...prev, language: lang }))}
            />{' '}
            {lang}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;


// /* 
// ✅ STEP-BY-STEP GUIDE
// 1. UI Setup
// React component bana lo jisme 3 sections hoon: Location, Industry, Salary

// Har section ke andar radio buttons hon jinke paas value attribute set ho

// 2. State Management
// useState se ek object banao (e.g. filters) jisme location, industry, salary keys hoon

// Jab user radio select kare, onChange se state update karo

// 3. Submit Button
// Ek button add karo jaise “Apply Filters”

// Ispe onClick handler banao jo filters ko backend pe bheje

// 4. Data Send Karna (Frontend → Backend)
// Button ke click pe fetch() ya axios ka POST request bhejo

// Content-Type: application/json set karo

// Body mein JSON.stringify(filters) bhejo

// 5. Backend API Setup (Optional if already made)
// Backend mein ek endpoint banao e.g. /api/jobs/filter

// Usme request body se filters lo (req.body.location etc.)

// Uske basis pe database query likho ya filtering karo

// 6. Response Handle Karna
// Jab backend se response aaye, usse console mein ya kisi job list component mein dikhao

// 7. (Optional) Auto-Submit
// Agar tum chahte ho ke filter select hote hi backend pe data chala jaye, to har radio ke onChange pe hi fetch() call kar do — button ki zarurat nahi padegi

// */

// import React from 'react';

// const FilterSidebar = ({ filters, setFilters }) => {
//   const updateFilter = (key, value) => {
//     setFilters(prev => ({ ...prev, [key]: value }));
//   };

//   return (
//     <div className="w-1/4 p-4 border-r border-gray-300">
//       <h2 className="text-xl font-bold mb-4">Filter Jobs</h2>

//       {/* Location Section */}
//       <div className="mb-6">
//         <h3 className="font-semibold mb-2">Location</h3>
//         {['Delhi NCR', 'Bangalore', 'Hyderabad', 'Pune', 'Chennai', 'Mumbai'].map(loc => (
//           <label key={loc} className="block mb-1">
//             <input
//               type="radio"
//               name="location"
//               value={loc}
//               // checked={filters.location === loc}
//               onChange={() => updateFilter('location', loc)}
//               className="mr-2"
//             />
//             {loc}
//           </label>
//         ))}
//       </div>

//       {/* Industry Section */}
//       <div className="mb-6">
//         <h3 className="font-semibold mb-2">Industry</h3>
//         {['Frontend Developer', 'Backend Developer', 'Data Science', 'Full Stack Developer', 'Nextjs Developers'].map(ind => (
//           <label key={ind} className="block mb-1">
//             <input
//               type="radio"
//               name="industry"
//               value={ind}
//               // checked={filters.industry === ind}
//               onChange={() => updateFilter('industry', ind)}
//               className="mr-2"
//             />
//             {ind}
//           </label>
//         ))}
//       </div>

//       {/* Salary Section */}
//       <div className="mb-6">
//         <h3 className="font-semibold mb-2">Salary</h3>
//         {['0 - 40k', '40k - 1L', '1L - 1.5L'].map(sal => (
//           <label key={sal} className="block mb-1">
//             <input
//               type="radio"
//               name="salary"
//               value={sal}
//               // checked={filters.salary === sal}
//               onChange={() => updateFilter('salary', sal)}
//               className="mr-2"
//             />
//             {sal}
//           </label>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FilterSidebar;