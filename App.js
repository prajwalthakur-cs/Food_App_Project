import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => 
  {
  return (
    <div className="header">

      <div className="logo-container">
        <img className = "logo" 
        src="https://tse3.mm.bing.net/th/id/OIP.Li5MiPAlGbpWrFOKxWMbKAHaD4?pid=Api&P=0&h=180" 
        />
      </div>

      <div className="nav-items">
        <ul className = "items">
          <li>Home</li>
          <li>Contact</li>
          <li>About us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className = "app">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);