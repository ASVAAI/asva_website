// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const SolutionDropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();
//   const isActive = location.pathname.startsWith('/solution');

//   useEffect(() => {
//     // Check if the current path is under /solution and update isOpen accordingly
//     setIsOpen(isActive);
//   }, [location]);

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//     if (!isActive) {
//       navigate('/solution');
//     }
//   };

//   return (
//     <div className={`${isActive ? "border-b-4 rounded-b-md text-gray-600 font-semibold border-blue-500" : ""} 
//                      hover:text-gray-600 hover:text-lg transition-all duration-150`}>
//       <button onClick={handleToggle}>
//         Solution
//         {/* Add dropdown arrow icon here */}
//       </button>
//       {isOpen && (
//         <div className="dropdown-content">
//           {/* Add your dropdown menu items here */}
//           <select 
//       value={currentPath} 
//       onChange={handleSelectChange}
//       onClick={handleSelectClick}
//       className=""
//     >
//       <option value="/solution">CV Parser</option>
//       <option value="/jdParser">JD Parser</option>
//       <option value="/searchMatch">Search and match</option>
//     </select>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SolutionDropdown;
















// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';

// function SolutionDropdown() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [currentPath, setCurrentPath] = useState('/solution');

//   useEffect(() => {
//     if (location.pathname === '/solution' || location.pathname === '/jdParser' || location.pathname === '/searchMatch') {
//       setCurrentPath(location.pathname);
//     }
//   }, [location]);

//   const handleSelectChange = (event) => {
//     const value = event.target.value;
//     setCurrentPath(value);
//     navigate(value);
//   };

//   const handleSelectClick= ()=>{
//     navigate(currentPath);
//   }


//   return (
//     <div>
//         <select 
//       value={currentPath} 
//       onChange={handleSelectChange}
//       onClick={handleSelectClick}
//       className=""
//     >
//       <option value="/solution">CV Parser</option>
//       <option value="/jdParser">JD Parser</option>
//       <option value="/searchMatch">Search and match</option>
//     </select>

//     </div>
//   )
// }

// export default SolutionDropdown





import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function SolutionDropdown() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState('/solution');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (location.pathname === '/solution' || location.pathname === '/jdParser' || location.pathname === '/searchMatch') {
      setCurrentPath(location.pathname);
    }
  }, [location]);

  const handleOptionClick = (value) => {
    setCurrentPath(value);
    navigate(value);
    setIsOpen(false);
  };

  const options = [
    { value: '/solution', label: 'CV Parser' },
    { value: '/jdParser', label: 'JD Parser' },
    { value: '/searchMatch', label: 'Search and match' }
  ];

  const isActive = options.some(opt => opt.value === location.pathname);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div 
        className={`cursor-pointer pb-2 ${
                isActive 
                ? "border-b-4 rounded-b-md text-gray-600 font-semibold border-b-violet-700" 
                : "text-gray-400"
                } hover:text-gray-600 hover:text-lg transition-all duration-150`}
        >

  {options.find(opt => opt.value === currentPath)?.label || 'Select Option'}
  
</div>
      {isOpen && (
        <div className="absolute top-full left-0 text-black bg-white border border-gray-300 rounded shadow-lg min-w-44">
          {options.map((option) => (
            <div
              key={option.value}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer "
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SolutionDropdown;