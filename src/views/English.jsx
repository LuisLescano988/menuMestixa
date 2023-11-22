import React from 'react'
import { MobilePDFReader } from 'react-read-pdf';
import pdf from '../assets/englishMenu.pdf'


function English() {
  return (
    <div className=' bg-white'>
      <MobilePDFReader url={pdf}
        width="full"
        isShowHeader={false}
        isShowFooter={false}
      />
    </div>
  )
}

export default English