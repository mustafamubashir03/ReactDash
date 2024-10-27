import React from 'react'

export default function FeaturedInfoCard({title,cashValue,icon,growth,color}) {
  return (
    <div className='flex-col w-full bg-white border-2 border-slate-200 p-4 rounded-lg text-center items-center justify-center'>
      <h3 className='font-semibold text-slate-700 mb-3'>{title}</h3>
      <div className='flex items-center justify-center gap-3'>
      <p className='text-3xl font-bold text-slate-700'><span className='text-base'>$</span>{cashValue}</p>
      <p className={`font-medium ${color}`}>{icon}{growth}</p></div>
      <p className='text-sm text-slate-400 mt-1'>Compared to last month</p>
    </div>
  )
}
