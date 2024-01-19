import React, { useEffect, useState } from 'react';

export default function GetAll() {
  const [length, setlength] = useState(0);
  const [res, setres] = useState([]);
  const [count, setCount] = useState(0);
  const [disable, setdisable] = useState(false);
  const [SetValue, SetsetValue] = useState({});
  const [selectedOptions, setSelectedOptions] = useState({});

  useEffect(() => {
    let fetchall = async () => {
      const Data = await fetch("https://localhost:7043/api/Doctor");
      const response = await Data.json();
      setlength(response.length);
      setres(response);
    };

    fetchall();
  }, []);

  const nextButton = () => {
    if (count <= length - 1) {
      setCount(count + 1);
    } else if (count === length) {
      console.log("Setting disable state to true");
      setdisable(true);
      console.log("Your button is disabled");
    }
  };

  const buttonChnage = (index) => {
    setCount(index);
  };

  let OnChangeValue = (event) => {
    let questionKey = `question${count}`;
    let value = event.target.value;

    SetsetValue((prevValues) => ({
      ...prevValues,
      [questionKey]: value,
    }));

    setSelectedOptions((prev) => ({
      ...prev,
      [count]: value,
    }));
  };

  let formsubmit = (event) => {
    event.preventDefault();
    console.log("Options Selected by User", SetValue);
  };

  return (
    <>
      <br />
      <br />
      <div>
        <form onSubmit={formsubmit} className="flex flex-col space-y-3">
          <label>
            <input
              onChange={OnChangeValue}
              checked={selectedOptions[count] === res[count]?.id}
              type="radio"
              name="option"
              value={res[count]?.id}
            />
            {res[count]?.id}
          </label>

          <label>
            <input
              onChange={OnChangeValue}
              checked={selectedOptions[count] === res[count]?.fileDescription}
              type="radio"
              name="option"
              value={res[count]?.fileDescription}
            />
            {res[count]?.fileDescription}
          </label>

          <label>
            <input
              onChange={OnChangeValue}
              checked={selectedOptions[count] === res[count]?.doctorName}
              type="radio"
              name="option"
              value={res[count]?.doctorName}
            />
            {res[count]?.doctorName}
          </label>

          <label>
            <input
              onChange={OnChangeValue}
              checked={selectedOptions[count] === res[count]?.doctorSpecialist}
              type="radio"
              name="option"
              value={res[count]?.doctorSpecialist}
            />
            {res[count]?.doctorSpecialist}
          </label>

          <label>
            <input
              onChange={OnChangeValue}
              checked={selectedOptions[count] === res[count]?.filePath}
              type="radio"
              name="option"
              value={res[count]?.filePath}
            />
            {res[count]?.filePath}
          </label>
          <button
            disabled={disable}
            className="border border-b-teal-400 w-28 bg-green-200"
            onClick={nextButton}
          >
            Next Button
          </button>
        </form>
      </div>

      <div className="flex flex-col">
        {res.map((e, index) => (
          <button onClick={() => buttonChnage(index)} key={e.id}>
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
}
