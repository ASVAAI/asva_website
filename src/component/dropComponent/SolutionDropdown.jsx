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

  // useEffect(() => {
  //   if (location.pathname === '/solution' || location.pathname === '/jdParser' || location.pathname === '/searchMatch') {
  //     setCurrentPath(location.pathname);
  //   }
  // }, [location]);

  useEffect(() => {
    const allOptions = [...options[0].HrOption, ...options[1].ParmaOption];
    const foundOption = allOptions.find(opt => opt.value === location.pathname);
    if (foundOption) {
      setCurrentPath(foundOption.value);
    }
  }, [location]);



  const handleOptionClick = (value) => {
    setCurrentPath(value);
    navigate(value);
    setIsOpen(false);
  };

  const options = [

    {
      HrOption:[
        { value: '/solution', label: 'CV Parser' },
        { value: '/jdParser', label: 'JD Parser' },
        { value: '/searchMatch', label: 'Search and match' },
      ]
    },

    {
      ParmaOption: [
        { value: '/PvTech', label: 'Pharmacovigilance' },
        { value: '/PvLiterature', label: 'Literature Monitoring' },
      ]
    }
  
  ];

  // const isActive = options.some(opt => opt.value === location.pathname);
  // const isActive = options.some(opt => opt.HrOption?.some(item => item.value === location.pathname));
  const isActive = options.some(opt => 
    opt.HrOption?.some(item => item.value === location.pathname) ||
    opt.ParmaOption?.some(item => item.value === location.pathname)
  );

  const getCurrentLabel = () => {
    const hrOption = options[0].HrOption.find(opt => opt.value === currentPath);
    const parmaOption = options[1].ParmaOption.find(opt => opt.value === currentPath);
    return hrOption?.label || parmaOption?.label || 'Select Option';
  };

  return (
    <div 
      className="relative z-[1]"
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

  {/* {options.find(opt => opt.value === currentPath)?.label || 'Select Option'} */}
  {/* {options[0].HrOption.find(opt => opt.value === currentPath)?.label || 'Select Option'} */}
  {/* {getCurrentLabel()} */}
    Solution

  
</div>
      {isOpen && (
        <div className="absolute top-full  -translate-x-1/3 text-black bg-white bg-violet-40 border border-gray-300 rounded shadow-lg  md:w-[60rem] xl:w-[80rem]  font-titillium_web">
        <div className='flex flex-row justify-start space-x-24 p-4 bg-violet-00'>
          <div>
            <h1 className='text-2xl font-semibold underline underline-offset-8 px-2 decoration-violet-600 min-w-28'>HR Tech</h1>
            {
              options[0].HrOption.map((option)=>(
                <div
                  key={option.value}
                  className="px-2 mt-4 py-1 hover:bg-gray-200 cursor-pointer rounded transition-colors"
                  onClick={() => handleOptionClick(option.value)}
                >
                  {option.label}
                </div>
              ))
            }
          </div>
          <div>
            <h1 className='text-2xl font-semibold underline underline-offset-8 px-2 decoration-violet-600 '>Pharmacy</h1>
            {
              options[1].ParmaOption.map((option)=>(
                <div
                  key={option.value}
                  className=" px-2 mt-4 py-1 hover:bg-gray-200 cursor-pointer rounded transition-colors"
                  onClick={() => handleOptionClick(option.value)}
                >
                  {option.label}
                </div>
              ))
            }
          </div>
        </div>
        </div>
      )}
    </div>
  );
}

export default SolutionDropdown;