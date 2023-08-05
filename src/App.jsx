import { useState } from "react";

function App() {
  const [age, setAge] = useState({
    days: "--",
    months: "--",
    years: "--",
  });

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const getAge = () => {
    let dobDay = parseInt(document.getElementById("day").value);
    let dobMonth = parseInt(document.getElementById("month").value);
    let dobYear = parseInt(document.getElementById("year").value);

    let currentDate = new Date();
    let currentDay = currentDate.getUTCDay();
    let currentMonth = currentDate.getUTCMonth() + 1;
    let currentYear = currentDate.getUTCFullYear();

    if (
      dobDay >= 1 &&
      dobDay <= 31 &&
      dobMonth >= 1 &&
      dobMonth <= 12 &&
      dobYear <= currentYear
    ) {
      let ageYears = currentYear - dobYear;
      let ageMonths, ageDays;
      if (currentMonth >= dobMonth) {
        ageMonths = currentMonth - dobMonth;
      } else {
        ageYears--;
        ageMonths = 12 + currentMonth - dobMonth;
      }
      if (currentDay >= dobDay) {
        ageDays = currentDay - dobDay;
      } else {
        ageMonths--;
        ageDays = 31 + currentDay - dobDay;

        if (ageMonths < 0) {
          ageMonths = 11;
          ageYears--;
        }
      }

      let age = {
        days: ageDays,
        months: ageMonths,
        years: ageYears,
      };
      setAge(age);
      setError(false);
      setErrorMessage("");
    } else {
      if (!dobDay || !dobMonth || !dobYear) {
        setError(true);
        setErrorMessage("Required");
      } else if (
        dobDay > 31 ||
        dobDay < 1 ||
        dobMonth > 12 ||
        dobMonth < 1 ||
        dobYear > currentYear
      ) {
        setError(true);
        setErrorMessage("Valid Input Required");
      }
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-[hsl(0,0%,86%)] flex items-center justify-center">
      <div className="w-[500px] h-[600px] bg-white rounded-br-[200px] rounded-2xl flex flex-col">
        <div className="flex w-[90%] sm:w-3/4 mx-8 mt-8 mb-2 gap-1 md:gap-2">
          <div className="flex flex-col">
            <label
              className={
                !error
                  ? "text-xs mb-1 font-bold text-[hsl(0,1%,44%)]"
                  : "text-xs mb-1 font-bold text-[hsl(0,100%,67%)]"
              }
            >
              DAY
            </label>
            <input
              type="text"
              pattern="[0-9]+"
              placeholder="DD"
              id="day"
              required
              className={
                !error
                  ? "border outline-none border-[hsl(0,0%,86%)] p-2 rounded-lg w-[90%] font-bold text-xl sm:text-3xl text-[hsl(0,0%,8%)]"
                  : "border outline-none border-[hsl(0,100%,67%)] p-2 rounded-lg w-[90%] font-bold text-xl sm:text-3xl text-[hsl(0,0%,8%)]"
              }
            />
            {error ? (
              <p className="text-xs text-[hsl(0,100%,67%)] mt-1">
                {errorMessage}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col">
            <label
              className={
                !error
                  ? "text-xs mb-1 font-bold text-[hsl(0,1%,44%)]"
                  : "text-xs mb-1 font-bold text-[hsl(0,100%,67%)]"
              }
            >
              MONTH
            </label>
            <input
              type="text"
              pattern="[0-9]+"
              placeholder="MM"
              id="month"
              required
              className={
                !error
                  ? "border outline-none border-[hsl(0,0%,86%)] p-2 rounded-lg w-[90%] font-bold text-xl sm:text-3xl text-[hsl(0,0%,8%)]"
                  : "border outline-none border-[hsl(0,100%,67%)] p-2 rounded-lg w-[90%] font-bold text-xl sm:text-3xl text-[hsl(0,0%,8%)]"
              }
            />
            {error ? (
              <p className="text-xs text-[hsl(0,100%,67%)] mt-1">
                {errorMessage}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col">
            <label
              className={
                !error
                  ? "text-xs mb-1 font-bold text-[hsl(0,1%,44%)]"
                  : "text-xs mb-1 font-bold text-[hsl(0,100%,67%)]"
              }
            >
              YEAR
            </label>
            <input
              type="text"
              pattern="[0-9]+"
              placeholder="YYYY"
              id="year"
              required
              className={
                !error
                  ? "border outline-none border-[hsl(0,0%,86%)] p-2 rounded-lg w-[90%] font-bold text-xl sm:text-3xl text-[hsl(0,0%,8%)]"
                  : "border outline-none border-[hsl(0,100%,67%)] p-2 rounded-lg w-[90%] font-bold text-xl sm:text-3xl text-[hsl(0,0%,8%)]"
              }
            />
            {error ? (
              <p className="text-xs text-[hsl(0,100%,67%)] mt-1">
                {errorMessage}
              </p>
            ) : null}
          </div>
        </div>
        <div className="flex mx-8">
          <div className="w-[85%] my-auto">
            <hr className="border" />
          </div>
          <div
            className="rounded-full bg-[hsl(259,100%,65%)] hover:bg-[hsl(0,0%,8%)] hover:cursor-pointer w-16 h-16 flex items-center justify-center"
            onClick={getAge}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="44"
              viewBox="0 0 46 44"
            >
              <g fill="none" stroke="#fff" strokeWidth="2">
                <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
              </g>
            </svg>
          </div>
        </div>
        <div className="flex flex-col mx-8 mt-8">
          <p className=" text-5xl sm:text-7xl font-extrabold italic text-[hsl(0,0%,8%)]">
            <span className="text-[hsl(259,100%,65%)]">{age.years} </span> years
          </p>
          <p className=" text-5xl sm:text-7xl font-extrabold italic  text-[hsl(0,0%,8%)]">
            <span className="text-[hsl(259,100%,65%)]">{age.months} </span>
            months
          </p>
          <p className="text-5xl sm:text-7xl font-extrabold italic  text-[hsl(0,0%,8%)]">
            <span className="text-[hsl(259,100%,65%)]">{age.days} </span>days
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
