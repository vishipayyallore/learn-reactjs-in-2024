import React from 'react'
import TodoListing from './Listing'
import AddTodoForm from './AddTodoForm'

export default function TodoHome() {
  return (
    <div>
      <div className='shadow-sm p-2 bg-[#F8F4EC] mb-2 rounded-sm border-2 border-[#f7e1b5]'>
        <AddTodoForm />
      </div>

      <div className='shadow-sm p-2 bg-[#86899d] mb-2 rounded-sm border-2 border-[#3446a8]'>
        <TodoListing />
      </div>
    </div>
  )
}
