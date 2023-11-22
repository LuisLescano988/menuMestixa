import React from 'react'
import { MobilePDFReader } from 'react-read-pdf';


function English() {
  return (
    <div className=' bg-white'>
      <MobilePDFReader url="src\assets\englishMenu.pdf"
        width="full"
        isShowHeader={false}
        isShowFooter={false}
      />
    </div>
  )
}

export default English