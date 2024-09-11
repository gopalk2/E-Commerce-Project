import React, { useContext } from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Layout from '../../components/layout/Layout';
import myContext from '../../context/data/myContext';

export default function Dashboard() {
    const context = useContext(myContext);
    const { product,edithandle, updateProduct, deleteProduct, } = context;
    return (
        <Layout>
            <div className="py-5">
                {/* Product, Order User Box */}
                <div className=" lg:flex md:flex flex-wrap justify-center lg:space-x-10 md:space-x-10 space-y-3 lg:space-y-0 md:space-y-0 px-5 lg:px-0 md:px-0 mb-10">
                    {/* Total Products */}
                    <div className=" bg-[#280F91] px-20 py-10 text-white rounded-xl shadow-md border-2 border-gray-100">
                        <p className='text-center font-bold text-2xl'>{product.length}</p>
                        <h1 className='text-center font-bold'>Total Products</h1>
                    </div>

                    {/* Total Orders */}
                    <div className=" bg-[#280F91] px-20 py-10 text-white rounded-xl shadow-md border-2 border-gray-100">
                        <p className='text-center font-bold text-2xl'>{'0'}</p>
                        <h1 className='text-center font-bold'>Total Orders</h1>
                    </div>

                    {/* Total Users */}
                    <div className=" bg-[#280F91] px-20 py-10 text-white rounded-xl shadow-md border-2 border-gray-100">
                        <p className='text-center font-bold text-2xl'>{'0'}</p>
                        <h1 className='text-center font-bold'>Total Users</h1>
                    </div>
                </div>

                {/* Product, Order User Box Tabs  */}
                <Tabs className=''>
                    <TabList className='flex space-x-8 justify-center items-center text-white font-bold mb-10'>
                        <Tab className={'bg-[#280F91] outline-none px-5 py-2 rounded-lg cursor-pointer shadow-md'}>Products</Tab>
                        <Tab className={'bg-[#280F91] outline-none px-5 py-2 rounded-lg cursor-pointer shadow-md'}>Order</Tab>
                        <Tab className={'bg-[#280F91] outline-none px-5 py-2 rounded-lg cursor-pointer shadow-md'}>user</Tab>
                    </TabList>

                    <TabPanel>
                        {/* Product Table  */}
                        <div className="flex justify-end lg:mr-[6em] md:mr-[6em] mr-[1em]">
                            <Link to={'/addproduct'}>
                                <button
                                    className=' bg-[#280F91] text-white py-2 px-5 rounded-lg shadow-md font-bold'>
                                    Add To Cart
                                </button>
                            </Link>
                        </div>

                        <div className="">
                            <div className=' container mx-auto px-4 max-w-7xl my-5' >
                                <div className=" overflow-x-auto shadow-md sm:rounded-xl">
                                    {/* table  */}
                                    <table className="w-full shadow-lg text-sm text-left text-black rounded-lg bg-[#bebeff] " >
                                        {/* thead  */}
                                        <thead
                                            className="text-xs border-b-2 border-b-black ">
                                            <tr>
                                                <th scope="col" className="px-6 py-3">
                                                    S.No
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Image
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Product Title
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Category
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Price
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Date
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Edit
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Delete
                                                </th>
                                            </tr>
                                        </thead>

                                        {/* tbody  */}
                                            {product.map((item, index) => {
                                                  const { title, imageUrl, price, category, date } = item
                                                return (
                                                    <tbody key={index}>
                                                        <tr className=" border-b-2" >
                                                            {/* S.No   */}
                                                            <td className="px-6 py-4">
                                                                {index + 1}
                                                            </td>

                                                            {/* Product Image  */}
                                                            <th scope="row" className="px-6 py-4 font-medium ">
                                                                {/* Image  */}
                                                                <img className='w-16 rounded-lg' src={imageUrl} alt="thumbnail" />
                                                            </th>

                                                            {/* Product Title  */}
                                                            <td className="px-6 py-4">
                                                                {title}
                                                            </td>

                                                            {/* Product Category  */}
                                                            <td className="px-6 py-4">
                                                                {category}
                                                            </td>

                                                            {/* Product Price  */}
                                                            <td className="px-6 py-4">
                                                                ₹{price}
                                                            </td>

                                                            {/* Product Date  */}
                                                            <td className="px-6 py-4">
                                                                {date}
                                                            </td>


                                                            {/* Update Product  */}
                                                            <Link to={'/editproduct'}>
                                                                <td className="px-6 py-4"
                                                                onClick={()=> edithandle(item)}>
                                                                    <button className=' px-4 py-1 rounded-lg text-white font-bold bg-green-600'>
                                                                        Update
                                                                    </button>
                                                                </td>
                                                            </Link>


                                                            {/* Delete Product  */}
                                                            <td className="px-6 py-4"
                                                            onClick={()=> deleteProduct(item)}>
                                                                <button className=' px-4 py-1 rounded-lg text-white font-bold bg-red-500'>
                                                                    Delete
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                )
                                            })}
                                    </table>
                                </div>
                            </div>

                        </div>
                    </TabPanel>

                    {/* Order Table  */}
                    <TabPanel>
                        {/* Order Table */}
                        <div className="">
                            <div className=' container mx-auto px-4 max-w-7xl my-5' >
                                <div className="relative overflow-x-auto shadow-md sm:rounded-xl">
                                    {/* table  */}
                                    <table className="w-full bg-[#bebeff] shadow-lg text-sm text-left text-black rounded-lg " >
                                        {/* thead  */}
                                        <thead
                                            className="text-xs border-b-2 border-b-black ">
                                            <tr>
                                                <th scope="col" className="px-6 py-3">
                                                    S.No
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Payment Id
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Product Title
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Category
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Price
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Date
                                                </th>
                                            </tr>
                                        </thead>

                                        {/* tbody  */}
                                        <tbody>
                                            <tr className=" border-b-2" >
                                                {/* S.No   */}
                                                <td className="px-6 py-4">
                                                    {'1.'}
                                                </td>

                                                {/* Payment Id  */}
                                                <td className="px-6 py-4">
                                                    {'399399393920'}
                                                </td>

                                                {/* Product Title  */}
                                                <td className="px-6 py-4">
                                                    {'React Introduction'}
                                                </td>

                                                {/* Product Category  */}
                                                <td className="px-6 py-4">
                                                    {'reactjs'}
                                                </td>

                                                {/* Product Price  */}
                                                <td className="px-6 py-4">
                                                    ₹{'100'}
                                                </td>

                                                {/* Product Date  */}
                                                <td className="px-6 py-4">
                                                    {'Jul 25, 2023'}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </TabPanel>

                    {/* User Table  */}
                    <TabPanel>
                        {/* User Table  */}
                        <div className="">
                            <div className=' container mx-auto px-4 max-w-7xl my-5' >
                                <div className=" overflow-x-auto shadow-md sm:rounded-xl">
                                    {/* table  */}
                                    <table className="w-full bg-[#bebeff] shadow-lg text-sm text-left text-black rounded-lg " >
                                        {/* thead  */}
                                        <thead
                                            className="text-xs border-b-2 border-b-black ">
                                            <tr>
                                                <th scope="col" className="px-6 py-3">
                                                    S.No
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Name
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Email
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Date
                                                </th>
                                            </tr>
                                        </thead>

                                        {/* tbody  */}
                                        <tbody>
                                            <tr className=" border-b-2" >
                                                {/* S.No   */}
                                                <td className="px-6 py-4">
                                                    {'1.'}
                                                </td>

                                                {/* Name  */}
                                                <td className="px-6 py-4">
                                                    {'Swati Mishra'}
                                                </td>

                                                {/* Email  */}
                                                <td className="px-6 py-4">
                                                    ₹{'100'}
                                                </td>

                                                {/*  Date  */}
                                                <td className="px-6 py-4">
                                                    {'Jul 25, 2023'}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </Layout>
    )
}


