import React from 'react'
import {NavLink} from 'react-router-dom';


export default function Navbar(props) {
    //console.log(props.loginUser)

    return (
        <nav className='p-4 d-flex justify-content-between'>

            <ul className=' list-unstyled d-flex  align-items-center'>
                <li className="px-2"><h2 className="h3">Noxe</h2></li>
               { localStorage.getItem("currentUser")  && <> <li className="px-2"><NavLink activeClassName="activeLink" to="/home" >Home</NavLink></li>
                <li className="px-2"><NavLink activeClassName="activeLink" to="/movies">Movies</NavLink></li>
                <li className="px-2"><NavLink activeClassName="activeLink" to="/tv">Tv</NavLink></li>
                <li className="px-2"><NavLink activeClassName="activeLink" to="/people">Actors</NavLink></li>

                {/* <li className="px-2"><NavLink to="/network">Network</NavLink></li>
                <li className="px-2"><NavLink to="/people">People</NavLink></li>  */}
                </>}

            </ul>
            
            <ul className=' list-unstyled d-flex  align-items-center'>
                <li className="px-2"><i className="fab fa-facebook-f"></i></li>
                <li className="px-2"><i className="fab fa-instagram"></i></li>
                <li className="px-2"><i className="fab fa-spotify"></i></li>

                {localStorage.getItem("currentUser")==null  && <><li className="px-2"><NavLink activeClassName="activeLink" to="/register">Register</NavLink></li>
                <li className="px-2"><NavLink activeClassName="activeLink" to="/login">Login</NavLink></li></>}

                {localStorage.getItem("currentUser")  && <li className="px-2"><a href='#' onClick={props.logOut}>Logout</a></li>}

            </ul>
        </nav>
    )
}
