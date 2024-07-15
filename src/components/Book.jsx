import { useState } from "react";

export default function Book({ addPerson }) {
  const [input, setInput] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("male");
  const [address, setAddress] = useState("feni");

  function handleInput(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const person = {
      email,
      username: input,
      gender,
      address,
    };

    addPerson(person);
    reset();
  }

  function reset() {
    setInput("");
    setGender("male");
    setEmail("");
    setAddress("feni");
  }

  return (
    <div className="w-[20%] flex flex-col">
      <div className="bg-rose-700 h-full">
        <div>
          <h1 className="text-3xl text-white py-4 text-center">Add</h1>

          <form
            onSubmit={handleSubmit}
            className="p-4 flex flex-col gap-10 mx-auto  justify-center px-4 items-stretch text-left"
          >
            {/* username */}
            <div className="flex flex-col gap-3">
              <input
                value={input}
                minLength={5}
                required
                className="text-lg p-2 text-slate-900"
                placeholder="Username"
                onChange={(e) => setInput(e.target.value)}
                maxLength={20}
              />
            </div>

            {/* email */}
            <div className="flex flex-col gap-3">
              <input
                value={email}
                required
                minLength={5}
                maxLength={20}
                className="text-lg p-2 text-slate-900"
                placeholder="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* address */}
            <div>
              <p className="text-left text-xl mb-3">Address</p>
              <select
                className="p-4 text-lg w-full text-slate-900"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              >
                <option value="feni">Feni</option>
                <option value="comilla">Comilla</option>
                <option value="dhaka">Dhaka</option>
              </select>
            </div>

            {/* gender */}
            <div className="px-4">
              <p className="text-left text-xl mb-1">Gender</p>
              <div className="flex gap-3">
                <div>
                  <input
                    type="radio"
                    id="addmale"
                    value="male"
                    name="gender"
                    checked={gender === "male"}
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  />{" "}
                  <label htmlFor="addmale" className="text-lg">
                    Male
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    name="gender"
                    id="addfemale"
                    value="female"
                    checked={gender === "female"}
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  />{" "}
                  <label htmlFor="addfemale" className="text-lg">
                    Female
                  </label>
                </div>
              </div>
            </div>
            <button className="p-3 bg-white text-slate-900">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
}
