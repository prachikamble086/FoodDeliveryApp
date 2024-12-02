import { useState } from "react";
import Footer from "../Footer/Footer";
import CardTypes from "../CardTypes/CardTypes";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import "./PaymentMethod.css";
import {
  Ring,
  SocialIconM,
  SocialIconP,
  SocialIconS,
  Wallet,
} from "../../constant";

const PaymentMethod = () => {
  const noAction = () => {};

  const [isModal, setIsModal] = useState(false);

  const toggleModal = () => {
    setIsModal(!isModal);
  };

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
            <button onClick={toggleModal} className="add-card-payment-mode">
              <div>+</div>
              <div className="add-debit-card">Add Debit Card</div>
            </button>
            {isModal && (
              <div className="modal-overlay">
                <div className="modal-box">
                  <h2>Add Debit Card</h2>
                  <form>
                    <div>
                      <label>Card Number</label>
                      <input type="text" placeholder="XXXX XXXX XXXX 1234" />
                    </div>
                    <div>
                      <label>Expiration</label>
                      <input type="text" placeholder="12/18" />
                    </div>
                    <div>
                      <label>CVC</label>
                      <input type="text" placeholder="XXX" />
                    </div>
                    <div>
                      <label>Name on Card</label>
                      <input type="text" placeholder=" Mike Ross" />
                    </div>
                    <div className="modal-actions">
                      <button
                        type="button"
                        // onClick={}
                        className="payment-mode-cancel-button"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={toggleModal}
                        className="payment-mode-cancel-button"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="payment-mode-save-button"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="amount-to-be-paid">
          <div className="amount">
            <div>Amount to be paid</div>
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
