import React from 'react'
import FeaturedInfo from '../components/FeaturedInfo'
import Charts from '../components/Charts'
import Widgets from '../components/Widgets'

export default function Home() {
  return (
    <div className='flex-10 flex flex-col gap-5  '>
      <FeaturedInfo/>
      <Charts  />
      <Widgets/>

    </div>
  )
}
