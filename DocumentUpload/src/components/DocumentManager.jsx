// src/DocumentManager.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import './DocumentManager.css';

const DocumentManager = () => {
  const [documents, setDocuments] = useState([
    { id: 1, name: 'Document.pdf', date: '14 Feb 2020', url: '/path/to/initial/document.pdf' },
  ]);
  const [showOptions, setShowOptions] = useState(null);
  const [viewDocument, setViewDocument] = useState(null);

  const handleOptionClick = (option, doc) => {
    switch (option) {
      case 'view':
        setViewDocument(doc);
        break;
      case 'sendLink':
        alert(`Sending link for document ID: ${doc.id}`);
        break;
      case 'getShareLink':
        alert(`Getting share link for document ID: ${doc.id}`);
        break;
      case 'rename':
        const newName = prompt('Enter new name:', '');
        if (newName) {
          setDocuments(docs =>
            docs.map(d => (d.id === doc.id ? { ...d, name: newName } : d))
          );
        }
        break;
      case 'delete':
        setDocuments(docs => docs.filter(d => d.id !== doc.id));
        break;
      default:
        break;
    }
  };

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newDocument = {
        id: documents.length + 1,
        name: file.name,
        date: new Date().toLocaleDateString(),
        url: URL.createObjectURL(file), 
      };
      setDocuments([...documents, newDocument]);
    }
  };

  return (
    <div className="document-manager">
      <h1>Documents</h1>
      <label htmlFor="file-upload" className="upload-button">
        <FontAwesomeIcon icon={faUpload} /> 
      </label>
      <input id="file-upload" type="file" onChange={handleUpload} style={{ display: 'none' }} />
      <table>
        <thead>
          <tr>
            <th>Filename</th>
            <th>Date Uploaded</th>
          </tr>
        </thead>
        <tbody>
          {documents.map(doc => (
            <tr key={doc.id}>
              <td>
                {doc.name}{' '}
                <button onClick={() => setShowOptions(showOptions !== doc.id ? doc.id : null)}>
                  ▼
                </button>
                {showOptions === doc.id && (
                  <ul className="options">
                    <li onClick={() => handleOptionClick('view', doc)}>View</li>
                    <li onClick={() => handleOptionClick('sendLink', doc)}>Send Link</li>
                    <li onClick={() => handleOptionClick('getShareLink', doc)}>Get Share Link</li>
                    <li onClick={() => handleOptionClick('rename', doc)}>Rename</li>
                    <li onClick={() => handleOptionClick('delete', doc)}>Delete</li>
                  </ul>
                )}
              </td>
              <td>{doc.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {viewDocument && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setViewDocument(null)}>&times;</span>
            <iframe src={viewDocument.url} width="100%" height="600px" />
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentManager;
