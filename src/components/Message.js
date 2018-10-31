import React from 'react'

const Message = ({id, labels, read, selected, starred, subject, toggleStarred, msgReadToggle}) => {
  const readClasses = read ? "row message read" : "row message unread"
  const selectedClass = selected ? " selected" : ""
  const starredClasses = starred ? "star fa fa-star" : "star fa fa-star-o"

const labelSpans = labels.map((label, i) =>{
  return <span key={i} className="label label-warning">{label}</span>
})

  return(
  <div className={readClasses + selectedClass} >
    <div className="col-xs-1">
      <div className="row">
        <div className="col-xs-2">
          <input type="checkbox" defaultChecked={selected}  />
        </div>
        <div className="col-xs-2">
          <i className={starredClasses} onClick={(e)=>toggleStarred(e,id)}></i>
        </div>
      </div>
    </div>
    <div classname="col-xs-11" onClick={(e)=>msgReadToggle(e,id)}>
      {labelSpans}
      <a href="#">{subject}</a>
    </div>
  </div>
)}


export default Message
