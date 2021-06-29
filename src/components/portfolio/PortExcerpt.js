import Link from 'next/link';

export default function PortExcerpt({ portfolio }) {

    return (
        <div className="blog_excerpt">

            <Link href={`/portfolio/${portfolio.sys.id}`}>
                <a>
                    <h2 className="title">{portfolio.fields.title}</h2>
                    <img style={{ borderRadius: "5px" }} className="img-w100p" src={portfolio.fields.thumbnail.fields.file.url} />
                </a>
            </Link>
        </div >
    )
}
