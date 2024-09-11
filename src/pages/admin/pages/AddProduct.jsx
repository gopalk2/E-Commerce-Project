import React, { useContext } from 'react'
import myContext from '../../../context/data/myContext';

export default function AddProduct() {
    const context = useContext(myContext);
    const { products, setProducts, addProduct, } = context;
    return (
        <div>
            <div className=" flex justify-center items-center h-screen ">
                <div className=" bg-gray-500 p-10 rounded-lg ">
                    <div className="">
                        <h1 className=' text-center text-2xl mb-3 font-bold text-white'>Add Product</h1>
                    </div>
                    <div className="">
                        <input
                            type="text"
                            placeholder='Title'
                            name='title'
                            value={products.title}
                            onChange={(e) => setProducts({ ...products, title: e.target.value })}
                            className=' bg-gray-200 w-full py-2 px-2 outline-none rounded-md text-black mb-3'
                        />
                    </div>
                    <div className="">
                        <input
                            type="text"
                            placeholder='Image Url'
                            name='imageUrl'
                            value={products.imageUrl}
                            onChange={(e) => setProducts({ ...products, imageUrl: e.target.value })}
                            className=' bg-gray-200 w-full py-2 px-2 outline-none rounded-md text-black mb-3'
                        />
                    </div>
                    <div className="">
                        <input
                            type="text"
                            placeholder='Price'
                            name='price'
                            value={products.price}
                            onChange={(e) => setProducts({ ...products, price: e.target.value })}
                            className=' bg-gray-200 w-full py-2 px-2 outline-none rounded-md text-black mb-3'
                        />
                    </div>
                    <div className="">
                        <input type="text"
                            placeholder='Category'
                            name='category'
                            value={products.category}
                            onChange={(e) => setProducts({ ...products, category: e.target.value })}
                            className=' bg-gray-200 w-full py-2 px-2 outline-none rounded-md text-black mb-3'
                        />
                    </div>
                    <div className="">
                        <textarea
                            cols="30"
                            rows="10"
                            placeholder='Description'
                            name='desc'
                            value={products.desc}
                            onChange={(e) => setProducts({ ...products, desc: e.target.value })}
                            className=' bg-gray-200 w-full px-2 py-2 outline-none 
                            rounded-md text-black mb-2'
                        ></textarea>
                    </div>

                    <button
                        onClick={addProduct}
                        className=' bg-gray-200 w-full px-2 py-2 rounded-md font-bold'>
                        Add Product
                    </button>
                </div>
            </div>
        </div>
    )
}


