import Home from './components/Home';
import Men from './components/Men';
import Women from './components/Women';
import Kids from './components/Kids';
import { Route, BrowserRouter, Routes} from 'react-router-dom';
import Navbar from './Navbar';
import Main from './Main';
import Notification from './components/Notification';
import Settings from './components/Settings';
import Logout from './components/Logout';
import Edit_profile from './components/Edit_profile';
import Privacy_Policy from './components/Privacy_Policy';
import Terms_and_Conditions from './components/Terms_and_Conditions';
import Cookies from './components/Cookies';
import Footer from './Footer';
import Signup from './components/Signup';
import './App.css'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Main />
      <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Men" element={<Men />} />
              <Route path="/Women" element={<Women />} />
              <Route path="/Kids" element={<Kids />} />
              <Route path="/Notification" element={<Notification />} />
              <Route path="/Edit_profile" element={<Edit_profile />} />
              <Route path="/Settings" element={<Settings />} />
              <Route path="/Logout" element={<Logout />} />
              <Route path='/Privacy_Policy' element={<Privacy_Policy />} />
              <Route path='/Terms_and_Conditions' element={<Terms_and_Conditions />} />
              <Route path='/Cookies' element={<Cookies />} />
              <Route path='/Signup' element={<Signup />} />
          </Routes>
          {/* <Adds /> */}
          <div className='footer_css'>
          <Footer />
          </div>
      </BrowserRouter>
      
    </div>
  );
}
export default App;
