import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";


import DonorRegister from './Component/Donor/DonorRegister';
import DonorSignIn from './Component/Donor/DonorSignIn';
import DonorDonateForm from './Component/Donor/DonorDonateForm';
// import Employee from './Component/Employee/Employee';
import DonorDashBoard from './Component/Donor/DashBord/DonorDashBoard';
import EmployeeDashBoard from './Component/Employee/EmployeeDashBoard';
import DonorTableDashBoard from './Component/Employee/Tables/DonorTableDashboard';
import WelcomePage from './Component/LandingPage/WelcomePage';
import DonationPayment from './Component/Payment/DonationPayment';
import DonorDonationPayment from './Component/Donor/DonorDonationPayment';

import EmployeeSignIn from './Component/Employee/EmployeeSignIn';
import EmployeeRegister from './Component/Employee/EmployeeRegister';



import VendorRegister from './Component/Vendor/VendorRegister';
import VendorSignIn from './Component/Vendor/VendorSignIn';



import AvailableBidding from './Component/Bidding/AvailableBidding';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={WelcomePage}></Route>
        <Route path="/DonorRegister" exact component={DonorRegister}></Route>
        <Route path="/DonorSignIn" exact component={DonorSignIn}></Route>
        <Route path="/DonorDonateForm" exact component={DonorDonateForm}></Route>
        {/* <Route path="/Employee" exact component={Employee}></Route> */}
        <Route path="/Donor" exact component={DonorDashBoard}></Route>
        <Route path="/DonorTable" exact component={DonorTableDashBoard}></Route>
        <Route path="/DonationPayment" exact component={DonationPayment}></Route>
        <Route path="/DonorDonationPayment" exact component={DonorDonationPayment}></Route>


        <Route path="/Employee" exact component={EmployeeDashBoard}></Route>
        <Route path="/EmployeeSignIn" exact component={EmployeeSignIn}></Route>
        <Route path="/EmployeeRegister" exact component={EmployeeRegister}></Route>
        
        
        <Route path="/VendorRegister" exact component={VendorRegister}></Route>
        <Route path="/VendorSignIn" exact component={VendorSignIn}></Route>

        <Route path="/AvailableBidding" exact component={AvailableBidding}></Route>
        
        </Switch>
        </Router>
    </div>
  );
}

export default App;
