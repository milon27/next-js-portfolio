import { useState, useEffect } from 'react'
import Footer from "../components/Footer";
import Header from "../components/Header";
import Body from './../components/Body';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume() {
    const [scale, setscale] = useState(0.3)
    useEffect(() => {
        if (window.innerWidth > 1000) {
            setscale(0.4)
        } else if (window.innerWidth > 900) {
            setscale(0.32)
        } else {
            setscale(0.28)
        }
    }, [])

    return (
        <div className="page">
            <Header title="Resume" />
            <div className="page_head" >
                <h1>Resume</h1>
                <a style={{ padding: " 10px", border: " 1px solid" }} href="resume.pdf" download="resume.pdf"> Download Here </a>
            </div>
            <Body>
                {/* <iframe src="/resume.pdf" className="img-w100p" style={{ height: "100vh" }}></iframe> */}
                <div style={{ width: "100%", marginTop: "50px", marginBottom: "50px" }} className="color-white">
                    <img src="/resume.svg" className="onlyMobile img-w100p" style={{ background: "#fff" }} />
                    <Document
                        className="onlyDesk"
                        file="resume.pdf"
                    >
                        <Page pageNumber={1} scale={scale} />
                    </Document>
                </div>
            </Body>
            <Footer />
        </div>
    )
}
