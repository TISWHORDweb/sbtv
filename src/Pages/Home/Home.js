import React, { useContext } from 'react'
import Navbar from '../../Components/Navbar'
import Features from './Features'
import Experience from './Experience'
import Discover from './Discover'
import Customers from '../../Components/Customers'
import ContactCard from '../../Components/ContactCard'
import Footer from '../../Components/Footer'
import Video from '../../Assets/videos/video1.mp4'
import ReactPlayer from 'react-player';
import Live from './Live'
import Loader from '../../Components/Loader'
import { MyContext } from '../../context/Context'


function Home() {
  const { videos } = useContext(MyContext);
  return (
    <div>
      {videos ?
        <>
          <div className="">
            <div className="video-background">
              <ReactPlayer
                url={Video}
                playing
                loop
                muted
                width="100%"
                height="100%"
              />
            </div>
          </div>
          <Navbar color="white" />
          <Live />
          <Features />
          <Experience />
          <Discover />
          <Customers />
          <ContactCard />
          <Footer />
        </> :
        <Loader />
      }
    </div>
  )
}

export default Home