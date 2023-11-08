import { useState, useEffect } from "react";

export default function Search() {
    const [filterData, setFilter] = useState([]);
    const [value, setValue] = useState('');
    const localData = JSON.parse(localStorage.getItem('allData')) || [];

    useEffect(() => {
        if (localData) {
            setFilter(localData);
        }
    }, []);

    function handleChange(e) {
        setValue(e.target.value);
        const filteredData = localData.filter(data =>
            data.firstname.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilter(filteredData);
    }

    return (
        <div>
            <input type="text" placeholder="search" onChange={handleChange} value={value} />
            <br />
            <ul>
                {filterData.map((data, index) => (
                    <li key={index}>{data.firstname}</li>
                ))}
            </ul>
        </div>
    );
}
