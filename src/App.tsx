import './App.css'
import Navbar from "./components/Navbar/Navbar"
import AppHeader from './components/AppHeader/AppHeader'
import ListingWrapper from './components/ListingWrapper/ListingWrapper'
import data from "../data/listings.json";
import ChartJSChart from './components/ChartJSChart/ChartJSChart'
import HighChartsChart from './components/HighChartsChart/HighChartsChart'
import D3ScatterChart from './components/D3Chart/D3ScatterChart'
import Listing from './types/Listing';
import React from 'react';

function App() {

  let maxListPrice = 0;
  let maxRooms = 0;
  let maxBedRooms = 0;

  let listingsHighestRangeCount: number = 0; // more than $8,000
  let listingsUpperMiddleRangeCount: number = 0; // $5,000 - $8,000
  let listingsLowerMiddleRangeCount: number = 0; // $3,000 - $5,000
  let listingsLowestRangeCount: number = 0;      // < $3,000

  for(let i = 0; i < data.listings.length; i++) {
      let listing: Listing = data.listings[i]

      // First, convert these metrics into numerics (is provided as strings from the data set)
      listing.LIST_PRICE_AS_NUM = parseInt(listing.LIST_PRICE)
      listing.NO_ROOMS_AS_NUM = parseInt(listing.NO_ROOMS)
      listing.NO_BEDROOMS_AS_NUM = parseInt(listing.NO_BEDROOMS)
    
      let listingPrice = listing.LIST_PRICE_AS_NUM
      let roomCount = listing.NO_ROOMS_AS_NUM
      let bedRoomCount = listing.NO_BEDROOMS_AS_NUM

      if (listingPrice > maxListPrice) {
          maxListPrice = listingPrice
      }
      if (roomCount > maxRooms) {
          maxRooms = roomCount
      }
      if (bedRoomCount > maxBedRooms) {
        maxBedRooms = bedRoomCount
      }

      if (listingPrice > 8000) {
        listingsHighestRangeCount++;
      } else if (listingPrice <= 8000 && listingPrice > 5000) {
        listingsUpperMiddleRangeCount++;
      } else if (listingPrice <= 5000 && listingPrice > 3000 ) {
        listingsLowerMiddleRangeCount++;
      } else {
        listingsLowestRangeCount++;
      }

      // Modify the value in the array so that the properties we added are saved
      data.listings[i] = listing
  }

  return (
    <>
      <div>
        <Navbar />
        <div className="app-section">
          <AppHeader headerName='Sample Real Estate Listing Widget for rentals in 02116 zip code'/>
          {/* Its just an example so keep the listings limited to a small amount (9 listings) */}
          <ListingWrapper listings={data.listings.slice(0, 10)}/> 
        </div>
        <div className="app-section">
          <AppHeader headerName='Sample Chart using D3.js | Plotting Number of Rooms vs Monthly Price of rentals in 02116 zip code'/>
          <D3ScatterChart listings={data.listings} maxRoomCount={maxRooms} maxListPrice={maxListPrice}/>
        </div>
        <div className="app-section">
          <AppHeader headerName='Sample Charts using ChartJS | Plotting the Number of Bedrooms vs Monthly Price of rentals in 02116 zip code'/>
          <ChartJSChart listings={data.listings} maxBedRooms={maxBedRooms} maxListPrice={maxListPrice} />
        </div>
        <div className="app-section">
          <AppHeader headerName='Sample Charts using HighCharts | Plotting the price ranges of rental listings in 02116'/>
          <HighChartsChart listingsHighestRangeCount={listingsHighestRangeCount} listingsUpperMiddleRangeCount={listingsUpperMiddleRangeCount} listingsLowerMiddleRangeCount={listingsLowerMiddleRangeCount} listingsLowestRangeCount={listingsLowestRangeCount} />
        </div>
        <br />
        <div className='text-center'>
          <h2>More Content coming soon</h2>
        </div>
      </div>
    </>
  )
}

export default App
