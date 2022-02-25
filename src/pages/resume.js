import { useState, useEffect } from 'react'
import Footer from "../components/Footer";
import Header from "../components/Header";
import Body from './../components/Body';
import { Document, Page, pdfjs } from 'react-pdf';
import CF from '../utils/contentful/CF';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume({ url }) {
    const [width, setWidth] = useState(() => {
        if (typeof window !== "undefined") {
            return window.innerWidth
        } else {
            return 0
        }
    })

    useEffect(() => {
        const resizeListener = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', resizeListener)
        return () => {
            window.removeEventListener('resize', resizeListener)
        }
    }, [])


    return (
        <div className="page">
            <Header title="Resume" />
            <div className="page_head" >
                <h1>Resume</h1>
                <a href={url} download={url} className='btn-outline'>Download Here</a>
            </div>

            <Body>

                <div style={{ width: "100%", marginTop: "50px", marginBottom: "50px" }} className="color-white">

                    <Document
                        file={url}
                        className="onlyMobile"
                    >
                        <Page pageNumber={1} width={width - 60} scale={1} fixed={true} />
                    </Document>

                    <Document
                        className="onlyDesk"
                        file={url}
                    >
                        <Page pageNumber={1} scale={1} />
                    </Document>
                </div>
            </Body>
            <Footer />
        </div>
    )
}


export const getStaticProps = async (context) => {
    try {
        const res = await CF.getAsset('5wavMRSXbvFscEtyxegs5h')

        const url = res.fields.file.url

        return {
            props: { url: 'https:' + url, isFound: true },
            revalidate: 5//in second
        }
    } catch (e) {
        console.log("error-> ", e);
        return {
            props: {
                url: 'https://assets.ctfassets.net/gc0s4jth6z0o/5wavMRSXbvFscEtyxegs5h/24f46bb5c8d053a1af1a351ee52f7d5e/resume.pdf'
                , isFound: false
            }
        }
    }

}