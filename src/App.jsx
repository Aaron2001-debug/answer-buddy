import "./App.css";
import { Container } from "./component/Container";
import { GeminiProvider } from "./AnswerBuddyContext";
function App() {
  return (
    <GeminiProvider>
      <Container />
    </GeminiProvider>
  );
}

export default App;
