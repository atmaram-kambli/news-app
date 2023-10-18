import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 9;
  // const apiKey = process.env.REACT_APP_NEWS_API_1;
  const apiKey = process.env.REACT_APP_NEWS_API_2;

  const [progress, setProgress] = useState(0);

  return (
    <Router>
      <>
        <LoadingBar
          color='#f11946'
          progress={progress}
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
            <Route exact path="/" element={<News key="general" setProgress={setProgress}  pageSize={pageSize} country="in" apiKey={apiKey} category="general" />}></Route>
            <Route exact path="/business" element={<News key="business" setProgress={setProgress}  pageSize={pageSize} country="in" apiKey={apiKey} category="business" />}></Route>
            <Route exact path="/entertainment" element={<News key="entertainment" setProgress={setProgress}  pageSize={pageSize} country="in" apiKey={apiKey} category="entertainment" />}></Route>
            <Route exact path="/general" element={<News key="general2" setProgress={setProgress}  pageSize={pageSize} country="in" apiKey={apiKey} category="general" />}></Route>
            <Route exact path="/health" element={<News key="health" setProgress={setProgress}  pageSize={pageSize} country="in" apiKey={apiKey} category="health" />}></Route>
            <Route exact path="/science" element={<News key="science" setProgress={setProgress}  pageSize={pageSize} country="in" apiKey={apiKey} category="science" />}></Route>
            <Route exact path="/sports" element={<News key="sports" setProgress={setProgress}  pageSize={pageSize} country="in" apiKey={apiKey} category="sports" />}></Route>
            <Route exact path="/technology" element={<News key="technology" setProgress={setProgress}  pageSize={pageSize} country="in" apiKey={apiKey} category="technology" />}></Route>
          </Routes>
        </div>
        {/* </div> */}
      </>
    </Router>
  )
}

export default App;