import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from "@mui/material/Dialog";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import Slide from '@mui/material/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const CountryDropdown = () => {

  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <Button className="countryDrop d-flex align-items-center " onClick={() => setIsOpenModal(true)}>

        <div className="info d-flex flex-column text-start">
          <span className="label">Your Location</span>
          <span className="name">Sri Lanka</span>
        </div>

        <span className="angleDown ms-auto">
          <FaAngleDown />
        </span>

      </Button>
      <Dialog open={isOpenModal} onClose={() => setIsOpenModal(false)} className="locationModal"
        TransitionComponent={Transition}>
        <h4 className="mb-0">Select your location</h4>
        <p>Enter your address  and we will show you the best options for your area.</p>
        <Button className="closeBtn" onClick={() => setIsOpenModal(false)}>
          <IoClose />
        </Button>
        <div className="headerSearch w-100">
          <input type="text" placeholder="Search your location" />
          <Button className="ms-2"><IoSearch /></Button>
        </div>
        <ul className="countryList mt-3">
          <li><Button onClick={() => setIsOpenModal(false)}>India</Button></li>
          <li><Button onClick={() => setIsOpenModal(false)}>China</Button></li>
          <li><Button onClick={() => setIsOpenModal(false)}>United States</Button></li>
          <li><Button onClick={() => setIsOpenModal(false)}>United Kingdom</Button></li>
          <li><Button onClick={() => setIsOpenModal(false)}>Germany</Button></li>
          <li><Button onClick={() => setIsOpenModal(false)}>France</Button></li>
          <li><Button onClick={() => setIsOpenModal(false)}>Japan</Button></li>
          <li><Button onClick={() => setIsOpenModal(false)}>Australia</Button></li>
          <li><Button onClick={() => setIsOpenModal(false)}>Canada</Button></li>
          <li><Button onClick={() => setIsOpenModal(false)}>Sri Lanka</Button></li>
          <li><Button onClick={() => setIsOpenModal(false)}>Brazil</Button></li>
          <li><Button onClick={() => setIsOpenModal(false)}>Russia</Button></li>
          <li><Button onClick={() => setIsOpenModal(false)}>Italy</Button></li>
          <li><Button onClick={() => setIsOpenModal(false)}>Spain</Button></li>
          <li><Button onClick={() => setIsOpenModal(false)}>Mexico</Button></li>
          <li><Button onClick={() => setIsOpenModal(false)}>South Korea</Button></li>
          <li><Button onClick={() => setIsOpenModal(false)}>Netherlands</Button></li>
          <li><Button onClick={() => setIsOpenModal(false)}>Sweden</Button></li>
        </ul>
      </Dialog>
    </>

  );
};

export default CountryDropdown;