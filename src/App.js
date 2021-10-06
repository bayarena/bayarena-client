import './App.css';
import MainPageComponent from "./main";
import { Switch, Route } from 'react-router-dom'; 
import UploadPage from "./upload";
import LecturePage from "./lecture";

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/">
         <MainPageComponent />
        </Route>
        <Route exact={true} path="/lectures/:id">
         <LecturePage />
        </Route>
        <Route exact={true} path="/upload">
         <UploadPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
 