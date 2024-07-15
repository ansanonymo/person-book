import { useState } from "react";

export default function EditForm({ setEdit, close, save, editPerson }) {
  const { username, key, address, gender, email } = editPerson;
  const [name, setName] = useState(username);
  const [mail, setMail] = useState(email);

  function savePerson(e) {
    e.preventDefault();
    const updatePerson = {
      username: name.trim(),
      address,
      email: mail,
      gender,
      key,
    };

    save((prevPersons) => {
      return prevPersons.map((person) => {
        if (key === person.key) {
          return { ...updatePerson };
        }
        return person;
      });
    });

    close();
  }

  function handleGender(e) {
    setEdit({ ...editPerson, gender: e.target.value });
  }
  function handleAddress(e) {
    setEdit({ ...editPerson, address: e.target.value });
  }

  return (
    <div className="absolute left-0 top-0 w-screen h-screen flex flex-col bg-yellow-600">
      <h1 className="text-3xl text-white py-4 text-center">Edit</h1>

      <form
        onSubmit={savePerson}
        className="p-4 flex flex-col gap-10 mx-auto  justify-center px-4 items-stretch text-left"
      >
        {/* username */}
        <div className="flex flex-col gap-3">
          <input
            value={name}
            minLength={5}
            maxLength={10}
            className="text-lg p-2 text-slate-900"
            placeholder="Username to Search"
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
        </div>

        {/* email */}
        <div className="flex flex-col gap-3">
          <input
            value={mail}
            type="email"
            minLength={5}
            maxLength={20}
            className="text-lg p-2 text-slate-900"
            placeholder="Enter Email"
            onChange={(e) => setMail(e.target.value)}
            required
          />
        </div>

        {/* address */}
        <div>
          <p className="text-left text-xl mb-3">Address</p>
          <select
            onChange={handleAddress}
            className="p-4 text-lg w-full text-slate-900"
            value={address}
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
                id="editmale"
                value="male"
                checked={gender === "male"}
                onChange={handleGender}
              />{" "}
              <label htmlFor="editmale" className="text-lg">
                Male
              </label>
            </div>

            <div>
              <input
                type="radio"
                id="editfemale"
                value="female"
                checked={gender === "female"}
                onChange={handleGender}
              />{" "}
              <label htmlFor="editfemale" className="text-lg">
                Female
              </label>
            </div>
          </div>
        </div>
        <button
          type="submit"
          onClick={savePerson}
          className="p-3 bg-white text-slate-900"
        >
          Save
        </button>
        <button
          type="button"
          onClick={close}
          className="p-3 bg-white text-slate-900"
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
