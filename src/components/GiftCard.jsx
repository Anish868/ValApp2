import {motion} from "framer-motion"

export default function GiftCard({img,title}){
 return(
  <motion.div
   whileHover={{scale:1.1}}
   className="bg-pink-100 p-4 rounded-xl"
  >
   <img src={img} className="w-24 mx-auto rounded-xl"/>
   <p className="mt-2 font-semibold">{title}</p>
  </motion.div>
 )
}