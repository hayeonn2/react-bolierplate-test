import React, { Suspense, lazy } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
// import Test from '@pages/Test';
// import Home from '@pages/Home';

import './tailwind.css';
// import { Title } from '@components/Title';
import { Button } from '@components/Button';
import { Avatar } from '@components/Avatar';

const Home = lazy(() => import('@pages/Home'));
const Test = lazy(() => import('@pages/Test'));
const Title = lazy(() => import('@components/Title/Title'));
// const Test = lazy(() => import('@pages/Test'));
// const Test = lazy(() => import('@pages/Test'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>로딩중...</div>}>
        <nav>
          <Link to={'/'}>홈으로</Link>
          <Link to={'./test'}>테스트</Link>
        </nav>

        <Avatar
          size={60}
          src="https://img.freepik.com/free-photo/the-red-or-white-cat-i-on-white-studio_155003-13189.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1698883200&semt=sph"
        />
        <Title size="2xl">title</Title>
        <Button text="button" />
        <h1>react v18, webpack5, eslint, prettier setting</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
