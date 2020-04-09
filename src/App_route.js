import React from 'react'
import { Route, Link } from 'react-router-dom'
import './App.css'


const HomePage = (props) => {
    console.log(props)
  return (
    <div>
        <h1>Home Page</h1>
        <Link to='/topics'>Topic</Link>
        
        {/* <a href="topics">Topics</a> */}
    </div>
  );
};

const TopicsList = (props) => {
    console.log(props)
  return (
    <div>
        <h1>Topics List Page</h1><Link to={`${props.match.url}/1`}>Topic 1</Link><br/>
        <Link to={`${props.match.url}/2`}>Topic 2</Link><br/>
        <Link to={`${props.match.url}/3`}>Topic 3</Link><br/>
        <a href="/topics/:topicId">Topics Details</a><br/>
        <Link to='/home'>Home</Link>
        {/* <a href="home">Home</a> */}
    </div>
  );
};

const TopicsDetails = (props) => {
    console.log(props)
  return (
    <div>
        <h1>Topics Details Page: {props.match.params.topicId}</h1>
        <Link to='/home'>Home</Link>
        <button onClick={() => props.history.push('/topics')}>Topics</button>
        {/* <a href="home">Home</a> */}
    </div>
  );
};

const AppRoute = () => {
  return (
    <>
      {/* <Route exact path='/home' component={HomePage} /> */}
      <Route exact={false} path='/home' component={HomePage} />
      <Route path='/topics' component={TopicsList} />
      <Route path='/topics/:topicId' component={TopicsDetails} />
    </>
  )
}

export default AppRoute
