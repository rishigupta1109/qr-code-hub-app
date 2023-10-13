import React, { useState } from "react";
import image from "../Images/QR.png";
import { useNavigate, useParams } from "react-router-dom";
import "./QRPageCSS.css";
import Hint from "../components/Hint";
//put passwords here passwords[set][qrNum]
const passwords = [
  ["111111", "222222", "333333", "444444", "-1"],
  ["123456", "234567", "345678", "456789", "-1"],
  ["111111", "222222", "333333", "444444", "-1"],
  ["123456", "234567", "345678", "456789", "-1"],
  ["111111", "222222", "333333", "444444", "-1"],
  ["123456", "234567", "345678", "456789", "-1"],
];

let paramToQR = {
  "7e030fbb-52c5-4fda-8b14-1e8d6c1424ea": "QR00",
  "5cc24317-20d4-4ff5-98ef-7ea15380cf9a": "QR01",
  "50628dd9-106d-4c86-93b0-48331987277c": "QR02",
  "97edc1e0-080a-4961-90c5-2a7b9610d2d4": "QR03",
  "d28d741b-597d-47e3-af50-19ec72a9a5e4": "QR10",
  "a5d0a170-ae29-44b7-96a5-31cd8eb5ff6b": "QR11",
  "e8e33f62-9e11-42c2-8a70-3e6c0d7b62f7": "QR12",
  "80d15d5e-2d8b-4a08-8f45-3d877b23f773": "QR13",
  "bbd0be9a-6d2a-4e59-9454-3a52b5b250fb": "QR20",
  "7c5d914b-e3dd-496a-ba5d-f0f44e350a41": "QR21",
  "3c3c8f2b-0f36-4dcd-842c-74861419d6f7": "QR22",
  "1bdef48f-295d-4ef3-8f97-9a4a0e146fb0": "QR23",
  "2b0a9689-e977-4ae3-8c20-07b0fbcbb72b": "QR30",
  "d870c9c0-6637-4c1c-8c9d-df7bdeab1717": "QR31",
  "d67b41d3-9530-4c76-b090-b95cf6d3ea75": "QR32",
  "1b36d172-b80f-4597-bd33-c4f65e4f8fbd": "QR33",
  "c70c74a2-408f-4bcb-bfa4-37e4e272f8e5": "QR40",
  "3a79deac-b4e7-4522-8a3b-7e48e200f6c2": "QR41",
  "eca04f80-7734-45ec-a33e-1bbf51f5da17": "QR42",
  "79e9c786-367d-4d1a-976a-7b75a525da1f": "QR43",
  "1830d29c-1b5c-4b15-a6c3-1e1aaf50652c": "QR50",
  "94b268d7-0652-483d-bc56-7ee90e0f5d8f": "QR51",
  "0d525a21-e9d7-4a4b-8f28-e3e9f03ffac6": "QR52",
  "e1253c1c-c287-4d96-b32a-979ea7610e1c": "QR53",
};
//put hints here
const hints = [
  ["loreum", "ipsum", "dolor", "Congrats"],
  ["loreum", "ipsum", "dolor", "Congrats"],
  ["loreum", "ipsum", "dolor", "Congrats"],
  ["loreum", "ipsum", "dolor", "Congrats"],
  ["loreum", "ipsum", "dolor", "Congrats"],
  [
    "loreum",
    "ipsum",
    "dolor",
    "Congratulations you have completed the QR Hunt",
  ],
];
const QRPage = () => {
  const [teamId, setTeamId] = useState("");
  const [password, setPassword] = useState("");
  const [showHint, setShowHint] = useState(false);
  const { param } = useParams();
  const navigate = useNavigate();
  console.log(param);
  const qr = paramToQR[param];
  if (qr == undefined) {
    navigate("/home");
  }
  console.log(qr);
  let set = parseInt(qr[2]);
  let qrNum = parseInt(qr[3]);
  const clickHandler = () => {
    if (teamId === "" || password === "") {
      alert("Please enter teamid and password");
      return;
    }
    if (teamId.length !== 4) {
      alert("Invalid team id length is not 4");
      return;
    }
    if (password.length !== 6) {
      alert("Invalid password");
      return;
    }
    if (parseInt(teamId) >= 1061 || parseInt(teamId) <= 1000) {
      alert("Invalid team id not exists");
      return;
    }

    let idx = Math.floor((parseInt(teamId) % 1000) / 10);
    if (idx !== set) {
      alert("Invalid Set" + idx + set);
      return;
    }
    if (passwords[idx][qrNum] === password) {
      alert("correct");
      setShowHint(true);
    } else {
      alert("Wrong password");
    }
  };
  if (showHint) {
    return (
      <Hint hint={hints[set][qrNum]} password={passwords[set][qrNum + 1]} />
    );
  }
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div
        style={{
          backgroundColor: "transparent",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          padding: "2rem",
        }}
      >
        <img
          src={image}
          alt="qr-image"
          className="h-[300px] w-auto max-w-[100%]"
          // style={{
            // height: "300px",
            // width: "auto",
            // maxWidth: "100%",
          // }}
        />
        <h1
          className="text-white font-bold "
          style={{
            color: "white",
            fontSize: "2rem",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          QR Hunt
        </h1>
      </div>
      <div className="flex flex-col py-6">
        <div className="flex flex-col gap-8">
          <span
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              gap: "3rem",
            }}
          >
            <label
              className="text-white"
              style={{
                fontSize: "1.5rem",
              }}
            >
              Enter Team ID
            </label>
            <input
              style={{
                outline: "none",
                fontSize: "16px",
                padding: "10px 20px",
                borderRadius: "10px",
              }}
              placeholder="Team ID"
              onChange={(e) => {
                setTeamId(e.target.value);
              }}
            />
          </span>
          <span
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <label
              className="text-white"
              style={{
                fontSize: "1.5rem",
              }}
            >
              Enter Password
            </label>
            <input
              placeholder="Password"
              style={{
                outline: "none",
                fontSize: "16px",
                padding: "10px 20px",
                borderRadius: "10px",
              }}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </span>

          <button
            style={{
              fontSize: "1.5rem",
              padding: "10px 20px",
              borderRadius: "10px",
              //   backgroundColor: "transparent",
              border: "1px solid white",
              //   color: "white",
              cursor: "pointer",
              backdropFilter: "blur(10px)",
            }}
            className="text-white hover:bg-white hover:text-black"
            onClick={clickHandler}
          >
            Get Hint
          </button>
        </div>
      </div>
    </div>
  );
};

export default QRPage;
