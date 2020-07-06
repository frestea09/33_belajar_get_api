import React from 'react'
import Content from './Component/Content'
import axios from 'axios'
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      post : []
    }
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response=>{
      console.log(response)
      this.setState(
        {
          post : response.data
        }
      )
    }
    )
    .catch(error=>{
      console.log(error)
    }
      
    )
  }
  render(){
    const {post} = this.state
    return(
      <div>
        {post.map(post=><div key={post.id}>{post.title}</div>)}
      </div>
    )
  }
}

export default App