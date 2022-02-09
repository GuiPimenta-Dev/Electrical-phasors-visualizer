import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SideBarData';
import './Navbar.css';

const MyNavbar = () => {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);

	return (
		<>
			<div className='navbar'>
				<Link to='#' className='menu-bars'>
					<FaIcons.FaBars onClick={showSidebar} style={{ color: '#8e99a4' }} />
				</Link>
			</div>
			<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
				<ul className='nav-menu-items' onClick={showSidebar}>
					<li className='navbar-toggle'>
						<Link to='#' className='menu-bars' style={{ color: '#fff' }}>
							<AiIcons.AiOutlineClose />
						</Link>
					</li>
					{SidebarData.map((item, index) => {
						return (
							<li key={index} className={item.cName}>
								<Link to={item.path}>
									{item.icon}
									<span>{item.title}</span>
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</>
	);
};

export default MyNavbar;
