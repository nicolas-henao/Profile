import React from 'react'
import { Carousel } from '../../Layouts/carousel/Carousel';
import { Category } from '../../Layouts/Category/Category.jsx';
import { Discover } from '../../Layouts/Discover/Discover';
import { ForYou } from '../../Layouts/ForYou/ForYou';
import { Offers } from '../../Layouts/Offers/Offers';
import { Pagination } from '../../Layouts/Pagination/Pagination';

import { Stores } from '../../Layouts/Stores/Stores';
import './home.css'

export const Home = () => {
  return (
    <>
    <div className="home">
    <Carousel />
    <Stores />
    <Offers/>
    <Discover/>
    <Category/>
    <ForYou />
    <Pagination/>

    </div>
    </>
  )
}


