import React from "react";
import "./scss/app.scss";
import Header from "./Components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import { Route, Routes } from "react-router";

export const SearchContext = React.createContext<any> ('');

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  

  return (
    <div className="wrapper">
      <SearchContext.Provider value ={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
