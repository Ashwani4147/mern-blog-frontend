
// import Topbar from "./components/topbar/Topbar";
// import Home from "./pages/home/Home"
// import Single from "./pages/singlepage/single";
// import Write from "./pages/write/write";
// import Settings from "./pages/settings/settings";
// import Login from "./pages/login/Login";
// import Register from "./pages/register/register";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useContext } from "react";
// import { Context } from "./context/Context";
// function App(){
//   const currentuser=false;
//   const { user }= useContext(Context);
//     return (
//       <Router>
//         <Topbar/>
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route path="/register" element={ currentuser ? <Home/> :<Register />} />
//           <Route path="/login" element={currentuser ? <Home/> : <Login />} />
//           <Route path="/write" element={currentuser ? <Write /> : <Register/>} />
//           <Route path="/settings" element={currentuser ? <Settings /> : <Register/>} />
//           <Route path="/post/:postID" element={<Single />} />

          
//         </Routes>
//       </Router>
      
      
//     );
// }

// export default App;

//Lama Dev code

import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Routes>
    </Router>
   
  );
}

export default App;