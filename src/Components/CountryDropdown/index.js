import React, { useContext, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button';
import Dialog from "@mui/material/Dialog";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import Slide from '@mui/material/Slide';
import { MyContext } from "../../App";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const CountryDropdown = () => {

  const [isOpenModal, setIsOpenModal] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState(null);

  const context = useContext(MyContext);

  const [filteredList, setFilteredList] = useState([]);

  const filterList = (e) => {
    const searchTerm = e.target.value.toLowerCase();

    if (!searchTerm) {
      setFilteredList(context?.countryList || []);
      return;
    }

    const list = (context?.countryList || []).filter((item) =>
      item.name.common.toLowerCase().includes(searchTerm)
    );

    setFilteredList(list);
  };

  const openModal = (e) => {
    e.currentTarget.blur();
    setIsOpenModal(true);
  };

  const selectCountry = (country) => {
    setSelectedCountry(country);
    setIsOpenModal(false);
  }

  useEffect(() => {
    if (isOpenModal) {
      setFilteredList(context?.countryList || []);
    }
  }, [isOpenModal, context?.countryList]);

  return (
    <>
      <Button className="countryDrop d-flex align-items-center " onClick={openModal}>

        <div className="info d-flex flex-column text-start">
          <span className="label">Your Location</span>
          <span className="name">
            {selectedCountry ? selectedCountry.name.common.substring(0, 10) + "..." : "Select location"}
          </span>
        </div>

        <span className="angleDown ms-auto">
          <FaAngleDown />
        </span>

      </Button>
      <Dialog open={isOpenModal} onClose={() => setIsOpenModal(false)} className="locationModal"
        TransitionComponent={Transition} disableEnforceFocus>
        <h4 className="mb-0">Select your location</h4>
        <p>Enter your address  and we will show you the best options for your area.</p>
        <Button className="closeBtn" onClick={() => setIsOpenModal(false)}>
          <IoClose />
        </Button>
        <div className="headerSearch w-100">
          <input type="text" placeholder="Search your location" onChange={filterList} />
          <Button className="ms-2"><IoSearch /></Button>
        </div>
        <ul className="countryList mt-3">
          {filteredList?.length > 0 &&
            filteredList.map((item) => (
              <li key={item.cca3 || item.name.common}>
                <Button
                  onClick={() => selectCountry(item)}
                  className={
                    selectedCountry?.name?.common === item.name.common
                      ? "active"
                      : ""
                  }
                >
                  {item.name.common}
                </Button>
              </li>
            ))
          }
        </ul>
      </Dialog>
    </>

  );
};

export default CountryDropdown;