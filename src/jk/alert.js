import React ,{useState}from 'react'

export default function Alert(props) {
    const [close,setClose] = useState("close");

// const close =() =>{
//     if(){}
// }

  return (
    <div className="alert alert-warning alert-dismissible fade show mb-0"  role="alert">
  <strong>this is a </strong> {props.mode}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}
