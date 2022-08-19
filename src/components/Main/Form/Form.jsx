import React from 'react';
import './Form.scss';
import Button from './Button/Button';

const Form = () => {
    const [formBtn, setFormBtn] = React.useState();

    const [giveBtn, setGiveBtn] = React.useState('');
    const [getBtn, setGetBtn] = React.useState('');

    const [giveBtnDirty, setGiveBtnDirty] = React.useState(false);
    const [getBtnDirty, setGetBtnDirty] = React.useState(false);

    const [giveBtnError, setGiveBtnError] = React.useState('Строка не может быть пустым');
    const [getBtnError, setGetBtnError] = React.useState('Строка не может быть пустым');

    const giveHandler = (e) => {
        let text = e.target.value.replace(/\D/g, '');
        setGiveBtn(text);
    };

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'give':
                setGiveBtnDirty(true);
                break;
            case 'get':
                setGetBtnDirty(true);
                break;
        }
    };

    // const onFormBtn = (btn) => {
    //     btn.preventDefault();
    //     console.log('he');
    // };

    return (
        <div className="form">
            <form>
                <div className="form__content">
                    <div className="form-title pr pl">
                        <label>Отдаете:</label>
                    </div>

                    {/* ========== Form Give ========== */}
                    <div className="form-box form-give mb-2">
                        <div className="form-left col-6">
                            <div className="form-wrapper pl pr">
                                <input
                                    value={giveBtn}
                                    onBlur={(e) => blurHandler(e)}
                                    onChange={(e) => giveHandler(e)}
                                    name="give"
                                    type="text"
                                    placeholder="Мин. 5000"></input>
                                <div className="form-wrapper__currency">
                                    <span>RUB</span>
                                </div>
                            </div>
                            {giveBtnDirty && giveBtnError && (
                                <div style={{ color: 'red' }}>{giveBtnError}</div>
                            )}
                        </div>

                        <div className="form-right col-6">
                            <Button onFormBtn />
                        </div>
                    </div>

                    <div className="form-title pr pl">
                        <label>Получаете:</label>
                    </div>

                    {/* ========== Form Get ========== */}
                    <div className="form-box form-get mb-2">
                        <div className="form-left col-6">
                            <div className="form-wrapper pl pr">
                                <input
                                    value={getBtn}
                                    onBlur={blurHandler}
                                    type="text"
                                    name="get"
                                    placeholder="Резерв:120.38"></input>
                                <div className="form-wrapper__currency">
                                    <span>BTC</span>
                                </div>
                            </div>
                            {getBtnDirty && getBtnError && (
                                <div style={{ color: 'red' }}>{getBtnError}</div>
                            )}
                        </div>
                        <div className="form-right col-6">
                            <button className="form-wrapper pl pr">
                                <div className="form-wrapper__text">
                                    <img src="./img/currency/bitcoin.svg" alt="Bitcoin" />
                                    <span>Bitcoin</span>
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
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Form;
