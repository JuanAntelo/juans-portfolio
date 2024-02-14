import './App.css'
import Navbar from "./components/Navbar/Navbar"
import AppHeader from './components/AppHeader/AppHeader'
import ListingWrapper from './components/ListingWrapper/ListingWrapper'
import data from "../data/listings.json"

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className="app-section">
          <AppHeader headerName='Sample Real Estate Listing Widget'/>
          <ListingWrapper listings={data.listings}/>
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
