import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate=useNavigate()
  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName(username));
    navigate("/menu")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="my-10 flex flex-col items-center  justify-center text-center  font-semibold "
    >
      <p className="mb-2 text-sm text-stone-700 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-55 input mb-4"
      />

      {username !== "" && (
        <div>
          <Button type={"primary"}>Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
