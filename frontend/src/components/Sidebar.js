import React from 'react';
import './sidebar.css'
import logo from '../lambdanotes.png';
import { Image, Form, Button } from 'semantic-ui-react'


export default function Sidebar() {
  return (
    <div className='sidebar'>
       <Image src={logo} fluid={true} />
       <h1>Add Note</h1>
       <Form>
           <Form.Input label="Title" name="title" width="16" />
           <Form.TextArea label="Note" name="text" width="16" />
           <Button basic color="red" type="submit" content="Submit" />
       </Form>
    </div>
  )
}
