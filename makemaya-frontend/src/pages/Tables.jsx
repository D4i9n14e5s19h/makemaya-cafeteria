import React, { useState } from 'react'
import BottomNav from '../components/shared/BottomNav'
import BackButton from '../components/shared/BackButton'
import TableCard from '../components/Tables/TableCard'
import { tables } from '../constants'


const Tables = () => {

    const [status, setStatus] = useState('all');

  return (
    <section className="bg-[#1f1f1f] h-screen overflow-hidden flex flex-col">
     <div className='flex items-center justify-between px-10 py-4'>
             <div className="flex items-center gap-4">
               <BackButton />
             <h1 className='text-[#f5f5f5] text-2xl font-bold tracking-wider'>Tables</h1>
             </div>

              <div className='flex items-center justify-around gap-4'>
          <button onClick={() => setStatus("all")} className= {`text-[#ababab] text-lg ${status === "all" && "bg-[#383838] rounded-lg px-5 py-2"} rounded-lg px-5 py-2 font-semibold`}>All</button>
          <button onClick={() => setStatus("booked")} className= {`text-[#ababab] text-lg ${status === "booked" && "bg-[#383838] rounded-lg px-5 py-2"} rounded-lg px-5 py-2 font-semibold`}>Booked</button>
          
        </div>
 </div>

 <div className="flex-1 overflow-y-auto scrollbar-hide px-16 py-4 pb-28">  
    <div className="flex flex-wrap gap-20">
              {
                tables.map((table) => {
                return (
                    <TableCard key={table.id} name={table.name} status={table.status} initials={table.initial} />
                )
                })
              }
          </div>  
 </div>
           
            

        <BottomNav />
    </section>
  )
}

export default Tables