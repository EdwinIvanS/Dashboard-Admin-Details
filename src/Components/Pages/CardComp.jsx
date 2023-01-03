import React from "react";

const CardComp = () => {
    return(
        <div className="container-cardComp">
            <div>
                <p className="font-weight-normal">Name</p>
                <p className="font-weight-bold">Tony</p>
            </div>
            <div className="pt-1">
                <p className="font-weight-normal">Card Number</p>
                <p className="font-weight-bold">4642  3489  9867  7632</p>
            </div>
            <div className="pt-2 d-flex justify-content-between">
                <div>
                    <p className="font-weight-light text-xs">Valid</p>
                    <p className="font-weight-medium text-sm">11/15</p>
                </div>
                <div>
                    <p className="font-weight-light text-xs text-xs">Expiry</p>
                    <p className="font-weight-medium text-sm">03/25</p>
                </div>
                <div>
                    <p className="font-weight-light text-xs">CVV</p>
                    <p className="font-weight-bold text-sm">···</p>
                </div>
            </div>
        </div>
    )
}

export default CardComp;