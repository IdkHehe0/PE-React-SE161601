import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import '../styles/home.css';


const URL = 'https://649911d179fbe9bcf83ea17c.mockapi.io/api/v1/staffManagement';

const Detail = () => {

    // const [Person, setPersonDetail] = useState({});

    // const getList = async () => {
    //     const res = await axios.get(`${URL}`);
    //     if (res.status === 200) {
    //         setPersonDetail(res.data);
    //     }
    // }

    // const getList = async () => {
    //     let id = this.id;
    //     const res = await axios.get(`https://649911d179fbe9bcf83ea17c.mockapi.io/api/v1/staffManagement/${id}`);
    //     if (res.status === 200) {
    //         setDetailPopUp(res.data);
    //     }
    // }

    // useEffect(() => {
    //     getList();
    // }, {});

    const [person, setPerson] = useState({});

    const { id } = useParams();

    const getListStaff = async () => {
        const res = await axios.get(`${URL}/${id}`);
        if (res.status === 200) {
            setPerson(res.data);
        }
    }

    useEffect(() => {
        getListStaff();
    }, [id]);


    const handleClosePopup = () => {
        <Link to='/'></Link >
    }

    let isEmptyObj = Object.keys(person).length === 0;

    return (
        <>
            {/* {isEmptyObj === false &&
                <div>
                    {Person && Person.map((data) => (
                        <div key={data.id}>
                            <div className="popup">
                                <div className="popup-content">
                                    <div>
                                        <span className='close' onClick={handleClosePopup}>

                                        </span>
                                        <img src={data.avatar} alt={data.id} />
                                        <h2>ID: {data.id}</h2>
                                        <p>Name: {data.name}</p>
                                        <p>Age: {data.age}</p>
                                        <p>Address: {data.Address}</p>
                                        <p>CreatedAt: {new Date(data.createdAt * 1000).toLocaleDateString()}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            } */}

            {isEmptyObj === false &&
                <div>
                    {person && (
                        <div>
                            <div className="popup">
                                <div className="popup-content">
                                    <div>
                                        <span className='close' onClick={handleClosePopup}> </span>
                                        <img src={person.avatar} alt={person.id} />
                                        <h2>ID: {person.id}</h2>
                                        <p>Name: {person.name}</p>
                                        <p>Age: {person.age}</p>
                                        <p>Address: {person.Address}</p>
                                        <p>CreatedAt: {new Date(person.createdAt * 1000).toLocaleDateString()}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            }
        </>
    )
}

export default Detail