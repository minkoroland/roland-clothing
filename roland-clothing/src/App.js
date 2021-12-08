import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ProfilePage from "./pages/profile/profile.component";
import Shop from "./pages/shop/shop.component";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/profilepage" element={<ProfilePage />} />
        <Route exact path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
