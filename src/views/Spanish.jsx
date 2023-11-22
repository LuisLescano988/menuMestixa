import React from 'react'
// import { MobilePDFReader } from 'react-read-pdf';
import { Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core'
import pdf from '../assets/menuEspanol.pdf'


function Spanish() {

    return (
        <div className=' bg-black'>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer 
                fileUrl={pdf}
                defaultScale={SpecialZoomLevel.PageFit}
                />
            </Worker>
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