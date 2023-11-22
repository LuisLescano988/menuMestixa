import React from 'react'
import { MobilePDFReader } from 'react-read-pdf';


function Spanish() {


    return (
        <div className=' bg-white'>
             <MobilePDFReader url="https://github.com/LuisLescano988/menuMestixa/blob/master/src/assets/menuEspanol.pdf/"
             width="full"
             isShowFooter={false}
             />
            {/* <iframe src='src\assets\menuEspanol.pdf#view=FitH'
            className=' absolute w-full h-screen m-0'
            /> */}
        </div>
    )
}

export default Spanish