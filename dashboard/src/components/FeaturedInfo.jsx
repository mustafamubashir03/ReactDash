import React from 'react'
import FeaturedInfoCard from './FeaturedInfoCard'
import { Moving,TrendingDown } from "@mui/icons-material"

export default function FeaturedInfo() {
  return (
    <div className='flex flex-col md:flex-row gap-4 p-4 rounded-md bg-white shadow-lg'>
      <FeaturedInfoCard title={"Revenue"} cashValue={"2,577"} icon={<TrendingDown/>} color={"text-red-600"} growth={"-2.9"}/>
      <FeaturedInfoCard title={"Sales"} cashValue={"4,678"} icon={<Moving/>} color={"text-green-600"} growth={"+5.3"}/>
      <FeaturedInfoCard title={"Cost"} cashValue={"2,990"} icon={<Moving/>} color={"text-green-600"} growth={"+2.9"}/>
    </div>
  )
}
