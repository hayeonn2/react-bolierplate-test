import React from 'react';
import '../src/tailwind.css';
import Example from '@components/Example';
import ExampleTwo from '@components/ExampleTwo';
import { Title } from '@components/Title';
import { Button } from './components/Button';

function App() {
  return (
    <div className="App">
      리액트 보일러플레이트
      <Title size="2xl">asdasd</Title>
      <Button text="제목" />
      <Example value="벨류" />
      <ExampleTwo />
      <p>{process.env.NODE_ENV}</p>
    </div>
  );
}

export default App;
