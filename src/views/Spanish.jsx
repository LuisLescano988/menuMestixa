import React from 'react'
import { MobilePDFReader } from 'react-read-pdf';
import pdf from '../assets/menuEspanol.pdf'


function Spanish() {

    return (
        <div className=' bg-white'>
            <MobilePDFReader url={pdf}
                width="full"
                isShowHeader={false}
                isShowFooter={false}
            />
            {/* <iframe src='src\assets\menuEspanol.pdf#view=FitH'
            className=' absolute w-full h-screen'
            /> */}
        </div>
    )
}

export default Spanish