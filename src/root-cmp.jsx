import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import { LoginSignupPage } from './pages/login-signup-page';
// import { UserMsg } from './cmps/user-msg.jsx'
import { MainPage } from './pages/main-page.jsx';


export function App() {

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path={'/'} element={<MainPage/>} />
        </Routes>
      </Router>
    </div>
  )
}
