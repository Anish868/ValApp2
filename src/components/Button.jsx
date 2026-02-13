export default function Button({text,onClick,color="red"}){
 return(
  <button
   onClick={onClick}
   className={`px-6 py-3 rounded-full text-white font-bold
   ${color==="red"?"bg-red-500":"bg-blue-500"}
   hover:scale-110 transition`}
  >
   {text}
  </button>
 )
}