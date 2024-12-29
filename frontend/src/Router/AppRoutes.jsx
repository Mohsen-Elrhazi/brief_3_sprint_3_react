import { Routes, Route } from "react-router-dom";
import Accueil from "../pages/Accueil";
import Account from "../pages/Account";
import CurrentAccount from "../pages/CurrentAccount";
import SavingAccount from "../pages/SavingAccount";
import BusinessAccount from "../pages/BusinessAccount";
import Navbar from "../composants/Navbar";


const AppRoutes = () => {
  return (
    // <BrowserRouter>
    <>
    <Navbar /> 
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/account" element={<Account />} />
        <Route path="/current-account" element={<CurrentAccount />} />
        <Route path="/saving-account" element={<SavingAccount />} />
        <Route path="/business-account" element={<BusinessAccount />} />
      </Routes>
      </>
    // </BrowserRouter>
  );
};

export default AppRoutes;
