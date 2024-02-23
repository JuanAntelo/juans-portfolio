import './App.css'
import Navbar from "./components/Navbar/Navbar"
import AppHeader from './components/AppHeader/AppHeader'
import ListingWrapper from './components/ListingWrapper/ListingWrapper'
import data from "../data/listings.json"
import ChartJSChart from './components/ChartJSChart/ChartJSChart'
import HighChartsChart from './components/HighChartsChart/HighChartsChart'
import D3ScatterChart from './components/D3Chart/D3ScatterChart'

function App() {
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
          <AppHeader headerName='Sample Chart using D3.js | Plotting Monthly Price vs Square Feet of rentals in 02116 zip code'/>
          <D3ScatterChart />
        </div>
        <div className="app-section">
          <AppHeader headerName='Sample Charts using ChartJS | Plotting the amount of rooms to list price for a listing'/>
          <ChartJSChart />
        </div>
        <div className="app-section">
          <AppHeader headerName='Sample Charts using HighCharts | Plotting the price ranges of listings in a given zip code'/>
          <HighChartsChart />
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
