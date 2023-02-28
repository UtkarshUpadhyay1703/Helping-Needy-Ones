import './App.css';
import video from "./Background/video.mp4"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Employee from './Component/Employee/Employee';
// import DonorRegister from './Component/Donor/DonorRegister';

import DonorRegDemo from './Component/Donor/DonorRegDemo';
import DonorSignIn from './Component/Donor/DonorSignIn';
import DonorView from './Component/Donor/DonorView';
import DonorUpdate from './Component/Donor/DonorUpdate';


import EmployeeRegDemo from './Component/Employee/EmployeeRegDemo';
import EmployeeSignIn from './Component/Employee/EmployeeSignIn';
import EmployeeUpdate from './Component/Employee/EmployeeUpdate';
import EmployeeView from './Component/Employee/EmployeeView';

import VendorRegDemo from './Component/Vendor/VendorRegDemo';
import VendorSignIn from './Component/Vendor/VendorSignIn';
import VendorUpdate from './Component/Vendor/VendorUpdate';
import VendorView from './Component/Vendor/VendorView';
import 'bootstrap/dist/css/bootstrap.min.css';


import Boot from './Component/Donor/Boot';


function App() {
  return (
    <div className="App">
      {/* <video autoPlay muted loop>
        <source src={video} type="video/mp4"/>
      </video> */}

      <Router>
        <Switch>
        <Route path="/Employee" exact component={Employee}></Route>
        {/* <Route path="/DonorRegister" exact component={DonorRegister}></Route> */}
        <Route path="/DonorReg" exact component={DonorRegDemo}></Route>
        <Route path="/DonorSignIn" exact component={DonorSignIn}></Route>
        <Route path="/DonorView" exact component={DonorView}></Route>
        <Route path="/DonorUpdate" exact component={DonorUpdate}></Route>

        <Route path="/Boot" exact component={Boot}></Route>


        <Route path="/EmployeeRegDemo" exact component={EmployeeRegDemo}></Route>
        <Route path="/EmployeeSignIn" exact component={EmployeeSignIn}></Route>
        <Route path="/EmployeeView" exact component={EmployeeView}></Route>
        <Route path="/EmployeeUpdate" exact component={EmployeeUpdate}></Route>

        <Route path="/VendorRegDemo" exact component={VendorRegDemo}></Route>
        <Route path="/VendorSignIn" exact component={VendorSignIn}></Route>
        <Route path="/VendorView" exact component={VendorView}></Route>
        <Route path="/VendorUpdate" exact component={VendorUpdate}></Route>




        
        </Switch>
      </Router>

{/* <div className='abc'>
  dfgyhjikolkjhgfghjkl
</div> */}
    </div>
  );
}
export default App;