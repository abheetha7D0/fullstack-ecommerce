import "bootstrap/dist/css/bootstrap.min.css";
import Button from '@mui/material/Button';
import { IoMenu } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { RiContactsLine } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaRegNewspaper } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { useState } from "react";


const Navigation = () => {

    const [isOpenSideBar, setIsOpenSideBar] = useState(false);

    return (
        <nav>
            <div className="container">
                <div className="row">
                    <div className="col-sm-2 navPart1">
                        <div className="catWrapper">
                            <Button
                                className="allCatTab align-items-center"
                                onClick={()=>setIsOpenSideBar(!isOpenSideBar)}
                            >
                                <span className="icon1 me-2">
                                    <IoMenu />
                                </span>
                                <span className="text">All Categories</span>

                                <span className="icon2 ms-2">
                                    <FaAngleDown />
                                </span>
                            </Button>
                            <div className={`sideBarNav shadow ${isOpenSideBar ? "open" : ""}`}>
                                <ul>
                                    <li><Link to="/"><Button>Mens</Button></Link></li>
                                    <li><Link to="/"><Button>Womens</Button></Link></li>
                                    <li><Link to="/"><Button>Kids</Button></Link></li>
                                    <li><Link to="/"><Button>Accessories</Button></Link></li>
                                    <li><Link to="/"><Button>Beauty</Button></Link></li>
                                    <li><Link to="/"><Button>Sports</Button></Link></li>
                                    <li><Link to="/"><Button>Gift</Button></Link></li>
                               </ul>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm-9 navPart2 d-flex align-items-center">
                        <ul className="list list-inline ms-auto">
                            <li className="list-inline-item"><Link to="/"><Button><IoHomeOutline /> &nbsp; Home</Button></Link></li>
                            <li className="list-inline-item"><Link to="/about"> <Button><AiOutlineInfoCircle /> &nbsp;About</Button></Link></li>
                            <li className="list-inline-item">
                                <Link to="/shop"><Button><FiShoppingCart /> &nbsp; Shop</Button></Link>
                                <div className="subMenu shadow">
                                    <Link to="/"><Button>Mens</Button></Link>
                                    <Link to="/"><Button>Womens</Button></Link>
                                    <Link to="/"><Button>Kids</Button></Link>
                                    <Link to="/"><Button>Accessories</Button></Link>
                                </div>

                            </li>
                            <li className="list-inline-item"><Link to="/blog"><Button><FiSettings /> &nbsp; Service</Button></Link></li>
                            <li className="list-inline-item"><Link to="/blog"><Button><FaRegNewspaper /> &nbsp;Blog</Button></Link></li>
                            <li className="list-inline-item"><Link to="/contact"><Button><RiContactsLine />&nbsp;Contact</Button></Link></li>
                        </ul>
                    </div>

                </div>
            </div>
        </nav>
    );
}
export default Navigation;