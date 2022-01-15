import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import "./ShopCollection.css";
import data_ from "../dataPoint/AllShopProducts";
import fleece from "../images/hoodie.jpg";


function ShopCollection(props) {
    return (
        <div className="shop-collection clothList" >
            <Link>
                {/* //props.img */}
                <img src ={fleece} className="mobile-view-image" />
                {/* //props.desc */}
                <h6 className="mobile-view-desc">This is a We hope to start a long term business relationship with you.</h6>
            </Link>
            <Link>
                {/* //props.img */}
                <img src ={fleece} className="mobile-view-image" />
                {/* //props.desc */}
                <h6 className="mobile-view-desc">This is a We hope to start a long term business relationship with you.</h6>
            </Link>
            <Link>
                {/* //props.img */}
                <img src ={fleece} className="mobile-view-image" />
                {/* //props.desc */}
                <h6 className="mobile-view-desc">This is a We hope to start a long term business relationship with you.</h6>
            </Link>
            <Link>
                {/* //props.img */}
                <img src ={fleece} className="mobile-view-image" />
                {/* //props.desc */}
                <h6 className="mobile-view-desc">This is a We hope to start a long term business relationship with you.</h6>
            </Link>
            <Link>
                {/* //props.img */}
                <img src ={fleece} className="mobile-view-image" />
                {/* //props.desc */}
                <h6 className="mobile-view-desc">This is a We hope to start a long term business relationship with you.</h6>
            </Link>
            <Link>
                {/* //props.img */}
                <img src ={fleece} className="mobile-view-image" />
                {/* //props.desc */}
                <h6 className="mobile-view-desc">This is a We hope to start a long term business relationship with you.</h6>
            </Link>
            

        

            
        </div>
    )
}

export default ShopCollection
