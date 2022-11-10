import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = () => {
  const [flag, setFlag] = useState(
    "https://icons.iconarchive.com/icons/wikipedia/flags/1024/IN-India-Flag-icon.png"
  );
  const [country, setCountry] = useState("India");
  const choices = [
    {
      flag: "https://www.countries-ofthe-world.com/flags-normal/flag-of-United-States-of-America.png",
      country: "America",
    },
    {
      flag: "https://www.countries-ofthe-world.com/flags-normal/flag-of-United-Kingdom.png",
      country: "United Kingdom",
    },
    {
      flag: "https://www.countries-ofthe-world.com/flags-normal/flag-of-France.png",
      country: "France",
    },
    {
      flag: "https://www.countries-ofthe-world.com/flags-normal/flag-of-Canada.png",
      country: "Canada",
    },
  ];
  const setDetails = (e) => {
    let img = e.target.querySelector("img").getAttribute("src");
    let txt = e.target.querySelector("span").innerText;
    console.log(img, txt);
    setCountry(txt);
    setFlag(img);
  };
  return (
    <ul class="menu">
      <li>
        <div id="current-flag">
          <img src={flag} />
          <span>{country}</span>
          <i className="fa-solid fa-chevron-down"></i>
        </div>

        <ul>
          {choices.map((el) => (
            <li onClick={(e) => setDetails(e)}>
              <div id="select-country">
                <img src={el.flag} />
                <span>{el.country}</span>
              </div>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
};

export default Dropdown;

/*
<div className="menu">
      <div className="ul">
        <div id="current-flag">
          <img src={flag} />
          <span>{country}</span>
        </div>
        <div className="ul">
          <div onClick={(e) => setDetails(e)}>
            <img src="https://www.countries-ofthe-world.com/flags-normal/flag-of-United-States-of-America.png" />
            <span>America</span>
          </div>
          <div onClick={(e) => setDetails(e)}>
            <img src="https://www.countries-ofthe-world.com/flags-normal/flag-of-United-Kingdom.png" />
            <span>United Kingdom</span>
          </div>
          <div onClick={(e) => setDetails(e)}>
            <img src="https://www.countries-ofthe-world.com/flags-normal/flag-of-France.png" />
            <span>France</span>
          </div>
          <div onClick={(e) => setDetails(e)}>
            <img src="https://www.countries-ofthe-world.com/flags-normal/flag-of-Canada.png" />
            <span>Canada</span>
          </div>
        </div>
        <i className="fa-solid fa-chevron-down"></i>
      </div>
    </div>
*/
