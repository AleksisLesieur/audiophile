import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { browserHistory, Router, Route, Routes } from "react-router";
import { useParams } from 'react-router';
import { useLocation } from 'react-router';
import { useMediaQuery } from "react-responsive";
import NavRoutingCard from './NavRoutingCard';

import ProductItems from '../../data.json'
import styles from "./NavRouting.module.scss";
import '../../index.css'

function NavRouting() {
    const { product } = useParams()
    // console.log(`NAVROUTING ${product}`)

    const isDesktop = useMediaQuery({ minWidth: 1160 })
    const isTablet = useMediaQuery({ minWidth: 560, maxWidth: 1159.9 })
    const isMobile = useMediaQuery({ maxWidth: 559.9 })

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

    const Categories = Array.from(new Set(productsSortedByPrice.map(function (element) {
        return element.category
    })))

    const NavItems = productsSortedByPrice.filter((element) => {
        if (element.category === product) {
        // return <Card key={element.id} product={element}/>
            return element
        }
    })
    // push the Banner to the NavItems

    return NavItems.map(function(element) {
        return <NavRoutingCard key={element.id} product={element}/>
    })
    
}

export default NavRouting

