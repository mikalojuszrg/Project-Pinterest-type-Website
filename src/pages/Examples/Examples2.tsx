import GenericListComponent from "../../components/GenericListComponent/GenericListComponent";
import { TextField } from "@mui/material";
import useDebounce from "../../hooks/useDebounce";
import usePreviousValue from "../../hooks/usePreviousValue";
import { useState } from "react";

type Person = { name: string; age: number };

const people: Person[] = [
  { name: "John Doe", age: 30 },
  { name: "Jane Doe", age: 25 },
  { name: "Bob Smith", age: 40 },
];

const Examples = () => {
  function identity<Type>(arg: Type): Type {
    return arg;
  }

  const a = 5;
  const b = identity(a);
  const aa = "mikas";
  const bb = identity(aa);
  const aaa = { name: "Mikas" };
  const bbb = identity(aaa);

  const [name, setName] = useState("");
  const debouncedName = useDebounce(name);
  const previousValue = usePreviousValue(debouncedName);
  return (
    <div>
      <TextField value={name} onChange={(e) => setName(e.target.value)} />
      <p>Mano vardas: {name}</p>
      <p>Mano vardas su debouce: {debouncedName}</p>
      <p>Mano praeitas vardas: {previousValue}</p>
      <GenericListComponent
        items={people}
        renderItem={(person) => (
          <div>
            <div>{person.name}</div> <div>{person.age}</div>
          </div>
        )}
      />
    </div>
  );
};
export default Examples;
