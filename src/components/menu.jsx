import React from 'react'
import '../styles/menu.css'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <section className='navbar navbar-vertical fixed-start  navbar-light border-end gap-3'>
            <nav className='d-flex'>
                <div>
                    <h1 className='text-primary'>AchiversIT</h1>
                </div>

                <div className='menu'>
                    <ul className=' navbar-nav gap-5'>
                        <li>
                            <Link to='/' className='items text-decoration-none px-4'>
                            <i className="fa-solid fa-database"></i>
                                Dashboard
                            </Link>
                        </li>

                        <li>
                            <Link to='/users' className='items text-decoration-none px-4 '>
                            <i className="fa-solid fa-users"></i>
                                Users
                            </Link>
                        </li>

                        <li>
                            <Link to='/Products' className='items text-decoration-none px-4'>
                            <i className="fa-brands fa-product-hunt"></i>
                                Products
                            </Link>
                        </li>

                        <li>
                            <Link to='/login' className='items text-decoration-none px-4 text-danger'>
                            <i className="fa-solid fa-right-to-bracket"></i>
                                Signout
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </section>
    )
}

export default Menu;