import * as contentful from 'contentful'

const CF = contentful.createClient({
    space: `${process.env.SPACE_ID}`,
    accessToken: `${process.env.ACCESS_TOKEN}`
})
export default CF;