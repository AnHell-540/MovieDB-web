import "./App.css";
import { AppRouter } from "./ui/router/AppRouter";

if (process.env.NODE_ENV === "development") {
  const { server } = require("./ui/mocks/setupWorker");
  server.start();
}

function App() {
  return <AppRouter />;
}

export default App;
