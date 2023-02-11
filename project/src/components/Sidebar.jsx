import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { sidebarMenu, socialIcons } from '../data/data'

function Sidebar() {
  return (
    <aside>
        <div className="aside-wrapper">
            <Link to={'/'} className='picture'>
                <div className="myself"></div>
            </Link>
            <ul className='side-link'>{sidebarMenu.map((link,index)=>{
                const {text, url, icon} = link
                return(
                    <li key={index}>
                        <NavLink className='link-section' to={url}>
                            {icon}
                            {text}
                        </NavLink>
                    </li>
                )
            })}</ul>
            <div className="social-icon">
                {socialIcons.map((platform,index)=>{
                    const {icon, url} = platform
                    return(
                        <a href={url} target="_blank" rel="noopener noreferrer" key={index}>
                            {icon}
                        </a>
                    )
                })}
            </div>
        </div>
    </aside>
  )
}

export default Sidebar