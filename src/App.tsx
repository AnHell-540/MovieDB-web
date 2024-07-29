import "./App.css";
import { AppRouter } from "./ui/router/AppRouter";

if (process.env.REACT_APP_MOCK_API === "true") {
  const { server } = require("./ui/mocks/setupWorker");
  console.log('Mock server: true')
  server.start();
}

const App = () => {
  return <AppRouter />;
}

export default App;
