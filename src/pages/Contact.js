import { useLocation } from 'react-router-dom'

function Contact() {
    const queryString = useLocation().search

    const queryParams = new URLSearchParams(queryString)
    const name = queryParams.get("name")

    return (
        <div>
            <h1>Hey {name}, contact us!</h1>
            <p>This is some filler text</p>
        </div>
    )
}

export default Contact