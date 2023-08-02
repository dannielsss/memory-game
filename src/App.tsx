import React from 'react';
import { Container } from './styled-components/Container.styled';
import GameProvider from './context/Game/GameProvider';
import GameTable from './components/GameTable';

/**
 * Main component
 * @returns
 */
const App = () => {
  return (
    <GameProvider>
      <Container>
        <GameTable />
      </Container>
    </GameProvider>
  );
};

export default App;
