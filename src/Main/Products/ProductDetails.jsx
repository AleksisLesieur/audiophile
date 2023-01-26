import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { browserHistory, Router, Route, Routes } from "react-router";
import { useParams } from 'react-router';
import { useLocation } from 'react-router';
import { useMediaQuery } from "react-responsive";
import ProductCard from './ProductCard';

import ProductItems from '../../data.json'
import styles from "./Products.module.scss";
import '../../index.css'

function ProductDetails() {
    const { ProductID } = useParams()
    console.log(`ProductDetails productID ${ProductID}, ${useParams()}`)
    console.log(useParams())

    // const isDesktop = useMediaQuery({ minWidth: 1120, maxWidth: 1440 })
    const isDesktop = useMediaQuery({ minWidth: 1160 })
    // const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1159.9 })
    const isTablet = useMediaQuery({ minWidth: 560, maxWidth: 1159.9 })
    const isMobile = useMediaQuery({ maxWidth: 559.9 })
    // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    console.log(`"isDesktop": ${isDesktop}, "isTablet": ${isTablet}, "isMobile": ${isMobile}`)

    // console.log(itemCategory)
    // ask him to explain this code
    // let sortedByNewIsTrue = [...ProductItems].sort(function (a,b) {
    //     return b.new - a .new;
    // })

    // console.log(itemCategory)
    const FilteredProduct = ProductItems.filter(function (element, index) {
        console.log(`element: ${element.id}, PRODUCTID: ${ProductID}`)
            if (element.id === Number(ProductID)) {
                return element
            }
        }
        
)
    return FilteredProduct.map(function(element) {
        return <ProductCard key={element.id} product={element}/>
    })
    
}
// export default function useRouter() { 
//     // console.log(props)
//     const params = useParams(); 
//     const location = useLocation();
//     console.log(`params: ${params}, location ${location}`)
//     // return Products(() => {
//     //     return {
//     //         pathname: location.pathname,
//     //     };
//     // }, [params]);
//     return <Products params={params} pathname={
//         location.pathname
//     }/>
// }
export default ProductDetails