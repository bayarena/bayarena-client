import 'antd/dist/antd.css';
import './App.css';
import MainPageComponent from "./main";
import { Switch, Route, Link, useHistory } from 'react-router-dom'; 
import UploadPage from "./upload";
import LecturePage from "./lecture";
import { Button } from "antd";
import { DownloadOutlined } from '@ant-design/icons'

function App() {
  const history = useHistory();
  return (
    <div>
        <div id="header">
        <div id="header-area">
          <Link to="/">
            <img src="/images/icons/logo.png" />
          </Link>
          <Button size="large" onClick={function(){
            history.push("/upload");
          }}
          icon={<DownloadOutlined />}
          >강의 업로드</Button>
        </div>
    </div>
    <div id="body">
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
    <div id="footer"></div>
    </div>
  );
}

export default App;
 