import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

export default function Header() {
   return (
      <header>
         <Link to={"/"}>Fast Pizza </Link>
         <SearchOrder />
         <p>Adil</p>
      </header>
   );
}