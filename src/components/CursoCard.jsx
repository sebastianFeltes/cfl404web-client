import React from 'react'

function CursoCard({title, href}) {
  return (
    <div className="flex flex-col w-1/6 h-1/6 border-2 rounded-2xl border-customDark-blue  gap-7 py-2 px-4 items-center justify-center">
      <img className='w-[75%] h-[75%] border-2'  src={href} alt="" />
      <p className=' text-15 text-center '>{title}</p>
    </div>
  )
}


export default CursoCard