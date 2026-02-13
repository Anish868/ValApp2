import { useState } from "react"
import Card from "./components/Card"
import Button from "./components/Button"
import GiftCard from "./components/GiftCard"
import { motion } from "framer-motion"

import happy from "./assets/dudu/happy.gif"
import cry from "./assets/dudu/cry.gif"
import angry from "./assets/dudu/angry.gif"
import cute from "./assets/dudu/cute.gif"
import gun from "./assets/dudu/gun.gif"

import img1 from "./assets/couple/img1.jpg"
import img2 from "./assets/couple/img2.jpg"
import img3 from "./assets/couple/img3.jpg"

export default function App(){

 const [step,setStep]=useState(0)
 const [noCount,setNoCount]=useState(0)
 const [memoryIndex,setMemoryIndex]=useState(0)

 const messages=[
  "Will you be mine 🥺?",
  "Think again 😭",
  "Are you sure 😡"
 ]

 const gifs=[cute,cry,angry]
 const memories=[img1,img2,img3]

 const handleNo=()=>{
  if(noCount===0) setNoCount(1)
  else if(noCount===1) setNoCount(2)
  else if(noCount===2) setStep(4)
 }

 return(
 <div className="main-container">

 <Card>

 {/* PROPOSAL */}
 {step===0 &&(
 <>
 <img src={gifs[noCount]} className="gif"/>

 <h1 className="title">{messages[noCount]}</h1>

 <div className="btn-wrap">

 <motion.button
 onClick={()=>setStep(1)}
 style={{
 padding:`${14 + noCount*8}px ${22 + noCount*12}px`,
 fontSize:`${16 + noCount*3}px`
 }}
 className="yes-btn"
 >
 YES 🙈
 </motion.button>

 {noCount<3 &&(
 <motion.button
 onClick={handleNo}
 style={{
 transform:`scale(${1 - noCount*0.25})`
 }}
 className="no-btn"
 >
 {noCount===2 ? "Still NO 😨" : "NO 😒"}
 </motion.button>
 )}

 </div>
 </>
 )}

 {/* HAPPY */}
 {step===1 &&(
 <>
 <img src={happy} className="gif"/>
 <h1 className="title">Happy Valentine Day My Princess 💍</h1>

 <div className="center">
 <Button text="Click Me ❤️" onClick={()=>setStep(2)}/>
 </div>
 </>
 )}

 {/* MEMORIES ONE BY ONE */}
 {step===2 &&(
 <>
 <h1 className="title">We'll create Many More Together ❤️</h1>

 <div style={{
 display:"flex",
 justifyContent:"center",
 alignItems:"center",
 marginTop:"20px",
 gap:"20px"
 }}>
 <img
 src={memories[memoryIndex]}
 style={{
 height:"20ch",
 width:"20vw",
 objectFit:"cover",
 borderRadius:"12px"
 }}
 />
 </div>

 <div className="center" style={{marginTop:"20px"}}>
 <Button
 text={memoryIndex < memories.length-1 ? "NEXT ❤️" : "FINISH 💕"}
 onClick={()=>{
 if(memoryIndex < memories.length-1)
 setMemoryIndex(memoryIndex+1)
 else
 setStep(3)
 }}
 />
 </div>
 </>
 )}

 {/* FINAL */}
 {step===3 &&(
 <>
 <img src={happy} className="gif"/>
 <h1 className="big-love">I Love You ❤️</h1>
 </>
 )}

 {/* MOTKI */}
 {step===4 &&(
 <>
 <img src={gun} className="gif-large"/>
 <h1 className="title">Motki teri to , chal Yes Daba 👊</h1>

 <div className="center">
 <button onClick={()=>setStep(1)} className="yes-btn big">
 YES 🙈
 </button>
 </div>
 </>
 )}

 </Card>
 </div>
 )
}