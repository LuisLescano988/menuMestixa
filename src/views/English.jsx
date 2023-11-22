import React from 'react'
// import { MobilePDFReader } from 'react-read-pdf';
import { Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core'
import pdf from '../assets/englishMenu.pdf'


function English() {
  return (
    <div className=' bg-black'>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer
          fileUrl={pdf}
          defaultScale={SpecialZoomLevel.PageFit}
        />
      </Worker>
      {/* <MobilePDFReader url={pdf}
        scale={auto}   
        isShowHeader={false}
        isShowFooter={false}
      /> */}
    </div>
  )
}

export default English