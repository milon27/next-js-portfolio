import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Body from '../../components/Body';
import PortExcerpt from '../../components/portfolio/PortExcerpt';
import CF from './../../utils/contentful/CF';

export default function index({ portfolios, isFound }) {

    return (
        <div>
            <Header title="All Blog" />
            <div className="page_head">
                <h1>All Portfolio</h1>
            </div>
            <Body >
                <div className="my-2 port_container">
                    {
                        isFound ? portfolios.map(portfolio => {

                            return (
                                <PortExcerpt key={portfolio.sys.id} portfolio={portfolio} />)
                        }) : <h2 className="py-3 text-center">No Post Found</h2>

                    }
                </div>
            </Body>
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
            props: {
                portfolios: data//arry
                , isFound: true
            }, revalidate: 5000//(5 second)//12 hours(86400/2)=43200
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
