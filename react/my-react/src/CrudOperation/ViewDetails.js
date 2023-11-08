import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

export default function ViewDetails() {
    const [details, setDetails] = useState(null);
    const location = useLocation();
    const data = location.state;
    const userData = data.userData;
    const allData = data.allData;

    useEffect(() => {
        if (userData && allData) {
            const viewedData = allData.find(data => data.id === userData.id);
            setDetails(viewedData);
        } 
    }, []);

    if (!details) {
        return <p>Loading...</p>;
    }

    return (
        <div className="viewmaindiv">
            <div className="viewdetails">
                <img src={details.avatar} alt="User Avatar" />
                <div className="w-50 fs-4 text-start">
                    <p className="fw-bold">Name:</p>
                    <p className="ms-5">{details.first_name} {details.last_name}</p>
                    <p className="fw-bold">Email:</p>
                    <p>{details.email}</p>
                </div>
            </div>
        </div>
    );
}
