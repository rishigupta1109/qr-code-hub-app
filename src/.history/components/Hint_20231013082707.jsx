import React from "react";
import logotext from ".././Images/InventoTextresp.png";

const Hint = ({ hint, password }) => {
  return (
    <div className="min-h-screen md:p-16 flex-col pt-6 px-3">
      <div className="flex justify-center">
        <img src={logotext} className="w-[350px] md:w-auto md:h-auto" />
      </div>
      <div
        className="flex flex-col gap-6 mt-6 h-60vh w-"
        style={{
          height: "100%",
          width: "100%",
          borderRadius: "20px",
          padding: "2rem",
          // minHeight: "50vh",
          background: "transparent",
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="flex flex-row justify-start items-center gap-4">
        <h1
          className="font-bold text-white md:text-5xl text-2xl flex"
          // style={{
            // fontSize: "2rem",
            // fontWeight: "bold",
            // color: "white",
            // textAlign: "center",
          // }}
        >
          Hint :
        </h1>
        <p
          style={{
            fontSize: "1.5rem",
            color: "white",
            textAlign: "center",
          }}
        >
          {hint}
        </p>
        </div>
        <div className="flex-row">
        <p
          style={{
            marginTop: "auto",
          }}
        >
          <span
            className="font-bold text-white md:text-5xl text-2xl flex"
            // style={{
              // fontSize: "2rem",
              // color: "white",
              // textAlign: "center",
              // fontWeight: "bold",
            // }}
          >
            Password for next QR :{" "}
          </span>
          <span
            style={{
              fontSize: "1.5rem",
              color: "white",
              textAlign: "center",
            }}
          >
            {password}
          </span>
        </p>
        </div>
      </div>
    </div>
  );
};

export default Hint;
