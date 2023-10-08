import { useLocation, Link } from 'react-router-dom'

export default function Home() {
    let url = useLocation().pathname;
    console.log(url)
    return (
        <div>
            <h1>this is home pages</h1>
            <ul>
                <li><Link to={`${url}/about`}>home1</Link></li>
            </ul>

        </div>

    )
}