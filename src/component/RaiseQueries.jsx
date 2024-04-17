import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { raiseQuery } from '../slices/customerSlice';

const RaiseQueries = () => {
  const dispatch = useDispatch();
  const [raiseQueryFormData, setRaiseQueryFormData] = useState('');
  const [raiseQueryAttachments, setRaiseQueryAttachments] = useState([]);
  const [isRaiseQueryOverlayVisible, setIsRaiseQueryOverlayVisible] = useState(false);

  const handleRaiseQueryAttachmentsChange = (e) => {
    const files = e.target.files;
    const attachmentsArray = [];
    for (let i = 0; i < files.length; i++) {
      attachmentsArray.push(files[i]);
    }
    setRaiseQueryAttachments(attachmentsArray);
  };

  const handleRaiseQueryChange = (e) => {
    setRaiseQueryFormData(e.target.value);
  };

  const raiseQuery = () => {
    console.log('Query raised:', raiseQueryFormData);
    console.log('Attachments:', raiseQueryAttachments);
    setRaiseQueryFormData('');
    setRaiseQueryAttachments([]);
    setIsRaiseQueryOverlayVisible(false);
  };

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden h-screen p-4">
      <h2 className="text-2xl font-semibold mb-4">Raise Queries</h2>
      <textarea
        className="w-full h-32 border border-gray-300 rounded-md px-3 py-2 focus:outline-none mb-4"
        placeholder="Write your query here..."
        value={raiseQueryFormData}
        onChange={handleRaiseQueryChange}
      ></textarea>
      <label className="block mb-2 font-semibold">Attachments:</label>
      <div className="flex items-center justify-between mb-4">
        <label className="flex items-center justify-center w-48 h-10 border border-black text-black px-4 py-2 rounded hover:bg-black hover:text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <span>Choose file</span>
          <input
            type="file"
            className="hidden"
            multiple
            onChange={handleRaiseQueryAttachmentsChange}
          />
        </label>
        {raiseQueryAttachments.length > 0 && (
          <div className="ml-4">
            {raiseQueryAttachments.map((file, index) => (
              <span key={index} className="block mb-1">
                {file.name}
              </span>
            ))}
          </div>
        )}
      </div>
      <button
        className="border border-black text-black px-4 py-2 rounded hover:bg-black hover:text-white focus:outline-none transition duration-300 ease-in-out ml-auto"
        onClick={raiseQuery}
      >
        Raise Query
      </button>
    </div>
  );
};

export default RaiseQueries;
