'use client';
// src/app/resume/page.js
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

export default function Resume() {
  const resumeFile = '/resume.pdf'; // Place your PDF in the public folder

  const handleDownload = () => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = resumeFile;
    link.download = 'Obidur_Rahman.pdf'; // Customize the download filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white min-h-screen">
      <main className="max-w-6xl mx-auto px-4 py-8">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-2">
              Resume
            </h1>
            <p className="text-gray-600">
              Download or view my latest resume
            </p>
          </div>
          
          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            <ArrowDownTrayIcon className="w-5 h-5" />
            Download PDF
          </button>
        </div>

        {/* PDF Viewer Container */}
        <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
          <div className="bg-white rounded-lg shadow-inner overflow-hidden">
            
            {/* PDF Embed */}
            <div className="w-full h-[800px] sm:h-[900px] lg:h-[1000px]">
              <iframe
                src={`${resumeFile}#toolbar=1&navpanes=0&scrollbar=1&page=1&view=FitH`}
                className="w-full h-full border-0"
                title="Resume PDF"
                loading="lazy"
              >
                {/* Fallback content for browsers that don't support iframe */}
                <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                  <div className="bg-gray-100 rounded-lg p-8 max-w-md">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      PDF Viewer Not Supported
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Your browser doesn't support PDF viewing. Please download the file to view it.
                    </p>
                    <button
                      onClick={handleDownload}
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200"
                    >
                      <ArrowDownTrayIcon className="w-4 h-4" />
                      Download Resume
                    </button>
                  </div>
                </div>
              </iframe>
            </div>
            
          </div>
        </div>

        {/* Alternative Download Section */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Having trouble viewing the PDF? You can also download it directly.
          </p>
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
          >
            <ArrowDownTrayIcon className="w-4 h-4" />
            Download Resume PDF
          </button>
        </div>

      </main>
    </div>
  );
}