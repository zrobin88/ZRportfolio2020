import React from 'react'
import Resume from '../IMG/ZacharyRobinResume2019.docx'
import './style.css'

const Nav = () => {

    return (

    <nav className="navbar poppins navbar-expand-lg exp text-light mainNav fixed-top">
       
            <a className="navbar-brand text-light" href="test" />
            <div className='col-md-8'>
                <h3 className='text-wrap name'>Zack Robin</h3>
               </div>
            <div className='col-md-2'>
                <a className='btn btn-small btn-light linkedin' type='btn' target='blank' href='https://www.linkedin.com/in/zrobin88/'>Linkedin</a>
            </div>
            <div className='col-md-2'>
                <a className='btn btn-small btn-light linkedin' type='btn' target='blank' href="/static/media/ZacharyRobinResume2019.98d7482c.docx"rel="noopener noreferrer">Resume</a>
            </div>

    </nav>
            )
        }
        
export default Nav