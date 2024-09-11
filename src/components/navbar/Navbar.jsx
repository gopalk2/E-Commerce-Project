import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import myContext from '../../context/data/myContext';
import { useSelector } from 'react-redux';
import { ProtectedRouteForAdmin } from '../../App';

export default function Navbar() {
    const context = useContext(myContext);
    const { product, searchKey, setSearchKey, filterType,
        setFilterType, filterPrice, setFilterPrice } = context;

    const cartItems = useSelector((state) => state.cart);
    // console.log(cartItems);

    const user = JSON.parse(localStorage.getItem('user'));

    const navigate = useNavigate();

    // logout 
    const logout = () => {
        localStorage.clear('user');
        navigate('/login')
    }

    return (
        <>
            <div className="navbar bg-[#280F91] text-white lg:flex md:flex flex-wrap justify-between  items-center sticky top-0 p-4 z-50">
                {/* Left  */}
                <div className="left mb-2 lg:mb-0 md:mb-0">
                    <div className="logo">
                        <Link to={'/'}>
                            <h2 className='text-2xl font-bold text-center '>E-commerce</h2>
                        </Link>
                    </div>
                </div>



                {/* mid  */}
                <div className="mid mb-2 lg:mb-0 md:mb-0">
                    <ul className='flex items-center justify-center space-x-5'>
                        {/* Home Page  */}
                        <Link to={'/'}>
                            <li className='text-md lg:text-lg md:text-lg  font-semibold'>
                                Home
                            </li>
                        </Link>

                        {/* Order Page  */}
                        <Link to={'/order'}>
                            <li className='text-md lg:text-lg md:text-lg  font-semibold'>
                                Order
                            </li>
                        </Link>

                        {/* Signup Page  */}
                        {!user ? <Link to={'/signup'}>
                            <li className='text-md lg:text-lg md:text-lg  font-semibold'>
                                Signup
                            </li>
                        </Link> : ''}

                        {/* Admin Dashboard  */}
                            {
                                user?.user?.email == 'admin@gmail.com' && <Link to={'/dashboard'}>
                                <li className='text-md cursor-pointer lg:text-lg md:text-lg  font-semibold'>
                                    Admin</li>
                            </Link>
                            }

                        {/* Logout  */}
                        {user && <li 
                        onClick={logout}
                        className='text-md lg:text-lg md:text-lg cursor-pointer  font-semibold'>
                            Logout
                            </li>}


                        {/* Cart Page */}
                        <Link to={'/cart'}>
                            <li className=' text-lg font-semibold'>
                                <div className="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="
                                    w-4 h-4 lg:w-6 lg:h-6 md:w-6 md:h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>
                                    <p className='text-md lg:text-lg md:text-lg'>{cartItems.length}</p>
                                </div>
                            </li>
                        </Link>


                    </ul>
                </div>

                {/* right  */}
                <div className="right">
                    <div className="  p-2 rounded-lg bg-gray-100 ">
                        <select name="" value={filterType} onChange={(e) => setFilterType(e.target.value)} className=' cursor-pointer bg-transparent outline-none text-black  mr-0 lg:mr-2'>
                            <option value="" selected disabled hidden>
                                Category
                            </option>
                            {product.map((item, index) => {
                                const { category } = item
                                return (
                                    <option value={category}>{category}</option>
                                )
                            })}
                        </select>
                        <select name="" value={filterPrice} onChange={(e) => setFilterPrice(e.target.value)} className=' cursor-pointer bg-transparent outline-none text-black  mr-0 lg:mr-2'>
                            <option value="" selected disabled hidden>
                                ₹ Price
                            </option>
                            {product.map((item, index) => {
                                const { price } = item
                                return (
                                    <option value={price}>₹ {price}</option>
                                )
                            })}
                        </select>
                        <input
                            type="text"
                            value={searchKey}
                            onChange={(e) => setSearchKey(e.target.value)}
                            className=' bg-transparent outline-none text-black lg:w-52'
                            placeholder='Search here..'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
