import React from 'react';
import './App.css';
import { ZButton, ZBlock } from './packages';

function App() {
  return (
    <div className="App">
      <div className="grid">
        <ZBlock.Flex>
          <ZButton>按钮</ZButton>
        </ZBlock.Flex>
      </div>
    </div>
  )
}

export default App;
