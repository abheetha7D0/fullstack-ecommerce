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

const Navigation = () => {
    return (
        <nav>
            <div className="container">
                <div className="row">
                    <div className="col-sm-3 navPart1">
                        <Button className="allCatTap align-items-center">
                            <span className="icon1 me-2">
                                <IoMenu />
                            </span>
                            <span className="text">All Categories</span>

                            <span className="icon2 ms-2">
                                <FaAngleDown />
                            </span>
                        </Button>
                    </div>
                    <div className="col-sm-9 navPart2 d-felex align-items-center">
                        <ul className="list list-inline ms-auto">
                            <li className="list-inline-item"><Link to="/"><IoHomeOutline /> &nbsp; Home</Link></li>
                            <li className="list-inline-item"><Link to="/shop"><FiShoppingCart /> &nbsp; Shop</Link></li>
                            <li className="list-inline-item"><Link to="/contact"> <AiOutlineInfoCircle /> &nbsp;About</Link></li>
                            <li className="list-inline-item"><Link to="/about"><FaRegNewspaper /> &nbsp;Blog</Link></li>
                            <li className="list-inline-item"><Link to="/contact"><RiContactsLine />&nbsp;Contact</Link></li>
                        </ul>
                    </div>

                </div>
            </div>
        </nav>
    );
}
export default Navigation;