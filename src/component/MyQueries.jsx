import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getQueries } from '../slices/customerSlice';

const MyQueries = () => {
  const dispatch = useDispatch();
  const { queries } = useSelector((state) => state.customer);

  useEffect(() => {
    dispatch(getQueries());
  }, [dispatch]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Queries</h2>
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
              <td className="border border-gray-400 px-4 py-2">{query.title}</td>
              <td className="border border-gray-400 px-4 py-2">{query.description || '-'}</td>
              <td className="border border-gray-400 px-4 py-2">{new Date(query.createdAt).toLocaleDateString()}</td>
              <td className="border border-gray-400 px-4 py-2">{query.queryStatus}</td>
              <td className="border border-gray-400 px-4 py-2">{query.closedAt ? new Date(query.closedAt).toLocaleDateString() : '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyQueries;
