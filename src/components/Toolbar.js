import React from 'react'

const Toolbar = () => {
  return(
    <div class="row toolbar">
      <div class="col-md-12">
        <p class="pull-right">
          <span class="badge badge">2</span>
          unread messages
        </p>

        <button class="btn btn-default">
          <i class="fa fa-square-o"></i>
        </button>

        <button class="btn btn-default" disabled="disabled">
          Mark As Read
        </button>

        <button class="btn btn-default" disabled="disabled">
          Mark As Unread
        </button>

        <select class="form-control label-select" disabled="disabled">
          <option>Apply label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <select class="form-control label-select" disabled="disabled">
          <option>Remove label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <button class="btn btn-default" disabled="disabled">
          <i class="fa fa-trash-o"></i>
        </button>
      </div>
    </div>
)}


export default Toolbar
