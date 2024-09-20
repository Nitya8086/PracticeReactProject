import React, { useState, useEffect } from "react";

const DocumentUpload = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState("Documents");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadDate, setUploadDate] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    const savedFile = localStorage.getItem("uploadedFile");
    const savedDate = localStorage.getItem("uploadDate");
    const savedUrl = localStorage.getItem("fileUrl");
    const savedFileName = localStorage.getItem("fileName");

    if (savedFile) {
      setUploadedFile(savedFile);
      setUploadDate(savedDate);
      setFileUrl(savedUrl);
      setFileName(savedFileName);
    }
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleTabClick = (tab) => {
    setCurrentTab(tab);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const fileData = fileReader.result;
        setUploadedFile(file.name);
        setUploadDate(new Date().toLocaleDateString());
        setFileUrl(fileData);
        setFileName(file.name);

        localStorage.setItem("uploadedFile", file.name);
        localStorage.setItem("uploadDate", new Date().toLocaleDateString());
        localStorage.setItem("fileUrl", fileData);
        localStorage.setItem("fileName", file.name);
      };
      fileReader.readAsDataURL(file);
    }
  };

  const handleUploadButtonClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleView = () => {
    window.open(fileUrl, "_blank");
  };

  const handleSendLink = () => {
    alert("Send Link clicked!");
  };

  const handleShareLink = () => {
    alert("Share Link clicked!");
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    setUploadedFile(null);
    setUploadDate("");
    setFileUrl("");
    setFileName("");
    localStorage.removeItem("uploadedFile");
    localStorage.removeItem("uploadDate");
    localStorage.removeItem("fileUrl");
    localStorage.removeItem("fileName");
  };

  const handleFileNameChange = (event) => {
    setFileName(event.target.value);
  };

  const handleFileNameSave = () => {
    setIsEditing(false);
    localStorage.setItem("fileName", fileName);
  };

  return (
    <div className="min-h-screen bg-gray-200 p-5">
      <div className="bg-white rounded shadow-lg">
        <div className="flex border-b border-gray-300">
          {["Key Details", "More Info", "OABS", "Appraisals", "Documents"].map(
            (tab) => (
              <div
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`p-4 cursor-pointer ${
                  tab === currentTab
                    ? "bg-black text-white"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              >
                {tab}
              </div>
            )
          )}
        </div>

        <div className="p-5">
          {currentTab !== "Documents" ? (
            <div className="p-4 bg-gray-300 rounded">
              <p>This is some dummy text for the {currentTab} tab.</p>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Documents</h2>
                <button
                  onClick={handleUploadButtonClick}
                  className="bg-white border border-gray-400 rounded-full w-8 h-8 flex items-center justify-center focus:outline-none"
                >
                  +
                </button>
                <input
                  id="fileInput"
                  type="file"
                  className="hidden"
                  onChange={handleFileUpload}
                />
              </div>
              <div
                className="mb-2 text-blue-500 cursor-pointer"
                onClick={handleUploadButtonClick}
              >
                Upload Documents
              </div>
              {uploadedFile ? (
                <div className="bg-gray-300 p-4 rounded">
                  <div className="flex justify-between items-center">
                    {isEditing ? (
                      <input
                        type="text"
                        value={fileName}
                        onChange={handleFileNameChange}
                        onBlur={handleFileNameSave}
                        className="border border-gray-400 p-1"
                      />
                    ) : (
                      <div
                        className="text-red-500 cursor-pointer"
                        onClick={handleView}
                      >
                        {fileName}
                      </div>
                    )}
                    <div className="relative">
                      <button
                        onClick={toggleDropdown}
                        className="focus:outline-none"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 8l6 6 6-6"
                          />
                        </svg>
                      </button>
                      {isDropdownOpen && (
                        <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded">
                          <li
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={handleView}
                          >
                            View
                          </li>
                          <li
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={handleSendLink}
                          >
                            Send Link
                          </li>
                          <li
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={handleShareLink}
                          >
                            Share Link
                          </li>
                          <li
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={handleEdit}
                          >
                            Edit
                          </li>
                          <li
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={handleDelete}
                          >
                            Delete
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>
                  <div className="mt-2 text-gray-500">
                    Uploaded on: {uploadDate}
                  </div>
                </div>
              ) : (
                <div className="mt-2 text-gray-500">No file uploaded yet.</div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocumentUpload;
