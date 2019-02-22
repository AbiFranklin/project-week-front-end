import React, { Component } from 'react';
import './sidebar.css'
import logo from '../lambdanotes.png';
import { Image, Form, Button } from 'semantic-ui-react'


export default class Sidebar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      text: ''
    }
  }

  handleTitle = (e) => {
    this.setState({ title: e.target.value })
  }

  handleText = (e) => {
    this.setState({ text: e.target.value })
  }

  render() {
  return (
    <div className='sidebar'>
       <Image src={logo} fluid={true} />
       <h1>Add Note</h1>
       <Form >
           <Form.Input label="Title" name="title" width="16" onChange={this.handleTitle} />
           <Form.TextArea label="Note" name="text" width="16" onChange={this.handleText}/>
           <Button basic color="red" type="submit" content="Submit" onClick={() => this.props.addPost(this.state)}/>
       </Form>
    </div>
  )
}
}
