import React from "react";

const New2 = () => {
  return (
    <div className="new3" style={{ height: "100vh" }}>
      New2
      <lord-icon
        src="https://cdn.lordicon.com/enzmygww.json"
        trigger="hover"
        style={{ width: "100px", height: "100px" }}
      />
      <img
        src={require("./46-notification-bell.svg")}
        alt=""
        style={{ height: "100vh" }}
      />
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 600"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="5%" stopColor="#002bdc" />
            <stop offset="95%" stopColor="#32ded4" />
          </linearGradient>
        </defs>
        <path
          d="M 0,600 C 0,600 0,200 0,200 C 102.19138755980862,206.66985645933016 204.38277511961724,213.3397129186603 310,193 C 415.61722488038276,172.6602870813397 524.6602870813397,125.31100478468898 618,131 C 711.3397129186603,136.68899521531102 788.9760765550241,195.41626794258377 876,227 C 963.0239234449759,258.5837320574162 1059.4354066985645,263.02392344497605 1155,254 C 1250.5645933014355,244.97607655502392 1345.2822966507179,222.48803827751198 1440,200 C 1440,200 1440,600 1440,600 Z"
          stroke="none"
          strokeWidth={0}
          fill="url(#gradient)"
          fillOpacity="0.53"
          className="transition-all duration-300 ease-in-out delay-150 path-0"
        />{" "}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="5%" stopColor="#002bdc" />
            <stop offset="95%" stopColor="#32ded4" />
          </linearGradient>
        </defs>
      </svg>
      <div className="custom-shape-divider-top-1667319704">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          />
        </svg>
      </div>
    </div>
  );
};

export default New2;
