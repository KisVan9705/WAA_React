import "./App.css";
import Dashboard from "./components/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import { PostProvider } from "./context/PostContext";
import PageRoutes from "./routes/PageRoutes";
import { BrowserRouter } from "react-router-dom";
import PostDetails from "./components/PostDetails";

function App() {
  return (
    <>
      <PostProvider>
        <BrowserRouter>
          <div className='App'>
            <PageRoutes />
          </div>
        </BrowserRouter>
      </PostProvider>
    </>
  );
}

export default App;
