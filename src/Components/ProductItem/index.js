import Button from '@mui/material/Button';
import { Rating } from '@mui/material';
import { IoMdArrowForward } from "react-icons/io";

import bag from "../../assets/products/bag.avif";
import sunglass1 from "../../assets/products/sunglass-1.avif";
import sunglass from "../../assets/products/sunglass.avif";

const ProductItem = ({ product }) => {
    return (
        <div className="item productItem">
            <div className="imgWrapper">
                <img src={bag} alt="" className="w-100" />
                <span className="badge bg-primary">28%</span>
                <div className="actions">
                    
                </div>
            </div>
            <div className="info">
                <h4 className="mb-0">Leather Handbag</h4>
                <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5} />
                <div className="d-flex ">
                    <span className="oldPrice">$150.00</span>
                    <span className="netPrice text-danger ms-2">$200.00</span>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;