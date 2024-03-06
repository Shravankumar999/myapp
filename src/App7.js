import React from 'react'

export default function App7() {
    const handleClick = (msg) => {
        alert(msg);
    }
  return (
    <div>
        <button onClick={()=>handleClick('Hi Shravan')}>Click</button>
    </div>
  )
}




// export default function App7() {
//     const handleClick = () => {
//         alert("Hello World")
//     }
//   return (
//     <div>
//         <button onClick={handleClick}>Click</button>
//     </div>
//   )
// }
