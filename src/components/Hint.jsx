import React from "react";
import logotext from ".././Images/InventoTextresp.png";

const Hint = ({ hint, password }) => {
  let part1 = hint.slice(0, hint.indexOf("("));
  let part2 = hint.slice(hint.indexOf("(") + 1, hint.indexOf(")"));
  console.log(part1, part2);
  return (
    <div className="min-h-screen md:p-16 flex-col pt-6 px-3">
      <div className="flex justify-center">
        <img src={logotext} className="w-[300px] " />
      </div>
      <div
        className="flex flex-col gap-6 mt-6 min-h-[60vh] justify-start"
        style={{
          // height: "100%",
          width: "100%",
          borderRadius: "20px",
          padding: "2rem",
          // minHeight: "50vh",
          background: "transparent",
          backdropFilter: "blur(20px)",
        }}
      >
        <div className="flex flex-col justify-start items-center gap-4">
          <h1
            className="font-bold text-white md:text-2xl text-2xl flex"
            // style={{
            // fontSize: "2rem",
            // fontWeight: "bold",
            // color: "white",
            // textAlign: "center",
            // }}
          >
            Hint
          </h1>
          <p className="text-xl text-white">{part1}</p>
          {part2?.length !== 0 && part2.includes("http") && (
            <img
              src={part2}
              style={{
                height: "300px",
              }}
            />
          )}
        </div>
        <div className="flex-row justify-center items-center text-center">
          {password != "-1" && (
            <p
              style={{
                marginTop: "auto",
              }}
            >
              <span
                className="font-bold text-white md:text-2xl text-2xl flex"
                // style={{
                // fontSize: "2rem",
                // color: "white",
                // textAlign: "center",
                // fontWeight: "bold",
                // }}
              >
                Password for next QR Code is {password}
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hint;
