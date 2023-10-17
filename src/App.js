import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
// import SideBar from './components/SideBar'



export default class App extends Component {
  pageSize = 6;
  // apiKey = process.env.REACT_APP_NEWS_API_1;
  apiKey = process.env.REACT_APP_NEWS_API_2;
  state = {
    progress: 0
  }
  setProgress = (progres) => {
    this.setState({
      progress: progres
    });
  }

  render() {
    return (
      <Router>
        <>
            <LoadingBar
              color='#f11946'
              progress={this.state.progress}
              height={3}
            />
          <Navbar />
          {/* <div className="row"> */}
            {/* <div className="col-md-2">
              <SideBar />
            </div> */}
            {/* <div className="col-md-10">  */}
            <div > 
              <Routes>
                <Route exact path="/"  element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" apiKey={this.apiKey} category="general"/>}></Route>
                <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="in" apiKey={this.apiKey} category="business"/>}></Route>
                <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="in" apiKey={this.apiKey} category="entertainment"/>}></Route>
                <Route exact path="/general" element={<News setProgress={this.setProgress} key="general2" pageSize={this.pageSize} country="in" apiKey={this.apiKey} category="general"/>}></Route>
                <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="in" apiKey={this.apiKey} category="health"/>}></Route>
                <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="in" apiKey={this.apiKey} category="science"/>}></Route>
                <Route exact path="/sports" element={<News setProgress={this.setProgress}  key="sports" pageSize={this.pageSize} country="in" apiKey={this.apiKey} category="sports"/>}></Route>
                <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="in" apiKey={this.apiKey} category="technology"/>}></Route>
              </Routes>
            </div>
          {/* </div> */}
        </>
      </Router>
    )
  }
}


