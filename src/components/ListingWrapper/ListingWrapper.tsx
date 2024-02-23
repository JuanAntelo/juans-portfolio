import './ListingWrapper.css'
import ListingCard from '../ListingCard/ListingCard'
import Listing from "../../types/Listing"
import React from 'react'

interface ListingWrapperProps {
    listings: Listing[]
}

function ListingWrapper({ listings }: ListingWrapperProps ) {
    // filter out listings with no description and sort most expensive -> least expensive
    const filteredAndSortedListings = listings.filter((listing) => { 
        return listing.REMARKS.length > 1
    }).sort((a, b) => {
        return parseInt(b.LIST_PRICE) - parseInt(a.LIST_PRICE);
    })

    return (
        <div className="container-fluid">
            <main>
                <div id="list-start" className="row gy-5">
                    {
                        filteredAndSortedListings.map((listing) => {
                            return <ListingCard key={listing.LIST_NO} listing={listing} />
                        })
                    }
                </div>
            </main>
    </div>
    )
}

export default ListingWrapper;