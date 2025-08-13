// src/components/SpecialsCard.js
import React from 'react';

const SpecialCard = ({ image, name, price, description, handleOrder }) => {
    return (
        <article className="special-card">
            <img src={image} alt={name} className="special-image" />
            <div className="special-content">
                <div className="special-header">
                    <h3 className="special-name">{name}</h3>
                    <p className="special-price">{price}</p>
                </div>
                <p className="special-description">{description}</p>
                <button
                    className="order-button"
                    onClick={handleOrder}
                >
                    Order a delivery
                </button>
            </div>
        </article>
    );
};

export default SpecialCard;