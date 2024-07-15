import boyImage from "./../asset/boy.jpg";
import girlImage from "./../asset/girl.jpg";

const person = {
  name: "tom",
  gender: "male",
  address: "address",
  email: "email",
};

export default function List({ persons, deletePerson, editPerson }) {
  const nothing = <div className="text-6xl mt-8 text-gray-600">NO Items</div>;
  return (
    <div className="w-[60%] bg-emerald-700 text-white">
      <h1 className="text-5xl text-center my-10">List</h1>

      <div className="flex gap-3 p-4 flex-wrap justify-center items-center">
        {persons.length
          ? persons.map((person) => (
              <Card
                deleteFn={() => deletePerson(person.key, person.username)}
                person={person}
                editFn={() => editPerson(person)}
                key={person.key}
              />
            ))
          : nothing}
      </div>
    </div>
  );
}

function Card({
  editFn,
  deleteFn,
  person: { username, gender, email, address },
}) {
  return (
    <div className="bg-white min-w-[220px] appear text-slate-900 flex flex-col gap-4 justify-between">
      <img
        src={gender === "female" ? girlImage : boyImage}
        className="w-full max-w-[220px]"
      />
      <div className="flex flex-col text-lg text-center p-1 pb-1">
        <p className=" font-semibold text-[22px]">{username}</p>
        <p>{email}</p>
        <p>{gender}</p>
        <p>{address}</p>
      </div>

      <div className="flex">
        <button
          onClick={deleteFn}
          className="bg-red-600 text-white cursor-pointer py-3 w-full"
        >
          Delete
        </button>
        <button onClick={editFn} className="w-full bg-yellow-500">
          Edit
        </button>
      </div>
    </div>
  );
}
