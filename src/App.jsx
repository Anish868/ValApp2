import { useState } from "react"
import Card from "./components/Card"
import Button from "./components/Button"
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

 const memories=[img1,img2,img3]

 const messages=[
  "Will you be mine 🥺?",
  "Think again 😭",
  "Are you sure 😡"
 ]

 const gifs=[cute,cry,angry]

 const handleNo=()=>{
  if(noCount===0) setNoCount(1)
  else if(noCount===1) setNoCount(2)
  else if(noCount===2) setStep(4)
 }

 const nextMemory=()=>{
  if(memoryIndex < memories.length-1){
   setMemoryIndex(memoryIndex+1)
  }else{
   setStep(3)
  }
 }

 return(
 <div className="main-container">

 <Card>

 {/* PROPOSAL */}
 {step===0 &&(
 <>
 <img
  src={gifs[noCount]}
  className="gif"
  style={{
   width:"100%",
   maxWidth:"320px",
   height:"auto",
   objectFit:"contain"
  }}
 />

 <h1 className="title">{messages[noCount]}</h1>

 <div className="btn-wrap">

 <motion.button
  onClick={()=>setStep(1)}
  style={{
   padding:`${16 + noCount*10}px ${24 + noCount*14}px`,
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
 <img
  src={happy}
  className="gif"
  style={{
   width:"100%",
   maxWidth:"320px",
   height:"auto",
   objectFit:"contain"
  }}
 />

 <h1 className="title">
  Happy Valentine Day My Princess 💍
 </h1>

 <div className="center">
 <Button text="Click Me ❤️" onClick={()=>setStep(2)}/>
 </div>
 </>
 )}

 {/* MEMORIES PAGINATION */}
 {step===2 &&(
 <>
 <h1 className="title">
  We'll create Many More Together ❤️
 </h1>

 <div className="center" style={{marginTop:"20px"}}>
 <img
  src={memories[memoryIndex]}
  style={{
   width:"100%",
   maxWidth:"340px",
   height:"70vh",
   objectFit:"contain",
   borderRadius:"10px"
  }}
 />
 </div>

 <div className="center">
 <Button text="NEXT ❤️" onClick={nextMemory}/>
 </div>
 </>
 )}

 {/* FINAL LOVE */}
 {step===3 &&(
 <>
 <img
  src={happy}
  className="gif"
  style={{
   width:"100%",
   maxWidth:"320px",
   height:"auto",
   objectFit:"contain"
  }}
 />

 <h1 className="big-love">
  I Love You ❤️
 </h1>
 </>
 )}

 {/* MOTKI */}
 {step===4 &&(
 <>
 <img
  src={gun}
  className="gif-large"
  style={{
   width:"100%",
   maxWidth:"340px",
   height:"auto",
   objectFit:"contain"
  }}
 />

 <h1 className="title">
  Motki teri to , chal Yes Daba 👊
 </h1>

 <div className="center">
 <button
  onClick={()=>setStep(1)}
  className="yes-btn big"
 >
 YES 🙈
 </button>
 </div>
 </>
 )}

 </Card>
 </div>
 )
}