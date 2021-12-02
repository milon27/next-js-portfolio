import Footer from "../components/Footer";
import Header from "../components/Header";
import Body from './../components/Body';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume() {


    return (
        <div className="page">
            <Header title="Resume" />
            <div className="page_head" >
                <h1>Resume</h1>
                <a style={{ padding: " 10px", border: " 1px solid" }} href="resume.pdf" download="resume.pdf"> Download Here </a>
            </div>

            <Body>

                <div style={{ width: "100%", marginTop: "50px", marginBottom: "50px" }} className="color-white">
                    <Document
                        file="resume.pdf"
                    >
                        <Page pageNumber={1} scale={1} />
                    </Document>
                </div>
            </Body>
            <Footer />
        </div>
    )
}
