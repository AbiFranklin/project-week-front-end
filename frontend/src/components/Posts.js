import React, { Component } from 'react';
import { Header, Form, Modal, Icon, Card, Divider, Button } from 'semantic-ui-react'
import './posts.css';
import DeleteModal from './DeleteModal';


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
                    const changeTitle = (e) => {
                        this.setState({ title: post.title })
                        if(e.target.value !== '') {
                        this.setState({ title: e.target.value })
                        } else {
                         this.setState({ title: post.title })
                        }
                    }

                    const changeText = (e) => {
                        this.setState({ text: post.text })
                        if(e.target.value !== '') {
                        this.setState({ text: e.target.value })
                        } else {
                         this.setState({ text: post.text })
                        }
                    }

                    const submitPost = (e) => {
                        this.props.editOne(post.id, {title: post.title, text: this.state.text})
                    }

                    return (<Card color="red" key={post.id} >
                        <Card.Header className="card-header">
                        <h2>{post.title}</h2>
                        <DeleteModal deleteOne={this.props.deleteOne} id={post.id} />
                        
                        </Card.Header>
                        <Divider />
                        <Card.Description className="card-text" >{post.text}</Card.Description>
                        <Modal size="mini" className="modal" closeIcon={true} trigger={<div className="modal"><Button>Edit</Button></div>}>
                            <Form>
                            <h2>{post.title}</h2>
                            <Form.TextArea label="Note:" name="text" width="16" defaultValue={post.text} onChange={changeText} />
                            </Form>
                            <Modal.Actions>
                            <Button basic className="submitbutton" color="red" type="submit" content="Submit" onClick={submitPost}/>
                            </Modal.Actions>        
                        </Modal>
                        </Card>)})}
                    </Card.Group>
                    
            </div>
        </div>
                    
    )
  }
}