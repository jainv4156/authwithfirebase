import{BrowserRouter , Routes,Route} from 'react-router-dom';
import Authentication from './components/Authentication';
import Dashboard from './components/Dashboard';
import { useState } from 'react';
import { auth } from './firebase';
import Profile from './components/Profile';
import { onAuthStateChanged } from 'firebase/auth';



function App() {
  const [user, setUser] = useState("");
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setUser(user.email)
      // console.log(user.email);
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<Profile user={user} />} />
          <Route path="/" element={<Authentication setUser={setUser} user={user}/>} />
          <Route  path="/dashboard" element={<Dashboard user={user} setUser={setUser}/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
