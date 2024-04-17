import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getQueries } from '../slices/customerSlice'

const MyQueries = () => {
  const dispatch = useDispatch()
  const { queries } = useSelector((state) => state.customer)

  useEffect(() => {
    dispatch(getQueries())
  }, [dispatch])

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
            </tr>
          </thead>
          <tbody>
            {queries?.map((query) => (
              <tr key={query.id}>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyQueries
