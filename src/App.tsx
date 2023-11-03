import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from '@pages/Home';

import './tailwind.css';
import { Title } from '@components/Title';
import { Button } from '@components/Button';
import Test from '@pages/Test';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to={'/'}>홈으로</Link>
        <Link to={'./test'}>테스트</Link>
      </nav>

      <Title size="2xl">title</Title>
      <Button text="button" />
      <h1>react v18, webpack5, eslint, prettier setting</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
