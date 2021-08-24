import { useRouter } from 'next/router'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Body from '../../components/Body';
import ErrorPage from 'next/error'
import SinglePort from '../../components/portfolio/SinglePort';
import CF from './../../utils/contentful/CF';

export default function PortDetails({ port, isFound }) {//
    if (!isFound) {
        return <ErrorPage statusCode={404} />
    }
    const router = useRouter()
    if (router.isFallback) {
        return <>loading....</>
    }

    return (
        <div className="page">
            {/* console.log(port.fields) */}
            <Header title={port.fields?.title} />
            <div className="page_head" >
                <h1>{port.fields?.title}</h1>
            </div>
            <Body className="color-white px-auto">
                <SinglePort portfolio={port} />
            </Body>
            <Footer />
        </div>
    )
}

export async function getStaticPaths() {
    return {
        paths: [{ params: { slug: '3JlPP6F18sfzPz3nuUs6F7' } }],
        fallback: true
    }
}

export async function getStaticProps(context) {
    const slug = context.params.slug//get the port id
    try {

        const res = await CF.getEntry(slug);

        return {
            props: { port: res, isFound: true },
            revalidate: 5//in second
        }
    } catch (e) {
        console.warn(e.message);
        return {
            props: {
                port: {},
                isFound: false
            }
        }
    }

}
