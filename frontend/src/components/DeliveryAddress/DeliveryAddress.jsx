import React, { useState } from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import OfferAndCart from "../OfferAndCart/OfferAndCart";
import MobileDesignLogo from "../MobileDesignLogo/MobileDesignLogo";
import { ArrowLeft, OrderPagePlus, location } from "../../constant";
import "./DeliveryAddress.css";

const DeliveryAddress = () => {
  const [isDialogueBoxOpen, setIsDialogueBoxOpen] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [currentAddress, setCurrentAddress] = useState({});
  const [editIndex, setEditIndex] = useState(null);

  const handleOpenDialogue = (index = null) => {
    if (index !== null) {
      setCurrentAddress(addresses[index]);
      setEditIndex(index);
    } else {
      setCurrentAddress({
        state: "",
        city: "",
        pinCode: "",
        phone: "",
        fullAddress: "",
      });
    }
    setIsDialogueBoxOpen(true);
  };

  const handleCloseDialogue = () => {
    setIsDialogueBoxOpen(false);
    setEditIndex(null);
    setCurrentAddress({});
  };

  const handleChange = (e) => {
    setCurrentAddress({ ...currentAddress, [e.target.name]: e.target.value });
  };

  const handleSaveAddress = () => {
    const updatedAddresses = [...addresses];
    if (editIndex !== null) {
      updatedAddresses[editIndex] = currentAddress;
    } else {
      updatedAddresses.push(currentAddress);
    }
    setAddresses(updatedAddresses);
    handleCloseDialogue();
  };

  const handleRemoveAddress = (index) => {
    setAddresses(addresses.filter((_, i) => i !== index));
  };

  const AddressInput = ({ name, placeholder }) => (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      className="address-box"
      value={currentAddress[name]}
      onChange={handleChange}
    />
  );

  return (
    <>
      <MobileDesignLogo />
      <div className="offer-cart-delivery">
        <OfferAndCart />
      </div>
      <NavigationBar />

      <div className="choose-arrow">
        <img src={ArrowLeft} alt="Arrow Left" className="arrow-image-mobile" />
        <div className="your-order-details">Your Address</div>
      </div>

      <div className="add-address">
        <button
          className="add-address-button"
          onClick={() => handleOpenDialogue()}
        >
          <img src={OrderPagePlus} alt="Add Address" />
        </button>
        <div>Add Address</div>
      </div>

      {isDialogueBoxOpen && (
        <div className="dialog-overlay" onClick={handleCloseDialogue}>
          <div className="dialog-box" onClick={(e) => e.stopPropagation()}>
            <div className="add-address-header">
              <img src={location} alt="Location" />
              <div>{editIndex !== null ? "Edit Address" : "Add Address"}</div>
            </div>

            <div className="input-box-dialogue-box">
              <input
                type="text"
                name="state"
                placeholder="State"
                className="address-box"
                value={currentAddress.state}
                onChange={handleChange}
              />
              <input
                type="text"
                name="city"
                placeholder="City/District"
                className="address-box"
                value={currentAddress.city}
                onChange={handleChange}
              />
              <input
                type="text"
                name="pinCode"
                placeholder="Pin Code"
                className="address-box"
                value={currentAddress.pinCode}
                onChange={handleChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="address-box"
                value={currentAddress.phone}
                onChange={handleChange}
              />
              <input
                type="text"
                name="fullAddress"
                placeholder="Enter full address"
                className="address-box"
                value={currentAddress.fullAddress}
                onChange={handleChange}
              />
            </div>

            <button className="save-button" onClick={handleSaveAddress}>
              Save
            </button>
          </div>
        </div>
      )}

      <div className="saved-addresses">
        {addresses.map((address, index) => (
          <div key={index} className="address-card">
            <div>{`State: ${address.state}`}</div>
            <div>{`City: ${address.city}`}</div>
            <div>{`Pin Code: ${address.pinCode}`}</div>
            <div>{`Phone: ${address.phone}`}</div>
            <div>{`Address: ${address.fullAddress}`}</div>
            <button
              className="edit-button"
              onClick={() => handleOpenDialogue(index)}
            >
              Edit
            </button>
            <button
              className="remove-button"
              onClick={() => handleRemoveAddress(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default DeliveryAddress;
