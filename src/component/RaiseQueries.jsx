import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// import { raiseQuery } from '../slices/customerSlice';

const RaiseQueries = () => {
  const dispatch = useDispatch()
  const [raiseQueryFormData, setRaiseQueryFormData] = useState('')
  const handleRaiseQueryAttachmentsChange = (e) => {
    const files = e.target.files
    const attachmentsArray = []
    for (let i = 0; i < files.length; i++) {
      attachmentsArray.push(files[i])
    }
    setRaiseQueryAttachments(attachmentsArray)
  }
  const handleRaiseQueryChange = (e) => {
    setRaiseQueryFormData(e.target.value)
  }
  const raiseQuery = () => {
    console.log('Query raised:', raiseQueryFormData)
    console.log('Attachments:', raiseQueryAttachments)
    setRaiseQueryFormData('')
    setRaiseQueryAttachments([])
    setIsRaiseQueryOverlayVisible(false)
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Raise Queries</h2>
      <textarea
        className="w-full h-32 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 mb-4"
        placeholder="Write your query here..."
        value={raiseQueryFormData}
        onChange={handleRaiseQueryChange}
      ></textarea>
      <input
        type="file"
        multiple
        onChange={handleRaiseQueryAttachmentsChange}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
        onClick={raiseQuery}
      >
        Raise Query
      </button>
    </div>
  )
}

export default RaiseQueries
