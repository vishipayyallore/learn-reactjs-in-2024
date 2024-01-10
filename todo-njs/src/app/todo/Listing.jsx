import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

export default function TodoListing(props) {
  const entries = props.entries;
  const deleteItem = props.deleteItem;
  const handleEdit = props.editItem;

  return (
    <>
      <div>
        <h3 className='text-xl font-semibold'>
          Todo Items will be classified using Azure Open Classification
        </h3>
      </div>
      <table className="mt-3 table table-auto border-collapse border border-slate-600">
        <thead className='bg-slate-100'>
          <tr>
            <th className="ms-3 border border-slate-600 p-1">Items</th>
            <th className="ms-3 border border-slate-600 p-1">Azure Open Classification</th>
            <th className='border border-slate-600 p-1'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {entries.map(({ id, text }) => (
            <tr key={id}>
              <td className="px-2 mt-1 mb-1 ms-2 border border-slate-600">{text}</td>
              <td className='p-2 border border-slate-600'>Good Habit</td>
              <td className='p-2 border border-slate-600'>
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => handleEdit(id)}>
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => deleteItem(id)} >
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
