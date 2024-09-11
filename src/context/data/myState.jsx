import React, { useEffect, useState } from 'react'
import MyContext from './myContext'
import { Timestamp, addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import { fireDb } from '../../firebase/FirebaseConfig';

export default function MyState({ children }) {

    const [searchKey, setSearchKey] = useState('')
    const [filterType, setFilterType] = useState('')
    const [filterPrice, setFilterPrice] = useState('')

    // Product State 
    const [products, setProducts] = useState({
        title: null,
        imageUrl: null,
        price: null,
        category: null,
        desc: null,
        time: Timestamp.now(),
        date: new Date().toLocaleString(
            "en-US",
            {
                month: "short",
                day: "2-digit",
                year: "numeric",
            }
        )
    });

    // Add Product 
    const addProduct = async () => {
        if (products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.desc == null) {
            return alert("all fields are required")
        }

        try {
            const productRef = collection(fireDb, 'products');
            await addDoc(productRef, products)
            alert("Add product successfully");
            setTimeout(() => {
                window.location.href = '/dashboard'
            }, 800);
            getProductData();
        } catch (error) {
            console.log(error);
        }
    }

    // Get Product State
    const [product, setProduct] = useState([]);

    // Get Product 
    const getProductData = async () => {

        try {
            const q = query(
                collection(fireDb, 'products'),
                orderBy('time')
            );

            const data = onSnapshot(q, (QuerySnapshot) => {
                let productArray = [];
                QuerySnapshot.forEach((doc) => {
                    productArray.push({ ...doc.data(), id: doc.id });
                });
                setProduct(productArray);
            });

            return () => data;

        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        getProductData();
    }, []);


    // Update Product 
    const edithandle = (item) => {
        setProducts(item)
    }

    // Update Product Function 
    const updateProduct = async () => {
        try {

            await setDoc(doc(fireDb, 'products', products.id), products)
            alert("Product Updated successfully")
            setTimeout(() => {
                window.location.href = '/dashboard'
            }, 800);
            getProductData();
        } catch (error) {
            console.log(error)
        }
    }

    // delete product

    const deleteProduct = async (item) => {
        try {
            await deleteDoc(doc(fireDb, 'products', item.id))
            alert('Product Deleted successfully')
            getProductData();
        } catch (error) {
        }
    }
    return (
        <MyContext.Provider value={{
            products, setProducts, addProduct, product,
            edithandle, updateProduct, deleteProduct, 
            searchKey, setSearchKey, filterType, 
            setFilterType, filterPrice, setFilterPrice
        }}>
            {children}
        </MyContext.Provider>
    )
}
