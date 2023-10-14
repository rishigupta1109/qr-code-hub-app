import React, { useState } from "react";
import image from "../Images/QR.png";
import { useNavigate, useParams } from "react-router-dom";
import "./QRPageCSS.css";
import Hint from "../components/Hint";
import logotext from ".././Images/InventoTextresp.png";
//put passwords here passwords[set][qrNum]
const passwords = [
  ["917111", "922722", "537833", "148944", "915575", "966696", "-1"],
  ["119171", "229222", "335378", "489414", "591575", "696966", "-1"],
  ["191111", "229722", "378353", "414894", "555195", "669966", "-1"],
  ["119171", "272292", "353783", "489414", "517595", "669966", "-1"],
  ["917111", "292722", "378533", "414489", "591755", "696696", "-1"],
  ["111911", "229272", "335378", "489414", "515795", "966669", "-1"],
];

let paramToQR = {
  "7e030fbb-52c5-4fda-8b14-1e8d6c1424ea": "QR00",
  "5cc24317-20d4-4ff5-98ef-7ea15380cf9a": "QR01",
  "50628dd9-106d-4c86-93b0-48331987277c": "QR02",
  "97edc1e0-080a-4961-90c5-2a7b9610d2d4": "QR03",
  "c7d36d4d-4a61-43a0-8b54-5d3b121cf9d1": "QR04",
  "9a45dbbd-2f02-432b-81a9-1e9d7992aa1a": "QR05",
  "d28d741b-597d-47e3-af50-19ec72a9a5e4": "QR10",
  "a5d0a170-ae29-44b7-96a5-31cd8eb5ff6b": "QR11",
  "e8e33f62-9e11-42c2-8a70-3e6c0d7b62f7": "QR12",
  "80d15d5e-2d8b-4a08-8f45-3d877b23f773": "QR13",
  "6a3d470b-77f6-47f2-a918-7e6ff98473c0": "QR14",
  "3d0bc53f-080b-4a93-9a6e-39f3bbd28f8e": "QR15",
  "bbd0be9a-6d2a-4e59-9454-3a52b5b250fb": "QR20",
  "7c5d914b-e3dd-496a-ba5d-f0f44e350a41": "QR21",
  "3c3c8f2b-0f36-4dcd-842c-74861419d6f7": "QR22",
  "1bdef48f-295d-4ef3-8f97-9a4a0e146fb0": "QR23",
  "1e9a70c6-9e08-49a6-aa45-8cb58d7255ab": "QR24",
  "4b9f6c52-453b-4f0a-b8d4-55f732ec748e": "QR25",
  "2b0a9689-e977-4ae3-8c20-07b0fbcbb72b": "QR30",
  "d870c9c0-6637-4c1c-8c9d-df7bdeab1717": "QR31",
  "d67b41d3-9530-4c76-b090-b95cf6d3ea75": "QR32",
  "1b36d172-b80f-4597-bd33-c4f65e4f8fbd": "QR33",
  "8e5a7eb4-7213-4f16-ae5d-369e9e0f98ac": "QR34",
  "5c5e3a17-6f32-453d-a1bc-3e0b41d2e95f": "QR35",
  "c70c74a2-408f-4bcb-bfa4-37e4e272f8e5": "QR40",
  "3a79deac-b4e7-4522-8a3b-7e48e200f6c2": "QR41",
  "eca04f80-7734-45ec-a33e-1bbf51f5da17": "QR42",
  "79e9c786-367d-4d1a-976a-7b75a525da1f": "QR43",
  "2b4a1f90-0b16-48a8-9c2e-6c1b7081df5d": "QR44",
  "7c8b44a9-7d06-4b90-84a5-9f7f36d22561": "QR45",
  "1830d29c-1b5c-4b15-a6c3-1e1aaf50652c": "QR50",
  "94b268d7-0652-483d-bc56-7ee90e0f5d8f": "QR51",
  "0d525a21-e9d7-4a4b-8f28-e3e9f03ffac6": "QR52",
  "e1253c1c-c287-4d96-b32a-979ea7610e1c": "QR53",
  "0f6e4d31-9e82-4f7a-8aeb-2a5d18d47e8c": "QR54",
  "3a2f14e9-7b43-4db1-9dc2-6e9e55a8b9c1": "QR55",
};
//put hints here
const hints = [
  [
    `P $ Q means P is the brother of Q,
  P # Q means P is the mother of Q,
  P * Q means P is the daughter of Q.
  If the code of family is A # B $ C * D, who is the father in them?
   
  D
  B
  C
  A
  
  Once you're there,
  Slip your notes inside my secret slot,
  Ideas and suggestions, I've got the lot.
  What am I?`,
    "Find me near the pond...",
    `Five friends – Alice, Bob, Carol, David, and Emily – participated in a quiz competition. Each friend wore a different color shirt – Red, Blue, Green, Yellow, and Orange. They also had different scores – 80, 85, 90, 95, and 100.

    1.  Alice didn’t wear a Yellow shirt.
    2.  Bob scored 90 points.
    3.  Carol wore a Green shirt.
    4.  David scored 5 points less than Emily.
    5.  The person who wore the Red shirt scored 85 points.
    6.  Alice scored 10 points less than Bob.
    7.  Emily wore a Blue shirt.
    
    Question:
    Which friend wore the Orange shirt?
    
    Options:
    A) Alice  
    B) Bob  
    C) Carol  
    D) David  
    E) Emily  
    F) The answer cannot be determined from the given information.
    
    Once you're there,
    Trust your ears and follow the Beep...`,
    "..-. .. ..-. - .... / ... - .- - .  ",
    "आरम्भः अन्त्यः",
    "Congratulations! Yiu have completed the Quest. Have a redbull because redbull gives you wingggggs",
  ],
  [
    `If M is unavailable, I am the closest block to the backstage.
   Once you are there,
  ""Agli hint hai waha, paani ka doctor hai jaha!""`,
    "01000010 00100000 01110000 01100001 01110010 01101011 01101001 01101110 01100111",
    `""Five friends – Alice, Bob, Carol, David, and Emily – participated in a quiz competition. Each friend wore a different color shirt – Red, Blue, Green, Yellow, and Orange. They also had different scores – 80, 85, 90, 95, and 100.

    1.  Alice didn’t wear a Yellow shirt.
    2.  Bob scored 90 points.
    3.  Carol wore a Green shirt.
    4.  David scored 5 points less than Emily.
    5.  The person who wore the Red shirt scored 85 points.
    6.  Alice scored 10 points less than Bob.
    7.  Emily wore a Blue shirt.
    
    Question:
    Which friend wore the Orange shirt?
    
    Options:
    A) Alice  
    B) Bob  
    C) Carol  
    D) David  
    E) The answer cannot be determined from the given information.  
    
    Once you're there,
    Search for the warmth, when you cross the stairs...""`,
    "(https://ik.imagekit.io/avy76kxdy/WhatsApp%20Image%202023-10-14%20at%201.11.55%20PM.jpeg?updatedAt=1697269415909)",
    "आरम्भः अन्त्यः",
    "Congratulations! Yiu have completed the Quest. Have a redbull because redbull gives you wingggggs",
  ],
  [
    `""“Where innovation sparks and ideas ignite,
  In this place, entrepreneurs take their flight.
  Look for the hub of startup’s grace,
  To find the next QR code in this chase.""""`,
    `"01000001 00100000 01000010 01101100 01101111 01100011 01101011 00100000 01000110 01100001 01100011 01110101 01101100 01110100 01111001 00100000 01010000 01100001 01110010 01101011 01101001 01101110 01100111
    (https://ik.imagekit.io/avy76kxdy/WhatsApp%20Image%202023-10-14%20at%2010.30.30%20AM.jpeg?updatedAt=1697268513976)
    `,
    `"Five siblings – Alex, Ben, Claire, Daniel, and Emily – are sitting in a row. They each have a different favorite subject – Math, Science, History, English, and Art. They also have different ages – 10, 12, 14, 16, and 18.

    1. Ben is older than Emily but younger than Daniel.
    2. The person who likes Science is the youngest among them.
    3. Claire is older than Daniel but younger than the person who likes History.
    4. Emily is older than Alex but younger than the person who likes Art.
    5. The person who likes Math is older than the person who likes English but younger than Daniel.
    6. Alex doesn't like Science or Math.
    
    Question:
    Which sibling likes History, and how old are they?
    
    A) Alex, 12  
    B) Ben, 14  
    C) Claire, 16  
    D) Daniel, 18  
    E) Emily, 10  
    F) The answer cannot be determined from the given information.
    
    Once you're there,
    See through the eyes of Bapu..."`,
    "..-. .. ..-. - .... / ... - .- - .  ",
    "आरम्भः अन्त्यः",
    "Congratulations! Yiu have completed the Quest. Have a redbull because redbull gives you wingggggs",
  ],
  [
    `"P $ Q means P is the brother of Q;
    P # Q means P is the mother of Q;
    P * Q means P is the daughter of Q
    If the code of family is A # B $ C * E, who is the father in them?
    
    E
    B
    C
    A
    
    Once you are there:
    ""In 2020 i was in every hand,
    In this place where germs disband.
    Look for a post with cleansing grace,
    Beneath it hides the next QR’s trace.”
    "`,
    "(https://ik.imagekit.io/avy76kxdy/WhatsApp%20Image%202023-10-14%20at%201.04.30%20PM.jpeg?updatedAt=1697269223098)",
    "(https://ik.imagekit.io/avy76kxdy/d.jpeg?updatedAt=1697272969929)",
    `1. outside your block, stand in middle square in this image

    2. now face at door
   
   3. Reach the  “campus” situated at your left
   4. Reach the nearest dustbin
   5. Start moving 350°N 
   6. Now find me near the cage." (https://ik.imagekit.io/avy76kxdy/WhatsApp%20Image%202023-10-14%20at%201.12.59%20PM.jpeg?updatedAt=1697270729523)`,
    "आरम्भः अन्त्यः",
    "Congratulations! Yiu have completed the Quest. Have a redbull because redbull gives you wingggggs",
  ],
  [
    `"""Read it once, read it twice and if you still don't get the block, read IT thrice""

    Once you are there:
    Keep an eye out since I'll be on the Anti-Ragging board you need to look for...""`,
    `"1. Start from the middle of the road in front of Internal Combustion Lab.
    2. Start moving 340°N.
    3. Stop in the middle of the second speed-breaker.
    4. Now move 30°NE until you hit the wall, you'll find me there somewhere..."`,
    `"In a recent study conducted on environmental conservation efforts, researchers analyzed the impact of various factors on biodiversity in protected areas. The results indicated a strong correlation between the presence of native plant species and the overall biodiversity within these areas. Additionally, the study found that regions with strict conservation policies exhibited a significant increase in the population of endangered animal species.

    Which of the following statements is most likely to be true based on the information provided?
    
    A) Conservation efforts have no effect on biodiversity in protected areas.
    
    B) Native plant species have a negative impact on overall biodiversity.
    
    C) Strict conservation policies lead to a decrease in the population of endangered animal species.
    
    D) Presence of native plant species positively influences overall biodiversity, and strict conservation policies contribute to the population growth of endangered animal species.
    
    riddle:i"""" POV ,if you are looking at me like that who am i?
      (https://ik.imagekit.io/avy76kxdy/WhatsApp%20Image%202023-10-14%20at%201.03.06%20PM.jpeg?updatedAt=1697269223087)
    "`,
    `"1. outside your block, stand in middle square in this image

    2. now face at door
   
   3. Reach the  “campus” situated at your left
   4. Reach the nearest dustbin
   5. Start moving 350°N 
   6. Now find me near the cage."
   (https://ik.imagekit.io/avy76kxdy/WhatsApp%20Image%202023-10-14%20at%201.12.59%20PM.jpeg?updatedAt=1697270729523)
   `,
    "आरम्भः अन्त्यः",
    "Congratulations! Yiu have completed the Quest. Have a redbull because redbull gives you wingggggs",
  ],
  [
    `"
    22.681330,75.878890
    
    Once you are there:
    
    ""I'm red and white, but not a candy cane,
    In case of flames, I'm your best gain.
    When fires roar and smoke's in the air,
    Find me nearby, I'm the one to care.
    What am I?"""`,
    `"1. Start from the middle of the road in front of Internal Combustion Lab.
    2. Start moving 340°N.
    3. Stop in the middle of the second speed-breaker.
    4.Now look for me on the benches to your left. I will be present."`,
    `"Five friends – Alice, Bob, Carol, David, and Emily – participated in a quiz competition. Each friend wore a different color shirt – Red, Blue, Green, Yellow, and Orange. They also had different scores – 80, 85, 90, 95, and 100.

    1.  Alice didn’t wear a Yellow shirt.
    2.  Bob scored 90 points.
    3.  Carol wore a Green shirt.
    4.  David scored 5 points less than Emily.
    5.  The person who wore the Red shirt scored 85 points.
    6.  Alice scored 10 points less than Bob.
    7.  Emily wore a Blue shirt.
    
    Question:
    Which friend wore the Orange shirt?
    
    Options:
    A) Alice  
    B) Bob  
    C) Carol  
    D) David  
    E) The answer cannot be determined from the given information.  
    
    riddle:
    ""image "" POV , if you are looking at me like that who am i?"
    (https://ik.imagekit.io/avy76kxdy/WhatsApp%20Image%202023-10-14%20at%201.03.06%20PM.jpeg?updatedAt=1697269223087)
    `,
    `(https://ik.imagekit.io/avy76kxdy/WhatsApp%20Image%202023-10-14%20at%201.11.55%20PM.jpeg?updatedAt=1697269415909)`,
    "आरम्भः अन्त्यः",
    "Congratulations! Yiu have completed the Quest. Have a redbull because redbull gives you wingggggs",
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
  if (qr === undefined) {
    navigate("/");
    console.log(qr);
    return null;
  }
  let set = parseInt(qr[2]);
  let qrNum = parseInt(qr[3]);
  const clickHandler = () => {
    if (teamId === "" || password === "") {
      alert("Please enter Team Id and Password");
      return;
    }
    if (teamId.length !== 4) {
      alert("Invalid team Id : Length is not 4");
      return;
    }
    if (password.length !== 6) {
      alert("Invalid password");
      return;
    }
    if (parseInt(teamId) >= 1072 || parseInt(teamId) < 1000) {
      alert("Invalid Team Id : Does not exist");
      return;
    }

    let idx = Math.floor((parseInt(teamId) % 1000) / 12);
    if (idx !== set) {
      alert("Invalid Set" + idx + set);
      return;
    }
    if (passwords[idx][qrNum] === password) {
      // alert("correct");
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
      <div>
        <img src={logotext} className="h-[100px]" />
      </div>
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
        <h1 className="text-white text-2xl font-bold text-center">QR Hunt</h1>
      </div>
      <div className="flex flex-col lg:py-6 py-4 justify-center">
        <div className="flex flex-col justify-center gap-4 lg:gap-8 items-center">
          <span
            className="w-full flex justify-between lg:gap-12 gap-10 px-4"
            // style={{
            // width: "100%",
            // display: "flex",
            // justifyContent: "space-between",
            // gap: "3rem",
            // }}
          >
            <label className="text-white lg:text-2xl flex items-center justify-center">
              Enter Team ID
            </label>
            <input
              className=" text-xs lg:text-lg px-[10px] py-[10px] rounded-lg"
              // style={{
              // outline: "none",
              // fontSize: "16px",
              // padding: "10px 20px",
              // borderRadius: "10px",
              // }}
              placeholder="Team ID"
              onChange={(e) => {
                setTeamId(e.target.value);
              }}
            />
          </span>
          <span
            className="w-full flex justify-between lg:gap-12 gap-10 px-4"
            // style={{
            // width: "100%",
            // display: "flex",
            // justifyContent: "space-between",
            // }}
          >
            <label className="text-white flex lg:text-2xl justify-center items-center">
              Enter Pass
            </label>
            <input
              placeholder="Password"
              className=" text-xs lg:text-lg px-[10px] py-[10px] rounded-lg"
              // style={{
              // outline: "none",
              // fontSize: "16px",
              // padding: "10px 20px",
              // borderRadius: "10px",
              // }}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </span>

          <button
            className="flex justify-center mt-4 md:mt-0 items-center hover:scale-110 hover:text-white duration-300 ease-in-out border-[1px] w-[100px] sm:w-full border-white text-white hover:bg-white hover:text-black rounded-lg px-4 lg:px-[10px] lg:py-[20px]"
            style={{
              // fontSize: "1.5rem",
              // padding: "10px 20px",
              // borderRadius: "10px",
              backgroundColor: "transparent",
              // border: "1px solid white",
              // color: "white",
              cursor: "pointer",
              backdropFilter: "blur(10px)",
            }}
            // className="text-white hover:bg-white hover:text-black"
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
