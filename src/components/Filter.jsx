import { useState } from "react";

export default function Filter({ filter, setFilter }) {
  const { username, gender, address } = filter;
  const [name, setName] = useState(username);

  function filterGender(e) {
    setFilter((s) => {
      return { ...s, gender: e.target.value };
    });
  }

  function filterAddress(e) {
    setFilter((s) => {
      return { ...s, address: e.target.value };
    });
  }

  function handleUsernameSearch() {
    setFilter((s) => {
      return { ...s, username: name };
    });
  }

  return (
    <div className="w-[20%] bg-slate-900 text-white">
      <h2 className="text-4xl text-center my-6 mb-8 drop-shadow">Filter</h2>

      <div className="flex flex-col gap-10 mx-auto  justify-center px-4 items-stretch text-left">
        {/* address */}
        <div>
          <p className="text-left text-xl mb-3">Address</p>
          <select
            onChange={filterAddress}
            className="p-4 text-lg w-full text-slate-900"
            defaultValue=""
          >
            <option value="">All</option>
            <option value="feni">Feni</option>
            <option value="comilla">Comilla</option>
            <option value="dhaka">Dhaka</option>
          </select>
        </div>

        {/* gender */}
        <div className="flex flex-col gap-1 mx-auto justify-start px-4">
          <p className="text-left text-xl mb-3 ">Gender</p>
          <div>
            <div>
              <input
                onChange={filterGender}
                type="radio"
                id="male"
                value="male"
                name="gender"
                checked={gender === "male"}
              />{" "}
              <label htmlFor="male" className="text-lg">
                Male
              </label>
            </div>

            <div>
              <input
                onChange={filterGender}
                type="radio"
                name="gender"
                id="female"
                value="female"
                checked={gender === "female"}
              />{" "}
              <label htmlFor="female" className="text-lg">
                Female
              </label>
            </div>

            <div>
              <input
                onChange={filterGender}
                type="radio"
                name="gender"
                id="both"
                value="both"
                checked={gender === "both"}
              />{" "}
              <label htmlFor="both" className="text-lg">
                Both
              </label>
            </div>
          </div>
        </div>

        {/* username */}
        <div className="flex flex-col gap-3">
          <input
            value={name}
            className="text-lg p-2 text-slate-900"
            placeholder="Username to Search"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button
            onClick={handleUsernameSearch}
            className="p-3 bg-white text-slate-900"
          >
            Click and Search With User Name
          </button>
        </div>
      </div>
    </div>
  );
}
