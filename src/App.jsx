import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { useOnScreen } from "./hooks/useOnScreen.js";
import menuIcon from './assets/menu-icon.svg';
import closeIcon from './assets/close-icon.svg';
import smallBanner from './assets/black-friday-small.jpg';
import "./App.css";

function App() {
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);
  const showBanner = localStorage.getItem("showBanner");

  useEffect(() => {
    if (isVisible === false) {
      setIsMounted(true);
    }
  }, [isVisible]);

  const hideBanner = () => {
    localStorage.setItem("showBanner", 0);
    setIsMounted(false);
  }

  return (
    <>
      <div className="app">
        <div className="header-banner" ref={ref}>
          <img
            loading="lazy"
            src={smallBanner}
            className="img"
          />
          <div className="header-banner-content">
            <div className="banner-date-content">
              <span className='bold-font'>
                Black Friday
              </span>
              <span className='date-text'>
                , 24-27 Nov
              </span>
            </div>
            <div className="percent-wrapper">
              <span className="percent">10% OFF</span>
            </div>
            <span className="header-banner-use-code font">
              <span>
                Use code{" "}
              </span>
              <span className='percent bold-font'>
                10FRIDAY
              </span>
              <span className='checkout-text'>
                {" "}
                at checkout
              </span>
            </span>
            <span className='menu-icon'>
              <img src={menuIcon}/>
            </span>
          </div>
          <div className="header-banner-shop">
            <button className="header-banner-shop-button">Shop now</button>
            <img
              loading="lazy"
              src={closeIcon}
              className="header-banner-close"
            />
          </div>
        </div>
          <div className={`frame ${(isMounted && showBanner !== '0') && 'visible'}`}>
            <div className='frame-wrapper'>
              <span className="black-friday">Black Friday</span>
              <span className="percent-off">10%OFF</span>
              <p className="use-code-at">
                <span className="text-wrapper">Use code&nbsp;</span>
                <span className="friday-text">10FRIDAY&nbsp;</span>
                <span className="text-wrapper">at checkout</span>
              </p>
              <button className="button-wrapper">
                <span>Shop now {" "}
                  <span className='hide-mobile'>through Monday</span>
                </span>
              </button>
              <img
                onClick={() => hideBanner()}
                className="close-instance"
                loading="lazy"
                src={closeIcon}
              />
            </div>
          </div>
      </div>
    </>
  );
}

export default App;


