import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getQueries, getImages } from '../slices/customerSlice'

const MyQueries = () => {
  const dispatch = useDispatch()
  const { queries, images } = useSelector((state) => state.customer)
  const [isQueryAttachmentVisible, setIsQueryAttachmentVisible] = useState(false);
  const queryImages = `http://localhost:8000`

  useEffect(() => {
    dispatch(getQueries())
  }, [dispatch])

  const toggleQueryAttachment = async (query) => {
    await dispatch(getImages(query._id))
    setIsQueryAttachmentVisible(true);
  }; 

  const closeQueryAttachment = () => {
    setIsQueryAttachmentVisible(false);
  }
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden h-full px-1">
      <h2 className="text-xl font-semibold mb-4">My Queries</h2>
      <div className="overflow-x-auto">
        <table className="border-collapse w-full">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">Title</th>
              <th className="border border-gray-400 px-4 py-2">Description</th>
              <th className="border border-gray-400 px-4 py-2">Raised At</th>
              <th className="border border-gray-400 px-4 py-2">Status</th>
              <th className="border border-gray-400 px-4 py-2">Closed At</th>
              <th className="border border-gray-400 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {queries?.map((query) => (
              <tr key={query._id}>
                <td className="border border-gray-400 px-4 py-2">
                  {query.title}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {query.description || '-'}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {new Date(query.createdAt).toLocaleDateString()}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {query.queryStatus}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {query.closedAt
                    ? new Date(query.closedAt).toLocaleDateString()
                    : '-'}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                    <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 focus:outline-none" onClick={() => toggleQueryAttachment(query)}>View Attachments</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {isQueryAttachmentVisible && (
              <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-8 rounded shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">Attachments</h3>
                    <ul>
                        {images?.map((attachment, index) => (
                          <li key={index} className="mb-2">
                            <img src={queryImages+attachment} alt={`Attachment ${index}`} className="w-32 h-32 object-cover" />
                          </li>
                        ))}
                    </ul>
                    <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none" onClick={closeQueryAttachment}>Close</button>
                  </div>
                </div>
                )}
      </div>
    </div>
  )
}

export default MyQueries
