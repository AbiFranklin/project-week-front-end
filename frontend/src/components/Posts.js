import React, { Component } from 'react';
import { Form, Modal, Icon, Card, Divider, Button } from 'semantic-ui-react'
import './posts.css';


export default class Posts extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
          title: '',
          text: '',
          user_id: 1,
        }

        this.handleText = this.handleText.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.setPostInfo = this.setPostInfo.bind(this);
      }

      componentWillReceiveProps(nextProps) {
        this.forceUpdate();
        this.setState({ posts: nextProps.posts });
        this.forceUpdate();  
      }
    
      handleTitle = (e) => {
          if (e.target.value.length > 0) {
        this.setState({ title: e.target.value })
          }
        console.log(this.state.title)
      }
    
      handleText = (e) => {
        this.setState({ text: e.target.value })
        console.log(this.state.text)
      }

      setPostInfo(title, text){
          this.setState({title: title, text: text})
          console.log(this.state.title)
      }




  render() {
    return (
        <div className="posts">
            <div className='notes'>
                <Card.Group itemsPerRow={3} className="card-group" >
                {this.props.posts.map(post => {
                    return (<Card color="red" key={post.id} >
                        <Card.Header className="card-header">
                        <h2>{post.title}</h2>
                        <Icon className='icon' onClick={() => {this.props.deleteOne(post.id)}} name='delete' color="red" />
                        </Card.Header>
                        <Divider />
                        <Card.Description className="card-text" >{post.text}</Card.Description>
                        <Modal size="mini" className="modal" closeIcon={true} trigger={<div className="modal"><Button>Edit</Button></div>}>
                            <Form>
                            <Form.Input label="Title:" name="title" width="16" onClick={()=> {this.setState({title: post.title})}} onChange={(e) => this.handleTitle(e)}/>
                            <Form.TextArea label="Note:" name="text" width="16" onChange={(e) => this.handleText(e)}/>
                            </Form>
                            <Modal.Actions>
                            <Button basic color="red" type="submit" content="Submit" onClick={() => this.props.editOne(post.id, this.state)}/>
                            </Modal.Actions>        
                        </Modal>
                        </Card>)})}
                    </Card.Group>
                    
            </div>
        </div>
                    
    )
  }
}