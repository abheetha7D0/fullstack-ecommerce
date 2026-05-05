import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png'
import CountryDropdown from '../CountryDropdown';
import Button from '@mui/material/Button';
import { CiUser } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from "./SearchBox";
import Navigation from "./Navigation";
import { MyContext } from "../../App";
import { useContext } from "react";


const Header = () => {

    const context = useContext(MyContext);

    return (
        <>

            <div className="headerWrapper">
                <div className="top-strip bg-charcoal-brown">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center">
                            🚚 Free shipping on orders over $50 — limited time offer!
                        </p>
                    </div>
                </div>
                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper d-flex align-items-center col-sm-2">
                                <Link to={'/'}><img src={Logo} alt='Logo' /> </Link>
                            </div>
                            <div className="col-sm-10 d-flex align-items-center part2">

                                {context?.countryList?.length > 0 && <CountryDropdown />}

                                <SearchBox />

                                <div className="part3 d-flex align-items-center ms-auto">
                                    <Button className="circle me-3"><CiUser /></Button>
                                    <div className="ms-auto cartTab d-flex align-items-center">
                                        <span className="price">$3.99</span>
                                        <div className="position-relative ms-3">
                                            <Button className="circle "><IoBagOutline /></Button>
                                            <span className="count d-flex align-items-center justify-content-center">1</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </header>

                <Navigation />

            </div>
        </>
    )
}

export default Header;