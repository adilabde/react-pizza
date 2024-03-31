import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username=useSelector(state=>state.user.username)
  return (
    <div className="my-10">
      <h1 className="text-center text-xl px-4 font-semibold md:text-3xl">
        The best pizza.
        <br />
        <p className="text-yellow-500">

        Straight out of the oven, straight to you.
        </p>
      </h1>
      <div className="flex flex-col items-center my-4">
     {username===""? <CreateUser />:<Button to="/menu" type="primary">Continue ordering, {username}</Button>}
      </div>
    </div>
  );
}

export default Home;
