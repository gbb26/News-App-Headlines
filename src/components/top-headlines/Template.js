import React from 'react'
import './style.css'
function Template(props) {
  return (
      <>
  <img src={!props.imageUrl?"./notfound.jpeg":props.imageUrl} className=" visuals card-img-top" alt="visuals" />
  <div className="card-body">
    <h5 className="card-title">{props.title}...</h5>
    <p className="card-text">{props.desc}...</p>
    <h6 className='h6'>{props.auth}</h6>
    <a href={props.lnk} className="btn btn-primary">Read More...</a>
</div>
</>
  )
}
export default Template
