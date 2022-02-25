
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { useEffect, useState } from 'react';

export default function SinglePort({ portfolio }) {
    const [text, setText] = useState('')
    useEffect(() => {
        setText(documentToHtmlString(portfolio.fields.desc))
    }, [])

    return (
        <div className="port">
            {/* <h2 className="title">{portfolio.fields.title}</h2> */}
            <p dangerouslySetInnerHTML={{ __html: text }}></p>
            {/* <p className="cat"><b>Project Category: {portfolio.fields.category.fields?.title}</b></p> */}
            <img style={{ borderRadius: "5px" }} className="img-w100p" src={portfolio.fields.thumbnail.fields.file.url} />
        </div >
    )
}
