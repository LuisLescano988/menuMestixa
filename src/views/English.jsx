import React from 'react'
// import { Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core'
// import { Document, Page } from 'react-pdf';
// import pdf from '../assets/englishMenu.pdf'
import first from '../assets/eng1.jpg';
import second from '../assets/eng2.jpg';


function English() {
  return (
    <div className=' bg-black'>
      <img src={first} alt="" />
      <img src={second} alt="" />
      {/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer
          fileUrl={pdf}
          defaultScale={SpecialZoomLevel.PageFit}
        />
      </Worker> */}
    </div>
  )
}

export default English