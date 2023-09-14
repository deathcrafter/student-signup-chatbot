import { useRoutes } from "react-router-dom";
import Welcome from "./pages/welcome";
import ChatbotPage from "./pages/chatbot";
import Success from "./pages/success";

function App() {
  const router = useRoutes([
    {
      path: "",
      element: <Welcome />,
    },
    {
      path: "chatbot",
      element: <ChatbotPage />,
    },
    {
      path: "success",
      element: <Success />,
    },
  ]);

  return router;
}

export default App;
