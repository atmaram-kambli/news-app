import React from 'react'
import { Link } from 'react-router-dom'


export default function SideBar() {
  return (
    <div className='my-5 position-fixed'>
      {/* <h2 className='p-2 mt-5'>Categories</h2> */}
      <ul className="list-group">
        <li className="list-group-item list-group-item-action p-3"><Link className="nav-link" to="/business">Business</Link></li>
        <li className="list-group-item list-group-item-action p-3"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
        <li className="list-group-item list-group-item-action p-3"><Link className="nav-link" to="/general">General</Link></li>
        <li className="list-group-item list-group-item-action p-3"><Link className="nav-link" to="/health">Health</Link></li>
        <li className="list-group-item list-group-item-action p-3"><Link className="nav-link" to="/science">Science</Link></li>
        <li className="list-group-item list-group-item-action p-3"><Link className="nav-link" to="/sports">Sports</Link></li>
        <li className="list-group-item list-group-item-action p-3"><Link className="nav-link" to="/technology">Technology</Link></li>
      </ul>
    </div>
  )
}
