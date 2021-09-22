import { useContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import SelectContext from "../contexts/SelectContext";

const Select = () => {
  const { handleSubmit } = useContext(SelectContext);
  const [selectValue, setSelectValue] = useState(String);
  const [departments, setDepartments] = useState(Array);
  useEffect(() => {
    const departmentsIsCached = localStorage.getItem("selectOptions");
    if (departmentsIsCached) {
      setDepartments(JSON.parse(departmentsIsCached));
    } else {
      const fetchDepartments = async () => {
        const call = await fetch(
          `https://collectionapi.metmuseum.org/public/collection/v1/departments`
        );
        const result = await call.json();
        setDepartments(result.departments);
        localStorage.setItem(
          "selectOptions",
          JSON.stringify(result.departments)
        );
      };
      fetchDepartments().catch((error) => {
        console.log(error);
      });
    }
  }, []);
  return (
    <select
      name="department"
      id="department"
      onChange={(e) => {
        handleSubmit(e);
        setSelectValue(e.target.value);
      }}
      value={selectValue}
    >
      {departments.map((data) => {
        const { displayName, departmentId } = data;

        return (
          <option key={departmentId} value={displayName}>
            {displayName}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
