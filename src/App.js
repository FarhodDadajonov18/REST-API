import React from "react";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import { Routes, Route } from "react-router-dom";
import Form from "./components/pages/Form";
import FullInfo from "./components/pages/FullInfo";
import EditForm from "./components/pages/EditForm";

function App() {
  return (
    <div>
      <Header />

      <div className="container">
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
            <Route path="/full-info/:id" element={<FullInfo />} />
            <Route path="/edit-post/:id" element={<EditForm />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
