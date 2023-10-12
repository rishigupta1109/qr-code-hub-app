import React from "react";
import { useState } from "react";
import logo from "./Images/logo.png";
import bg from "./Images/bg.webp";
import logotext from "./Images/InventoText.png";
import "./App.css";

const data = [
  ["111111", "222222", "333333", "444444"],
  ["123456", "234567", "345678", "456789"],
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

let teamIds = ["1001", "1002"];
const App = () => {
  const [teamId, setTeamId] = useState("");
  const [password, setPassword] = useState("");
  const [qrNum, setQrNum] = useState(0);
  const clickHandler = () => {
    if (teamId === "" || password === "") {
      alert("Please enter teamid and password");
      return;
    }
    if (data[(parseInt(teamId) % 1000) / 10][qrNum - 1] === password) {
      alert("correct");
    } else {
      alert("Wrong password");
    }
  };
  return (
    <div className="min-h-screen body">
      <div className="flex justify-center pt-2">
        <img className="w-[100px] h-[100px]" src={logo}></img>
      </div>
      <div className="flex justify-center">
        <img src={logotext} className="justify-center h-[600px] w-[800px]" />
      </div>
      <div className="pt-2">
        <h1 className="text-5xl text-center text-white font-bold">Presents</h1>
        <h1 className="text-3xl text-center text-white font-bold">
          QR Code Hunt
        </h1>
        {/* <hr className='bg-gray-600 pt-0.5 border-none my-2'></hr> */}
      </div>
      <div className="grid space-y-2 justify-center mt-20">
        <input
          placeholder="Team ID"
          className="pl-2 border-2 border-gray-600 rounded-2xl min-w-[400px] min-h-[35px] "
          onChange={(e) => {
            setTeamId(e.target.value);
          }}
        />
        <input
          placeholder="Password"
          className="pl-2 border-2 border-gray-600 rounded-2xl min-w-[400px] min-h-[35px]"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          placeholder="QR Number"
          className="pl-2 border-2 border-gray-600 rounded-2xl min-w-[400px] min-h-[35px]"
          onChange={(e) => {
            setQrNum(e.target.value);
          }}
        />
        <button onClick={clickHandler}>Get Hint</button>
      </div>
    </div>
  );
};

export default App;
