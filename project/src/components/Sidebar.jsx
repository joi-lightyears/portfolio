import React from 'react'
import {Link} from 'react-router-dom'
import '../assets/style/sidebar.scss'

function Sidebar() {
  return (
    <aside className='aside'>
        <div className="aside-wrapper">
            <Link to={'/'} className='picture'>
                <div className="myself"></div>
            </Link>
        </div>
    </aside>
  )
}

export default Sidebar