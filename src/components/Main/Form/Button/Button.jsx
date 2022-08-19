import React from 'react';
import './Button.scss';

const Button = (onFormBtn) => {
    return (
        <button onClick={onFormBtn} className="form-wrapper pl pr">
            <div className="form-wrapper__text">
                <img src="./img/currency/qiwi.svg" alt="Qiwi" />
                <span>QIWI</span>
            </div>
            <div className="form-wrapper__arrow">
                <svg
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1 1.056 8.5 9 16 1"
                        stroke="#E23F65"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"></path>
                </svg>
            </div>
        </button>
    );
};

export default Button;
