import GameProvider from "./context/Game/GameProvider";
import GameTable from "./components/GameTable";
import { Container } from "./components/shared/Container";

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
