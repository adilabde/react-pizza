import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="my-10">
      <h1 className="text-center text-xl px-4 font-semibold md:text-3xl">
        The best pizza.
        <br />
        <p className="text-yellow-500">

        Straight out of the oven, straight to you.
        </p>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
