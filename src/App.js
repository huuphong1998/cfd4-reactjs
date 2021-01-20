import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import './assets/css/style.scss'
import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Detail from './pages/detail';
import Register from './pages/register';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './pages/project';
import Payment from './pages/payment';
import Listcourse from './pages/listcourse';
import Collaborate from './pages/collaborate';
import Introcoin from './pages/introcoin';
import Faq from './pages/faq';
import Page404 from './pages/page404';
import Team from './pages/team';
import Profile from './pages/profile';
import Loading from './components/Loading';
import Demo from './pages/demo';
import PopupLogin from './components/PopupLogin';


// FunctionComponent 
function App() {
  return <BrowserRouter>
    <Header />
    <Loading />
    <Switch>
      <Route path="/thong-tin-ca-nhan" component={Profile} />
      <Route path="/danh-sach-khoa-hoc">
        <Listcourse />
      </Route>
      <Route path="/hop-tac">
        <Collaborate />
      </Route>
      <Route path="/gioi-thieu-coin">
        <Introcoin />
      </Route>
      <Route path="/cau-hoi-thuong-gap">
        <Faq />
      </Route>
      <Route path="/chi-tiet/:slug">
        <Detail />
      </Route>
      <Route path="/dang-ky">
        <Register />
      </Route>
      <Route path="/team">
        <Team />
      </Route>
      <Route path="/du-an">
        <Project />
      </Route>
      <Route path="/thanh-toan">
        <Payment />
      </Route>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route>
        <Page404 />
      </Route>
    </Switch>
    <Footer />
  </BrowserRouter>;
  // return <Register />;

}

export default App;


// // ClassComponent
// class App extends React.Component {

// }
