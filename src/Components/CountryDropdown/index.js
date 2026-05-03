import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button';
import "bootstrap/dist/css/bootstrap.min.css";

const CountryDropdown = () => {
  return (
    <Button className="countryDrop d-flex align-items-center ">
      
      <div className="info d-flex flex-column text-start">
        <span className="label">Your Location</span>
        <span className="name">Sri Lanka</span>
      </div>

      <span className="angleDown ms-auto">
        <FaAngleDown />
      </span>

    </Button>
  );
};

export default CountryDropdown;