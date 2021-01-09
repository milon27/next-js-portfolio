
import Link from 'next/link';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export default function PortExcerpt({ portfolio }) {

    return (
        <div className="blog_excerpt">

            <Link href={`/portfolio/${portfolio.sys.id}`}>
                <a>
                    <h2 className="title">{portfolio.fields.title}</h2>
                    <img className="img-w100p" src={portfolio.fields.thumbnail.fields.file.url} />

                    <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(portfolio.fields.desc) }}></div>
                </a>
            </Link>

            {/* dangerouslySetInnerHTML={{ __html: documentToHtmlString(portfolio.fields.desc) }} */}

            {/* {// dangerouslySetInnerHTML={{ __html: blog.title.rendered }}} */}
        </div >
    )
}
