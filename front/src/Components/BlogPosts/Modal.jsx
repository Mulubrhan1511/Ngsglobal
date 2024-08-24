import React from 'react';

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white p-6 rounded-lg max-w-4xl w-full relative" onClick={(e) => e.stopPropagation()}>
        <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl" onClick={onClose}>&times;</button>
        <img src={content.image} alt={content.title} className="w-full h-64 object-cover rounded-lg mb-4" />
        <h2 className="text-3xl font-semibold mb-2">{content.title}</h2>
        <p className="text-gray-700 text-lg">{content.description}</p>
      </div>
    </div>
  );
};

export default Modal;
