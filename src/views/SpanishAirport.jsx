import { useState } from 'react';
import menu from '../assets/menuEsp.pdf'
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function SpanishAirport() {
    const [numPages, setNumPages] = useState(null);
    const [pageError, setPageError] = useState(false);
    const [pageWidth, setPageWidth] = useState(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    
        calculatePageWidth();
    
        window.addEventListener('resize', calculatePageWidth);
    };

    const calculatePageWidth = () => {
    
        const width = window.innerWidth;
        const calculatedWidth = width < 768
            ? width * 0.9 
            : width * 0.8;
        setPageWidth(calculatedWidth);
    };

    const onDocumentLoadError = (error) => {
        console.error('Error al cargar el PDF:', error);
        setPageError(true);
    };

    return (
        <div className="w-full min-h-screen bg-neutral-900 overflow-auto">
      <div className="flex justify-center">
        <Document
          file={menu}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          className="flex flex-col items-center"
          loading={
            <div className="text-gray-600 p-4">
              Cargando PDF...
            </div>
          }
        >
          {pageError ? (
            <div className="text-red-500 p-4">Error al cargar el PDF</div>
          ) : (
            Array.from(new Array(numPages), (el, index) => (
              <div 
                key={`page_${index + 1}`} 
                className="w-full flex justify-center"
              >
                <Page
                  pageNumber={index + 1}
                  className="mb-0"
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                  width={pageWidth}
                />
              </div>
            ))
          )}
        </Document>
      </div>
    </div>
    );
};


export default SpanishAirport