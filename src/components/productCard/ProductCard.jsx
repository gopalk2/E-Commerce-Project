import React, { useContext, useEffect } from 'react'
import myContext from '../../context/data/myContext'
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/features/cartSlice/CartSlice';

function ProductCard() {
    const context = useContext(myContext);

    const { product, searchKey, filterType,
        filterPrice } = context;

    const navigate = useNavigate();

    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart);
    console.log(cartItems)

    // Add To Cart Function 
    const addCart = (product) => {
        dispatch(addToCart(product));
        alert('add to cart');
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])
    return (
        <div className=' mb-5'>
            <h1 className=' text-center text-3xl font-bold py-5'>Top Product</h1>
            <div className='flex flex-wrap px-4 lg:px-10 '>
                {
                    product.filter((obj) => obj.title.toLowerCase().includes(searchKey))
                        .filter((obj) => obj.category.toLowerCase().includes(filterType))
                        .filter((obj) => obj.price.toLowerCase().includes(filterPrice))
                        .map((item, index) => {
                            const { title, imageUrl, price, category, id } = item
                            return (
                                <div key={index} className="p-2 md:w-1/4 w-full">
                                    <div className="bg-[#ffffff] p-3 rounded-2xl 
                            shadow-[inset_0_0px_3px_rgba(0,0,0,0.6)] hover:-translate-y-1 ">
                                        {/* Image  */}
                                        <div className="flex justify-center items-center">
                                            <img
                                                onClick={() => navigate(`/productinfo/${id}`)}
                                                className='rounded-lg h-80 mb-2 cursor-pointer' src={imageUrl} alt="img" />
                                        </div>

                                        {/* Title  */}
                                        <h2 className='text-xl text-black font-bold'>{title.substr(0,25)}</h2>

                                        {/* Price  */}
                                        <h2 className='text-xl text-black font-semibold'>₹ {price}</h2>

                                        {/* Category  */}
                                        <h2 className='text-xl text-black mb-1  '><span className='font-semibold'>Category :</span> {category}</h2>

                                        {/* Button  */}
                                        <div className=" ">
                                            <button
                                                onClick={() => addCart(item)}
                                                className='bg-[#280F91] px-5 py-1.5 w-full text-white rounded-lg'>
                                                Add to card
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            )
                        })
                }

            </div>
        </div>
    )
}

export default ProductCard