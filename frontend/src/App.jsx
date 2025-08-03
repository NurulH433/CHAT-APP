import Home from "./pages/home/Home"
import Conversation from "./components/sidebar/Conversation"
import Login from "./pages/login/Login"
import SignUp from "./pages/signup/SignUp"

function App() {
  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center">
        {/* <SignUp /> */}
        <Home />
        {/* <Conversation /> */}
      </div>
    </>
  )
}

export default App
