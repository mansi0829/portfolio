import React, { useState, useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
    // function ResumeNew() {
    const resumeLink =
        "https://raw.githubusercontent.com/mansi0829/portfolio/main/public/pdf/Mansi_Gundre_Resume.pdf";

    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);
    // }
    return (
        <div className='pt-16 min-h-screen'>
            <Document
                file={resumeLink}
                className="flex justify-center">
                <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
        </div>
    )
}

export default Resume