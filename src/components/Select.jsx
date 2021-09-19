import { useContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import LoadingAndErrorContext from "../contexts/LoadingAndErrorContext";
import SelectContext from "../contexts/SelectContext";

const Select = () => {
  const { setIsLoading, setIsError } = useContext(LoadingAndErrorContext);
  const { setInitialData, getAllArt } = useContext(SelectContext);
  const [selectValue, setSelectValue] = useState(String);
  const [departments, setDepartments] = useState(Array);
  useEffect(() => {
    const fetchDepartments = async () => {
      const call = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/departments`
      );
      const result = await call.json();
      setDepartments(result.departments);
    };
    fetchDepartments().catch((error) => {
      console.log(error);
    });
  }, []);
  return (
    <select
      name="department"
      id="department"
      onChange={(e) => {
        setSelectValue(e.target.value);
        getAllArt(e.target.value)
          .then(setIsLoading(true))
          .then((data) => {
            setInitialData(data);
            setIsLoading(false);
            setIsError(false);
            localStorage.setItem("initialData", JSON.stringify(data));
          })
          .catch((error) => {
            console.log(error);
            setIsError(true);
          });
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
