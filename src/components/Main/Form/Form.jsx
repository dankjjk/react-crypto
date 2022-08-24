import React from 'react';
import AssetsService from './axios';
import './Form.scss';

const Form = () => {
    const [giveBtn, setGiveBtn] = React.useState('');

    const giveHandler = (e) => {
        let text = e.target.value.replace(/\D/g, '');
        setGiveBtn(text);
    };

    // First dropdown

    const dropdownRef = React.useRef(null);
    const [isActive, setIsActive] = React.useState(false);
    const onClick = (e) => {
        e.preventDefault();
        setIsActive(!isActive);
    };

    // Second dropdown

    const dropdownRefFiat = React.useRef(null);
    const [isActiveFiat, setIsActiveFiat] = React.useState(false);
    const onClickFiat = (e) => {
        e.preventDefault();
        setIsActiveFiat(!isActiveFiat);
    };

    // Axios

    const assetsService = new AssetsService();

    const [cryptoAssets, setCryptoAssets] = React.useState();
    const [fiat, setFiat] = React.useState();

    React.useEffect(() => {
        assetsService.getCryptoAssets().then((result) => {
            console.log(result);
            setCryptoAssets(result);
        });
        assetsService.getNonCryptoAssets().then((result) => {
            console.log(result);
            setFiat(result);
        });
    }, []);

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
                                    onChange={(e) => giveHandler(e)}
                                    type="text"
                                    placeholder="Мин. 5000"></input>
                                <div className="form-wrapper__currency">
                                    <span>RUB</span>
                                </div>
                            </div>
                        </div>

                        <div className="form-right col-6">
                            <div onClick={onClick} className="form-wrapper pl pr">
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
                            </div>
                            <div
                                ref={dropdownRef}
                                className={`menu ${isActive ? 'active' : 'inactive'}`}>
                                <ul>
                                    {Array.isArray(cryptoAssets)
                                        ? cryptoAssets.map((asset) => {
                                              let id, icon, name;
                                              if (asset.hasOwnProperty('address')) {
                                                  //  Если крипта
                                                  id = asset.asset.id;
                                                  name = asset.asset.name;
                                                  icon = asset.asset.icon;
                                              } else {
                                                  id = asset.id;
                                                  name = asset.name;
                                                  icon = asset.icon;
                                              }
                                              return (
                                                  <li key={id}>
                                                      <img src={icon} alt="" />
                                                      <a href="/">{name}</a>
                                                  </li>
                                              );
                                          })
                                        : null}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="form-title pr pl">
                        <label>Получаете:</label>
                    </div>

                    {/* ========== Form Get ========== */}
                    <div className="form-box form-get mb-2">
                        <div className="form-left col-6">
                            <div className="form-wrapper pl pr">
                                <input type="text" name="get" placeholder="Резерв:120.38"></input>
                                <div className="form-wrapper__currency">
                                    <span>BTC</span>
                                </div>
                            </div>
                        </div>
                        <div className="form-right col-6">
                            <div onClick={onClickFiat} className="form-wrapper pl pr">
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
                            </div>
                            <div
                                ref={dropdownRefFiat}
                                className={`menu ${isActiveFiat ? 'active' : 'inactive'}`}>
                                <ul>
                                    {Array.isArray(fiat)
                                        ? fiat.map((asset) => {
                                              let id, icon, name;
                                              if (asset.hasOwnProperty('address')) {
                                                  //  Если крипта
                                                  id = asset.asset.id;
                                                  name = asset.asset.name;
                                                  icon = asset.asset.icon;
                                              } else {
                                                  id = asset.id;
                                                  name = asset.name;
                                                  icon = asset.icon;
                                              }
                                              return (
                                                  <li key={id}>
                                                      <img src={icon} alt="" />
                                                      <a href="/">{name}</a>
                                                  </li>
                                              );
                                          })
                                        : null}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Form;
