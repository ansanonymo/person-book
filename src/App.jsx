import { useState } from "react";
import Book from "./components/Book";
import EditForm from "./components/Edit";
import Filter from "./components/Filter";
import List from "./components/List";

function App() {
  const [persons, setPersons] = useState([]);
  const [count, setCount] = useState(0);
  const [filter, setFilter] = useState({
    username: "",
    gender: "both",
    address: "",
  });
  const [editPerson, setEditPerson] = useState(null);

  function addPerson(person) {
    person.key = crypto.randomUUID();
    setPersons((p) => [...p, person]);
  }

  function addFilter(obj) {
    setFilter(() => {
      return obj;
    });
  }

  function deletePerson(key, name) {
    if (confirm("Do you wanna delete : " + name)) {
      setPersons(persons.filter((person) => person.key !== key));
    }
  }

  // filter the person
  let filterPersons = persons;

  if (filter.gender !== "both") {
    filterPersons = filterPersons.filter(
      (person) => person.gender === filter.gender
    );
  }

  // filter based on address
  filterPersons = filterPersons.filter((person) => {
    return person.address.includes(filter.address);
  });

  filterPersons = filterPersons.filter((persons) => {
    return persons.username
      .toLowerCase()
      .includes(filter.username.trim().toLowerCase());
  });

  return (
    <>
      <div className="relative flex w-full min-h-screen h-full border border-red-300">
        {!editPerson && <Filter setFilter={setFilter} filter={filter} />}

        {!editPerson && (
          <List
            editPerson={setEditPerson}
            deletePerson={deletePerson}
            persons={filterPersons}
          />
        )}

        {editPerson ? (
          <EditForm
            close={() => setEditPerson(null)}
            save={setPersons}
            editPerson={editPerson}
            setEdit={setEditPerson}
          />
        ) : (
          <Book addPerson={addPerson} />
        )}
      </div>
    </>
  );
}

export default App;
