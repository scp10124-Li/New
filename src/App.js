import { BrowserRouter, Routes , Route} from 'react-router-dom'

import Signin from "./pages/Signin";
import Header from "./Header";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<h2>首頁</h2>} exact/>
                <Route path="/signin"  element={<Signin />}  exact/>
            </Routes>
        </BrowserRouter>
        <h2 name = "Hi" />
    </div>
  );
}

export default App;
