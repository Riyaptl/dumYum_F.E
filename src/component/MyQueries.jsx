import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getQueries, getImages } from '../slices/orderSlice';

const MyQueries = () => {
  const dispatch = useDispatch();
  const { queries, images } = useSelector((state) => state.order);
  const [activeQueryId, setActiveQueryId] = useState(null);
  const queryImages = `http://localhost:8000`;

  useEffect(() => {
    dispatch(getQueries());
  }, [dispatch]);

  const toggleQueryAttachment = async (query) => {
    if (activeQueryId === query._id) {
      setActiveQueryId(null);
    } else {
      await dispatch(getImages(query._id));
      setActiveQueryId(query._id);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden h-full p-2">
      <h2 className="text-xl font-semibold mb-4">My Queries</h2>
      <div className="grid grid-cols-1 gap-6 ">
        {queries?.map((query) => (
          <div key={query._id} className="rounded shadow-md">
            <div className="flex flex-col md:flex-row md:justify-between mb-4 p-4">
              <div className="mb-4 md:mb-0">
                <span className="block font-semibold text-gray-600">Title:</span>
                <span className="text-gray-800">{query.title}</span>
              </div>
              <div className="mb-4 md:mb-0">
                <span className="block font-semibold text-gray-600">Description:</span>
                <span className="text-gray-800">{query.description || '-'}</span>
              </div>
              <div className="mb-4 md:mb-0">
                <span className="block font-semibold text-gray-600">Raised At:</span>
                <span className="text-gray-800">{new Date(query.createdAt).toLocaleDateString()}</span>
              </div>
              <div className="mb-4 md:mb-0">
                <span className="block font-semibold text-gray-600">Status:</span>
                <span className="text-gray-800">{query.queryStatus}</span>
              </div>
              <div className="mb-4 md:mb-0">
                <span className="block font-semibold text-gray-600">Closed At:</span>
                <span className="text-gray-800">
                  {query.closedAt
                    ? new Date(query.closedAt).toLocaleDateString()
                    : '-'}
                </span>
              </div>
              <button
                className="border border-black text-black font-semibold px-4 py-2 rounded hover:bg-black hover:text-white transition-colors duration-300 focus:outline-none"
                onClick={() => toggleQueryAttachment(query)}
              >
                View Attachments
              </button>
            </div>
            {activeQueryId === query._id && (
              <div className="mt-6 p-4 bg-gray-50 rounded-lg shadow-inner">
                <h3 className="text-lg font-semibold mb-4 text-gray-700">Attachments</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {images?.map((attachment, index) => (
                    <div key={index} className="w-full">
                      <img
                        src={`${queryImages}${attachment}`}
                        alt={`Attachment ${index}`}
                        className="w-full h-32 object-cover rounded-lg shadow"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyQueries;
