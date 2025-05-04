// import React, { useState } from 'react'
// import './sidebar.css'
// import Logo from '../../assets/logo.png'

// const sidebar = () => {
//   const[toggle,showMenu]=useState(false);
//   return (
//     <div className="sidebar-hover-area">
//     <div className={toggle ? 'aside show-menu':'aside'}>
//       <a href="#home" className="nav_logo">
//         <img src={Logo} alt="" />
//       </a>
//       <nav className="nav_menu">
//         <ul className="nav_list">
//           <li className="nav_item">
//             <a href="#home" className="nav_link">
//             <span class="icon-home"></span>
//             </a>
//           </li>
//           <li className="nav_item">
//             <a href="#about" className="nav_link">
//             <span class="icon-user"></span>
//             </a>
//           </li>
//           <li className="nav_item">
//             <a href="#services" className="nav_link">
//             <span class="icon-briefcase"></span>
//             </a>
//           </li>
//           <li className="nav_item">
//             <a href="#resume" className="nav_link">
//             <span class="icon-graduation"></span>
//             </a>
//           </li>
//           <li className="nav_item">
//             <a href="#work" className="nav_link">
//             <span class="icon-layers"></span>
//             </a>
//           </li>
//           <li className="nav_item">
//             <a href="#blog" className="nav_link">
//             <span class="icon-note"></span>
//             </a>
//           </li>
//           <li className="nav_item">
//             <a href="#contact" className="nav_link">
//             <span class="icon-bubble"></span>
//             </a>
//           </li>
//         </ul>
//       </nav>

//       <div className="nav_footer">
//         <span className="copyright">&copy; 2025-PukarHirachan</span>
//       </div>
//     </div>
//     <div className={toggle? 'nav_toggle nav_toggle-open':'nav_toggle'} onClick={()=>showMenu(!toggle)}>
//       <span className="icon-menu"></span>
//     </div>
//     </div>
//   )
// }

// export default sidebar

import React, { useState } from 'react';
import './sidebar.css';
import Logo from '../../assets/logo.png';

const Sidebar = () => {
  const [toggle, showMenu] = useState(false);

  return (
    <>
     
      <div className="sidebar-hover-area"></div>

      <div className={toggle ? 'aside show-menu' : 'aside'}>
        <a href="#home" className="nav_logo">
          <img src={Logo} alt="Logo" />
        </a>

        <nav className="nav_menu">
          <ul className="nav_list">
            <li className="nav_item"><a href="#home" className="nav_link"><span className="icon-home"><span className='sidebar_name'>Home</span></span></a></li>
            <li className="nav_item"><a href="#about" className="nav_link"><span className="icon-user"><span className='sidebar_name'>About</span></span></a></li>
            <li className="nav_item"><a href="#services" className="nav_link"><span className="icon-briefcase"><span className='sidebar_name'>Service</span></span></a></li>
            <li className="nav_item"><a href="#resume" className="nav_link"><span className="icon-graduation"><span className='sidebar_name'>Education</span></span></a></li>
            <li className="nav_item"><a href="#work" className="nav_link"><span className="icon-layers"><span className='sidebar_name'>Project</span></span></a></li>
            <li className="nav_item"><a href="#blog" className="nav_link"><span className="icon-note"><span className='sidebar_name'>Blog</span></span></a></li>
            <li className="nav_item"><a href="#contact" className="nav_link"><span className="icon-bubble"><span className='sidebar_name'>Contact</span></span></a></li>
          </ul>
        </nav>

        <div className="nav_footer">
          <span className="copyright">&copy; 2025 - Pukar Hirachan</span>
        </div>
      </div>

      {/* Toggle button for mobile */}
      <div className={toggle ? 'nav_toggle nav_toggle-open' : 'nav_toggle'} onClick={() => showMenu(!toggle)}>
        <span className="icon-menu"></span>
      </div>
    </>
  );
};

export default Sidebar;
