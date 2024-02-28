import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../Components/Dashboard/Dashboard.jsx";
import { Login } from "../Components/Login/Login";
import Pizza from "../Components/MenuItems/Pizza";

import { CreateYourOwnPizza } from "../Components/MenuItems/CreateYourOwnPizza/CreateYourOwnPizza.jsx";
import { AddNewBurger } from "../Components/MenuItems/AddNewBurger/AddNewBurger.jsx";
import { HouseOfWings } from "../Components/MenuItems/HouseOfWings/HouseOfWings.jsx";

import DeliveryBoy from "../Components/Delivery Boy/DeliveryBoy.jsx";
import Orders from "../Components/Orders/Orders.jsx";
import TImeManage from "../Components/Time Manage/TImeManage.jsx";
import TableReservation from "../Components/Table Reservation/TableReservation.jsx";
import CustomerReview from "../Components/Coustomer Review/CustomerReview.jsx";
import OrderDetails from "../Components/Orders/OrderDetails.jsx";
import { AddPastas } from "../Components/MenuItems/AddPastas/AddPastas.jsx";
import { AddNanza } from "../Components/MenuItems/AddNanza/AddNanza.jsx";
import { AddCheesyFun } from "../Components/MenuItems/AddCheesyFun/AddCheesyFun.jsx";
import { AddSides } from "../Components/MenuItems/AddSides/AddSides.jsx";
import { AddSalads } from "../Components/MenuItems/AddSalads/AddSalads.jsx";
import { AddDippingSauces } from "../Components/MenuItems/AddDippingSauces/AddDippingSauces.jsx";
import { AddSweetTreat } from "../Components/MenuItems/AddSweetTreat/AddSweetTreat.jsx";
import { AddCultureCrustSpecialThinkShakes } from "../Components/MenuItems/AddCultureCrustSpecialThinkShakes/AddCultureCrustSpecialThinkShakes.jsx";
import { AddDrinks } from "../Components/MenuItems/AddDrinks/AddDrinks.jsx";
import { AddDrinksCanPop } from "../Components/MenuItems/AddDrinksCansPop/AddDrinksCanPop.jsx";
import { AddNewPizza } from "../Components/MenuItems/AddNewPizza/AddNewPizza.jsx";
import Cyop from "../Components/MenuItems/Cyop.jsx";
import Burger from "../Components/MenuItems/Burger.jsx";
import HouseWings from "../Components/MenuItems/HouseWings.jsx";
import Pasta from "../Components/MenuItems/Pasta.jsx";
import Nanza from "../Components/MenuItems/Nanza.jsx";
import CheseeFun from "../Components/MenuItems/CheseeFun.jsx";
import Slides from "../Components/MenuItems/Slides.jsx";
import Salads from "../Components/MenuItems/Salads.jsx";
import Sweet from "../Components/MenuItems/Sweet.jsx";
import Dipping from "../Components/MenuItems/Dipping.jsx";
import CultureCrust from "../Components/MenuItems/CultureCrust.jsx";
import Drinks from "../Components/MenuItems/Drinks.jsx";
import Homemad from "../Components/MenuItems/Homemad.jsx";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Dashboard />} />

      <Route path="/pizza" element={<Pizza />} />
      <Route path="/createownpizza" element={<Cyop />} />
      <Route path="/Burger" element={<Burger />} />
      <Route path="/houseofwings" element={<HouseWings />} />
      <Route path="/pastas" element={<Pasta />} />
      <Route path="/nanza" element={<Nanza />} />
      <Route path="/cheesyfun" element={<CheseeFun />} />
      <Route path="/sides" element={<Slides />} />
      <Route path="/salads" element={<Salads />} />
      <Route path="/sweettreat!" element={<Sweet />} />
      <Route path="/dippingsauces" element={<Dipping />} />
      <Route
        path="/culturecurstspecialthickshakes!!!"
        element={<CultureCrust />}
      />
      <Route path="/drinkspop" element={<Drinks />} />
      <Route path="/homemadedrinks" element={<Homemad />} />

      <Route path="/createyourownpizza" element={<CreateYourOwnPizza />} />
      <Route path="/add/burger" element={<AddNewBurger />} />
      <Route path="/add/pizza" element={<AddNewPizza />} />
      <Route path="/add/houseofwings" element={<HouseOfWings />} />
      <Route path="/add/pastas" element={<AddPastas />} />
      <Route path="/add/nanza" element={<AddNanza />} />
      <Route path="/add/cheesyfun" element={<AddCheesyFun />} />
      <Route path="/add/sides" element={<AddSides />} />
      <Route path="/add/saladtoppings" element={<AddSalads />} />
      <Route path="/add/dippingsauces" element={<AddDippingSauces />} />
      <Route path="/add/sweettreat" element={<AddSweetTreat />} />
      <Route
        path="/add/thikshakes"
        element={<AddCultureCrustSpecialThinkShakes />}
      />
      <Route path="/add/drinkscan" element={<AddDrinksCanPop />} />
      <Route path="/add/drinks" element={<AddDrinks />} />

      <Route path="/boy" element={<DeliveryBoy />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/orders/:id" element={<OrderDetails />} />
      <Route path="/time" element={<TImeManage />} />
      <Route path="/table" element={<TableReservation />} />
      <Route path="/customer" element={<CustomerReview />} />
    </Routes>
  );
};

export default AllRoutes;
