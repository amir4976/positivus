import React from 'react'
import TeamCard from '@/components/modules/TeamCard/TeamCard'
function Team() {
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-5' >
      <TeamCard/>
      <TeamCard/>
      <TeamCard/>
    </div>
  )
}

export default Team
