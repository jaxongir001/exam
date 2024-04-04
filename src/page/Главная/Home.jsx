import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import Cartegory from '../../components/Cartegory/Cartegory'
import MultiCarousel from '../../components/Carousel/MultiCarousel'
import Carts from '../../components/Carts/Carts'

import Buys from '../../components/Buy/Buy'
import Client from '../../components/Client/Client'
import Brend from '../../components/Brend/Brend'
import Location from '../../components/Location/Location'
import Pochta from '../../components/Pochta/Pochta'
const Home = () => {
  return (
    <div className='max-w-[1550px]  mt-[30px]'>
        <div className='w-[90%] h-[400px]  mx-auto'>
            <Carousel/>
            <Cartegory/>
            <MultiCarousel/>
            <Carts/>
            <Buys/>
            <Client/>
            <Brend/>
            <Location/>
            <Pochta/>
            </div>
        
    </div>
  )
}

export default Home;