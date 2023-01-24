import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { BrowserRouter } from "react-router-dom";
import { browserHistory, Router, Route, Routes } from "react-router";
import { useParams } from 'react-router';
import { useLocation } from 'react-router';

import ProductItems from '../../data.json'
import styles from "./NavRouting.module.scss";
import '../../index.css'

function NavRouting(props) {
    console.log(props.pathname)
    const itemCategory = ProductItems.map(function (element) {
        return element.category;
    });
    // console.log(itemCategory)
    // ask him to explain this code
    // let sortedByNewIsTrue = [...ProductItems].sort(function (a,b) {
    //     return b.new - a .new;
    // })
    let sortedPrice = ProductItems.sort(function (a,b) {
        if (a.price > b.price) {
            return -1;
        } else if (a.price < b.price) {
            return 1;
        } else {
            return 0;
        }
    }) 
    // console.log(itemCategory)
    const NavItems = sortedPrice.map(function (element, index) {
        // console.log(element, index)
        const desktop = window.width
        
        if (props.loadComponent === itemCategory[index]) {
            return <div key={element.id} className={`container ${styles['nav-items-styling']} ${styles.alignement}`}>
            <div className={styles.pictures}>
                <img src={`${element.image.desktop}`} alt="" width={540} height={560} />
            </div>
            <article>
                <div className={styles.newProduct} style={{display: element.new ? 'block' : 'none'}}>New Product</div>
            
                <div className={styles.title}>
                    {element.name}
                </div>
                <div className={styles.description}>
                    {element.description}
                </div>
                <button>SEE PRODUCT</button>
                <div>{element.price}</div>
            </article>
        </div>
        }
        }
        
)
    return <div>
        <div>{NavItems}</div>
        {/* <img src="./assets/product-xx99-mark-two-headphones/mobile/image-product.jpg" alt="" /> */}
    </div>
    
}
// export default function useRouter() { 
//     const params = useParams(); 
//     const location = useLocation();
//     console.log(params, location)
//     // return NavRouting(() => {
//     //     return {
//     //         pathname: location.pathname,
//     //     };
//     // }, [params]);
//     return <NavRouting params={params} pathname={
//         location.pathname
//     }/>
// }
export default NavRouting