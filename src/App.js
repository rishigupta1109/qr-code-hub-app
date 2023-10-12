import React from 'react'
import { useState } from 'react'
import logo from './Images/logo.png' 
import bg from './Images/bg.webp' 
import logotext from './Images/InventoText.png'
import './App.css'

const data=
[
[
"111111",
"222222",
"333333",
"444444",
],
[
"123456",
"234567",
"345678",
"456789",
]
]
let teamIds=[
"1001",
"1002"
]
const App = () => {
const [teamId, setTeamId] = useState('')
const [password, setPassword] = useState('')
const [qrNum, setQrNum] = useState(0)
const clickHandler=()=>{
if(teamId===''||password===''){
alert('Please enter teamid and password')
return
}
// let idx=
if(data[(parseInt(teamId)%1000)/10][qrNum-1]===password){
alert("correct");
}else{
alert('Wrong password')
}
}
return (
<div className='min-h-screen body'>
  <div className='flex justify-center pt-2'>
    <img className='w-[100px] h-[100px]' src={logo}></img>
  </div>
  <div className='flex justify-center'>
    <img src={logotext} className='justify-center h-[600px] w-[800px]' />
  </div>
  <div className='pt-2'>
    <h1 className='text-5xl text-center text-white font-bold'>Presents</h1>
    <h1 className='text-3xl text-center text-white font-bold'>QR Code Hunt</h1>
    {/* <hr className='bg-gray-600 pt-0.5 border-none my-2'></hr> */}
  </div>
  <div className='grid space-y-2 justify-center mt-20'>
<input placeholder='Team ID' className='pl-2 border-2 border-gray-600 rounded-2xl min-w-[400px] min-h-[35px] ' onChange={
(e) => {
setTeamId(e.target.value)
}
} />
<input placeholder='Password' className='pl-2 border-2 border-gray-600 rounded-2xl min-w-[400px] min-h-[35px]' onChange={
  (e) => {
    setPassword(e.target.value)
  }

}  />
<input placeholder='QR Number' className='pl-2 border-2 border-gray-600 rounded-2xl min-w-[400px] min-h-[35px]' onChange={
  (e) => {
    setQrNum(e.target.value)
  }

}  />
<button onClick={
  clickHandler
}>
  Get Hint
</button>
</div>
</div>
)
}

export default App