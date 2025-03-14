// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// import ThemeToggle from './ThemeToggle';
// import { styles } from '../styles';
// import { navLinks } from '../constants';
// import { logo, menu, close } from '../assets';
// import { useTheme } from './ThemeContext';

// const Navbar = () => {
//   const { theme } = useTheme();
//   const [active, setActive] = useState('');
//   const [toggle, setToggle] = useState(false);

//   return (
//     <nav
//       className={`${styles.paddingX} w-full flex items-center py-2 fixed top-0 z-20 ${theme == 'light' ? styles.offWhiteBackground : 'bg-black'}`}
//     >

//       <div className="w-full flex justify-start items-center max-w-7xl mx-auto">
//         <ThemeToggle />
//       </div>

//       <div className="w-full flex justify-end items-center max-w-7xl mx-auto">
//         {/* <Link
//           to="/" 
//           className="flex items-center gap-2"
//           onClick={() => {
//             setActive("");
//             window.scrollTo(0, 0);
//           }}
//         >
//           <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
//           <p className="text-white text-[18px] font-bold cursor-pointer flex">
//             Aidan &nbsp;
//             <span className="sm:block hidden">| Computer Engineer</span>
//           </p>
//         </Link> */}
//         <ul className="list-none hidden sm:flex flex-row gap-10">
//           {navLinks.map((link) => (
//             <li 
//               key={link.id} 
//               className={`${active === link.title 
//                 ? theme === "light" 
//                   ? "text-black" 
//                   : "text-white" 
//                 : theme === "light" 
//                   ? "text-gray" 
//                   : "text-light_gray"} hover:${theme === "light" 
//                 ? "text-light_gray" 
//                 : "text-gray"} text-[18px] font-medium cursor-pointer`}
//               onClick={() => setActive(link.title)}
//             >
//               <a href={`#${link.id}`}>{link.title}</a>
//             </li>
//           ))}
//         </ul>

//         <div className="sm:hidden flex flex-1 justify-end items-center">
//           <img
//             src={toggle ? close : menu}
//             alt="menu"
//             className={`w-[28px] h-[28px] object-contain cursor-pointer ${
//               theme === 'light' ? 'filter invert' : ''
//             }`}
//             onClick={() => setToggle(!toggle)}
//           />
//         </div>

//         <div
//           className={`${
//             !toggle ? 'hidden' : 'flex'
//           } p-6 ${
//             theme === 'light' ? 'offwhite-gradient' : 'black-gradient'
//           } absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
//         >
//           <ul className="list-none flex flex-col gap-4">
//             {navLinks.map((link) => (
//               <li
//                 key={link.id}
//                 className={`${
//                   active === link.title
//                     ? theme === 'light'
//                       ? 'text-black'
//                       : 'text-white'
//                     : theme === 'light'
//                     ? 'text-gray'
//                     : 'text-light_gray'
//                 } font-poppins font-medium cursor-pointer text-[16px]`}
//                 onClick={() => {
//                   setToggle(!toggle);
//                   setActive(link.title);
//                 }}
//               >
//                 <a href={`#${link.id}`}>{link.title}</a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//     </nav>
//   )
// }

// export default Navbar

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import ThemeToggle from './ThemeToggle';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import { useTheme } from './ThemeContext';

const Navbar = () => {
  const { theme } = useTheme();
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    const navbarHeight = 64; // Adjust this value to match your navbar's height
    
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed top-0 z-20 ${theme == 'light' ? styles.offWhiteBackground : 'bg-black'}`}
    >
      <div className="w-full flex justify-start items-center max-w-7xl mx-auto">
        <ThemeToggle />
      </div>

      <div className="w-full flex justify-end items-center max-w-7xl mx-auto">
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li 
              key={link.id} 
              className={`${active === link.title 
                ? theme === "light" 
                  ? "text-black" 
                  : "text-white" 
                : theme === "light" 
                  ? "text-gray" 
                  : "text-light_gray"} hover:${theme === "light" 
                ? "text-light_gray" 
                : "text-gray"} text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a 
                href={`#${link.id}`}
                onClick={(e) => handleScroll(e, link.id)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className={`w-[28px] h-[28px] object-contain cursor-pointer ${
              theme === 'light' ? 'filter invert' : ''
            }`}
            onClick={() => setToggle(!toggle)}
          />
        </div>

        <div
          className={`${
            !toggle ? 'hidden' : 'flex'
          } p-6 ${
            theme === 'light' ? 'offwhite-gradient' : 'black-gradient'
          } absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
        >
          <ul className="list-none flex flex-col gap-4">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title
                    ? theme === 'light'
                      ? 'text-black'
                      : 'text-white'
                    : theme === 'light'
                    ? 'text-gray'
                    : 'text-light_gray'
                } font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(link.title);
                }}
              >
                <a 
                  href={`#${link.id}`}
                  onClick={(e) => handleScroll(e, link.id)}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;