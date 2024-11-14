import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

const QRGenerator = () => {
  const url = "https://mestixa.vercel.app/airport";
  
  const downloadQR = () => {
    const svg = document.getElementById("qr-code");
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = "qr-code.png";
      downloadLink.href = pngFile;
      downloadLink.click();
    };
    
    img.src = "data:image/svg+xml;base64," + btoa(svgData);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 p-6 bg-zinc-300 h-screen w-screen rounded-lg shadow-md">
      <QRCodeSVG
        id="qr-code"
        value={url}
        size={256}
        level="H"
        includeMargin={true}
        className="border border-gray-200 p-2 rounded"
      />
      <button
        onClick={downloadQR}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Descargar QR
      </button>
    </div>
  );
};

export default QRGenerator;