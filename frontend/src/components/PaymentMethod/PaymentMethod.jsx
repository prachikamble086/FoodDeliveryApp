import {
  Ring,
  SocialIconM,
  SocialIconP,
  SocialIconS,
  Wallet,
} from "../../constant";
import CardTypes from "../CardTypes/CardTypes";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import "./PaymentMethod.css";
import OrderSuccessful from "../OrderSuccessful/OrderSuccessful";
import { useState } from "react";
import Footer from "../Footer/Footer";

const PaymentMethod = () => {
  const noAction = () => {};
  return (
    <>
      <div className="payment-method">
        <div className="card-type-payment-method">
          <div className="wallet">
            <div className="wallet-and-balance">
              <div className="wallet-container">
                <div className="wallet-image-container">
                  <img src={Wallet} alt="" className="wallet-image" />
                </div>
                <div className="wallet-text">
                  <div>Wallet</div>
                  <div>Available balance: ₹300</div>
                </div>
              </div>

              <div>{">"}</div>
            </div>
          </div>
          <CardTypes
            cardName="MasterCard"
            cardClick={Ring}
            cardInitial={SocialIconM}
          />
          <CardTypes
            cardName="PayPal"
            cardClick={Ring}
            cardInitial={SocialIconP}
          />
          <CardTypes
            cardName="Stripe"
            cardClick={Ring}
            cardInitial={SocialIconS}
          />
          <div>
            <div className="add-card">
              <div>+</div>
              <div className="add-debit-card">Add Debit Card</div>
            </div>
          </div>
        </div>

        <div className="amount-to-be-paid">
          <div className="amount">
            <div>Amount to be payed</div>
            <div className="cost">250</div>
          </div>

          <PrimaryButton onclick={noAction} buttonContent="Proceed Payment" />
        </div>
      </div>
      <div className="payment-method-footer">
        <Footer />
      </div>
    </>
  );
};

export default PaymentMethod;
