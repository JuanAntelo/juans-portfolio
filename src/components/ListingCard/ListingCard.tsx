import { useState } from 'react'
import Listing from '../../types/Listing'
import './ListingCard.css'
import HeartIcon from "../../assets/heart.svg"
import HeartIconFilled from "../../assets/heartFilled.svg"


interface ListingCardProps {
    listing: Listing
}

function ListingCard({ listing } : ListingCardProps) {

    const [listingData, setListingData] = useState({
        isEnabled: false,
        count: Math.floor(Math.random() * 50),
        expandedDescription: false
    });

    const incrementLikeButton = () => {
        listingData.isEnabled ? 
            setListingData({ ...listingData, isEnabled: !listingData.isEnabled, count: listingData.count - 1}) :  
            setListingData({ ...listingData, isEnabled: !listingData.isEnabled, count: listingData.count + 1})  
    }

    const expandDescriptionButton = () => {
            setListingData({ ...listingData, expandedDescription: !listingData.expandedDescription })  
    }

    const heartSvg = listingData.isEnabled ? <img src={HeartIconFilled}/> : <img src={HeartIcon} />

    return (
        <div className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
            <div className="card">
                <div className="card__header">
                    <div className="name">
                        <span>{listing.STREET_NO + " " + listing.STREET_NAME + " "}</span> 
                        <span className="price">${parseInt(listing.LIST_PRICE).toLocaleString()} / m</span>
                        <a onClick={incrementLikeButton} className='like-btn prevent-highlight'>
                            {heartSvg} &nbsp;
                            {listingData.count} people like this
                        </a>
                    </div>
                </div>
                <div className="card__body">
                    <img src={"https://h3n.mlspin.com/photo/photo.aspx?nopadding=1&h=768&w=1024&mls=" + listing.LIST_NO + "&o=&n=0"} alt=""/>
                </div>
                <div className="card__footer">
                    <div className={ listingData.expandedDescription ? "" : "short-description"}>
                        {listing.REMARKS}
                    </div>
                    <div className='read-more-btn-wrapper'>
                        <a className="read-more-btn prevent-highlight" onClick={expandDescriptionButton}>
                            {listingData.expandedDescription ? "View Less" : "Read More"}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListingCard