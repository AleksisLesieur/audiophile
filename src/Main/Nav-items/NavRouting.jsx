import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { browserHistory, Router, Route, Routes } from "react-router";
import { useParams } from 'react-router';
import { useLocation } from 'react-router';
import { useMediaQuery } from "react-responsive";
import Card from './NavRoutingCard';

import ProductItems from '../../data.json'
import styles from "./NavRouting.module.scss";
import '../../index.css'

function NavRouting(props) {
    const { product } = useParams()
    console.log(`NAVROUTING ${product}`)

    const itemCategory = ProductItems.map(function (element) {
        return element.category;
    });
    // const isDesktop = useMediaQuery({ minWidth: 1120, maxWidth: 1440 })
    const isDesktop = useMediaQuery({ minWidth: 1160 })
    // const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1159.9 })
    const isTablet = useMediaQuery({ minWidth: 560, maxWidth: 1159.9 })
    const isMobile = useMediaQuery({ maxWidth: 559.9 })
    // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    console.log(`"isDesktop": ${isDesktop}, "isTablet": ${isTablet}, "isMobile": ${isMobile}`)

    let productsSortedByPrice = ProductItems.sort(function (a,b) {
        if (a.price > b.price) {
            return -1;
        } else if (a.price < b.price) {
            return 1;
        } else {
            return 0;
        }
    }) 
    // console.log(itemCategory)
    const NavItems = productsSortedByPrice.filter((element) => {
        if (element.category === product) {
        // return <Card key={element.id} product={element}/>
            return element
        }
    }
        
)
    return NavItems.map(function(element) {
        return <Card key={element.id} product={element}/>
    })
    
}

export default NavRouting

// export default function useRouter() { 
//     // console.log(props)
//     const params = useParams(); 
//     const location = useLocation();
//     console.log(`params: ${params}, location ${location}`)
//     // return NavRouting(() => {
//     //     return {
//     //         pathname: location.pathname,
//     //     };
//     // }, [params]);
//     return <NavRouting params={params} pathname={
//         location.pathname
//     }/>
// }
