import './App.css';
import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import CheckOut from './containers/CheckOut/CheckOut';
import ContactData from './containers/CheckOut/ContactData/ContactData'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import Orders from './containers/Orders/Orders';

function App() {
  return (
    <Router>
      <div>
        <Layout>
          <Routes>
            <Route path='/' element={<BurgerBuilder />} />
            <Route path='checkout' element={<CheckOut />} >
              <Route path='/checkout/contact' element={<ContactData />} />
            </Route>
            <Route path='/orders' element={<Orders />} />
          </Routes>
          {/* <BurgerBuilder /> */}
          {/* <CheckOut /> */}
        </Layout>
      </div>
    </Router>
  );
}

export default App;
