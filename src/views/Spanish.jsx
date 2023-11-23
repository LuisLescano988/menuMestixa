import React from 'react'
// import { MobilePDFReader } from 'react-read-pdf';
// import { Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core'
// import pdf from '../assets/menuEspanol.pdf'
import first from '../assets/1-10.jpg';
import second from '../assets/11-18.jpg';


function Spanish() {
    const pageRange = { start: 1, end: 17 };

    return (
        <div className=' bg-black'>
            <img src={first} alt="" />
            <img src={second} alt="" />
            {/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                <Viewer 
                fileUrl={pdf}
                defaultScale={SpecialZoomLevel.PageFit}
                pageNumbers={Array.from({ length: pageRange.end - pageRange.start + 1 }, (_, i) => i + pageRange.start)}
                />
            </Worker> */}
            {/* <MobilePDFReader url={pdf}
                style="box-shadow:none; left:0; padding:0; margin:0;"
                isShowHeader={false}
                isShowFooter={false}
            /> */}
            {/* <iframe src='src\assets\menuEspanol.pdf#view=FitH'
            className=' absolute w-full h-screen'
            /> */}
        </div>
    )
}

export default Spanish