import React, { useRef, useState, useEffect } from 'react';
import { TiWeatherPartlySunny } from "react-icons/ti";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { routeSliceActions } from '../Store/routeSlice';
import { fetchSliceActions } from '../Store/fetchslice';
import { bgSliceActions } from '../Store/bgSlice';
import { useAuth0 } from "@auth0/auth0-react";

export default function Header() {
    const [currentDateTime, setCurrentDateTime] = useState(new Date()); // State to hold current date and time
    const WeatherData = useSelector((store) => store.WeatherData);
    //login btn
    const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
    console.log(user)

    const BgData = useSelector((store) => store.BgStatus);
    // console.log(BgData);

    const dispatch = useDispatch();
    const handleBg = () => {
        dispatch(bgSliceActions.toggleBg());
    }

    const [selectedCountry, setSelectedCountry] = useState('in');
    const searchInputRef = useRef("general");

    const handleSearch = (event) => {
        event.preventDefault();
        const searchTerm = searchInputRef.current.value.toLowerCase();

        if (!(searchTerm == "sports" || searchTerm == "technology" || searchTerm == "science" || searchTerm == "health" || searchTerm == "entertainment" || searchTerm == "business" || searchTerm == "general")) {

            dispatch(fetchSliceActions.markFetchDone());
            dispatch(routeSliceActions.searchRouting("general"));
        } else {
            dispatch(fetchSliceActions.markFetchDone());
            dispatch(routeSliceActions.searchRouting(searchTerm ? searchTerm : "general"));
        }
        searchInputRef.current.value = "";

    };

    const handleCountrySelect = (countryCode) => {
        setSelectedCountry(countryCode);
        selectCountry(countryCode);
    };

    const selectCountry = (selectedCountry) => {
        dispatch(fetchSliceActions.markFetchDone());
        dispatch(routeSliceActions.countryRouting(selectedCountry));
    };

    return (
        <nav className={`navbar navbar-expand-lg navbar-${BgData.bgNev} bg-${BgData.bgNev} color-white`}>
            <div className="container-fluid" style={{ color: `${BgData.color}` }}>

                <Link className="navbar-brand" to="/" onClick={() => (dispatch(fetchSliceActions.markFetchDone()), dispatch(routeSliceActions.homeRouting()))}>
                    <h2 style={{ borderBottom: `2px solid ${BgData.color}` }}>Newshub</h2></Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/home" onClick={() => (dispatch(fetchSliceActions.markFetchDone()), dispatch(routeSliceActions.homeRouting()))}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/health" onClick={() => (dispatch(fetchSliceActions.markFetchDone()), dispatch(routeSliceActions.healthRouting()))}>Health</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" onClick={() => (dispatch(fetchSliceActions.markFetchDone()), dispatch(routeSliceActions.sportsRouting()))} to="/sports">Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/business" onClick={() => (dispatch(fetchSliceActions.markFetchDone()), dispatch(routeSliceActions.businessRouting()))}>Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/entertainment" onClick={() => (dispatch(fetchSliceActions.markFetchDone()), dispatch(routeSliceActions.entertainmentRouting()))}>Entertainment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/science" onClick={() => (dispatch(fetchSliceActions.markFetchDone()), dispatch(routeSliceActions.scienceRouting()))}>Science</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/technology" onClick={() => (dispatch(fetchSliceActions.markFetchDone()), dispatch(routeSliceActions.technologyRouting()))}>Technology</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                {selectedCountry ? selectedCountry.toUpperCase() : "IN"}
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><button className="dropdown-item" onClick={() => handleCountrySelect("in")}>India</button></li>
                                
                                {!isAuthenticated && <li style={{color:"red"}} className="dropdown-item">Login to know more countries</li> }
                                {isAuthenticated &&
                                    <>
                                        <li><button className="dropdown-item" onClick={() => handleCountrySelect("us")}>United States</button></li>
                                        <li><button className="dropdown-item" onClick={() => handleCountrySelect("jp")}>Japan</button></li>
                                        <li><button className="dropdown-item" onClick={() => handleCountrySelect("ae")}>United Arab Emirates</button></li>
                                        <li><button className="dropdown-item" onClick={() => handleCountrySelect("ar")}>Argentina</button></li>
                                        <li><button className="dropdown-item" onClick={() => handleCountrySelect("at")}>Austria</button></li>
                                        <li><button className="dropdown-item" onClick={() => handleCountrySelect("au")}>Australia</button></li>
                                        <li><button className="dropdown-item" onClick={() => handleCountrySelect("be")}>Belgium</button></li>
                                        <li><button className="dropdown-item" onClick={() => handleCountrySelect("bg")}>Bulgaria</button></li>
                                        <li><button className="dropdown-item" onClick={() => handleCountrySelect("br")}>Brazil</button></li>
                                        <li><button className="dropdown-item" onClick={() => handleCountrySelect("ca")}>Canada</button></li>
                                        <li><button className="dropdown-item" onClick={() => handleCountrySelect("ch")}>Switzerland</button></li>
                                    </>
                                }
                            </ul>
                        </li>
                    </ul>
                </div>

                 <div className='d-flex nevsec collapse navbar-collapse'>
                    <div style={{ height: 'auto', width: '3vh', marginRight: '4vw' }}>
                        {WeatherData.name}
                        <div style={{ display: 'flex', height: 'auto', width: '3vh' }}>
                            <p style={{ marginRight: '5px' }}> <TiWeatherPartlySunny /> </p>
                            <p> {(WeatherData.temp - 273).toFixed(2)} </p>
                        </div>
                    </div>

                    <div className="form-check form-switch">
                        <div>
                            <input onClick={handleBg} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        </div>
                    </div>

                    <form className="d-flex" onSubmit={handleSearch}>
                        <input className="form-control me-2" type="search" ref={searchInputRef} placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>

                    <div>
                        {isAuthenticated ?
                            <>
                                <li className='d-flex'>
                                    <div className="nav-item dropdown" style={{ marginRight: "70px" }}>
                                        <div data-bs-toggle="dropdown" aria-expanded="false" >
                                            <CgProfile className='profile'/>
                                        </div>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="#">{user.email}</a>
                                            <a className="dropdown-item" href="#">{user.nickname}</a>
                                        </ul>
                                    </div>
                                    
                                    <button style={{ height: "fit-content" }} className="btn btn-primary" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log out</button>
                                </li>
                            </>
                            :
                            <li><button className="btn btn-primary" onClick={() => loginWithRedirect()}>Log In</button></li>
                        }
                    </div>
                </div> 
            </div>
        </nav>
    );
}
