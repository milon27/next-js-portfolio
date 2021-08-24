import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Body from '../../components/Body';
import PortExcerpt from '../../components/portfolio/PortExcerpt';
import CF from './../../utils/contentful/CF';

export default function index({ portfolios, isFound }) {

    return (
        <div className="page">
            <Header title="All Blog" />
            <div className="page_head">
                <h1>All Portfolio</h1>
            </div>
            <div className="m-auto px-auto color-white" style={{ minHeight: "70vh", maxWidth: '1000px' }}>
                <div className="my-2 port_container">
                    {
                        isFound ? portfolios.map(portfolio => {

                            return (
                                <PortExcerpt key={portfolio.sys.id} portfolio={portfolio} />)
                        }) : <h2 className="py-3 text-center">No Portfolio Found</h2>

                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export const getStaticProps = async (context) => {
    try {
        const res = await CF.getEntries({
            content_type: "portfolio"
        });
        const data = res.items

        return {
            props: { portfolios: data, isFound: true },
            revalidate: 5//in second
        }
    } catch (e) {
        console.log(e);
        return {
            props: {
                portfolios: []//arry
                , isFound: false
            }
        }
    }

}
