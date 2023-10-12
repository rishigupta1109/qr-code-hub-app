import React from 'react'
import { useState } from 'react'

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
  <>
<input placeholder='teamid' onChange={
(e) => {
setTeamId(e.target.value)
}
} />
<input placeholder='password' onChange={
  (e) => {
    setPassword(e.target.value)
  }

}  />
<input placeholder='qrNum' onChange={
  (e) => {
    setQrNum(e.target.value)
  }

}  />
<button onClick={
  clickHandler
}>
  Get Hint
</button>
</>
)
}

export default App