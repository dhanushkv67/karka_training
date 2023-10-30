// import {useEffect,useRef} from 'react'
// export default function Loadfn(){
//     const count = useRef(0)
//     useEffect(()=>{
//         alert(count.current)
//         count.current = count.current+1
//         alert(count)
//     })
// }
let guest = 0;

function Cup() {
  // Bad: changing a preexisting variable!
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
}