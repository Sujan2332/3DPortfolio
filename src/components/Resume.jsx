import React from 'react';
import { resume } from '../assets'; // Ensure correct path
import { SectionWrapper } from "../hoc";


const Resume = () => {
  const resumeUrl = resume; // Ensure the file is correctly referenced

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Sai_Sujan_S_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center text-center mt-6 px-4">
      <h2 className="text-2xl font-bold mb-4">My Resume</h2>
      
      {/* Display Resume without Scrollbars */}
      <div className="w-full md:w-4/5 lg:w-3/5 flex justify-center">
        <iframe
          src={`${resumeUrl}#zoom=Fit&view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
          className="w-full h-[63vh] md:h-[108vh] object-cover border-none flex items-center justify-center" // Adjust height for responsiveness
          title="Resume"
        ></iframe>
      </div>

      {/* Download Button */}
      <button 
        onClick={handleDownload} 
        className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-all flex items-center gap-2 cursor-pointer mt-4 "
      >
        Download Resume 📄
      </button>
    </div>
  );
};

export default SectionWrapper(Resume, "resume");

