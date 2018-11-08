import React from 'react'

class Compose extends React.Component {
  constructor(props){
    super(props)
  }
  state= {
    subject: '',
    body: '',
    read: false,
    starred: false,
    labels: [],
  }


messageSend = (event) => {
  event.preventDefault()
  console.log(this.state)
  this.props.onMessageSent(this.state);
  this.setState({
    subject: '',
    body: '',
    labels: []
  })
}

handleSubjectChange = (event) => {
  const value = event.target.value
  const key = event.target.name
  this.setState({
    [key]: value
  })
}

handleBodyChange = (event) => {
  const value = event.target.value
  const key = event.target.name
  this.setState({
    [key]: value
  })
}

  render() {
    return(
      <form className="form-horizontal well" onSubmit= {this.messageSend}>
      <div className="form-group">
        <div className="col-sm-8 col-sm-offset-2">
          <h4>Compose Message</h4>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="subject" className="col-sm-2 control-label">Subject</label>
        <div className="col-sm-8">
          <input type="text"
                className="form-control"
                id="subject"
                placeholder="Enter a subject"
                name="subject"
                onChange={this.handleSubjectChange}
                value= {this.state.subject}
              />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="body" className="col-sm-2 control-label">Body</label>
        <div className="col-sm-8">
          <textarea name="body"
                    id="body"
                    className="form-control"
                    onChange={this.handleBodyChange}
                    value= {this.state.body}
                    ></textarea>
        </div>
      </div>
      <div className="form-group">
        <div className="col-sm-8 col-sm-offset-2">
          <input type="submit" value="Send" className="btn btn-primary" />
        </div>
      </div>
    </form>
    )
  }
}





export default Compose
