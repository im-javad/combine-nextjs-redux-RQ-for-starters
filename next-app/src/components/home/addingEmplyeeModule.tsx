import * as React from "react";

type formDataType = {
  firstname: string;
  lastname: string;
  email: string;
  salary: number | null;
  status: "Active" | "Inactive" | "";
};

const formRaducer = (
  state: formDataType,
  e: React.FormEvent<HTMLInputElement>
) => {
  return {
    ...state,
    [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement).value,
  };
};

function AddingEmployeeModule() {
  const [formData, setFormData] = React.useReducer(formRaducer, {
    firstname: "",
    lastname: "",
    email: "",
    salary: null,
    status: "",
  });

  const handleFormSubmited = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div className="adding-module">
      <div className="module absolute top-[50%] left-[50%] border-2 rounded-md bg-slate-800 border-cyan-700 shadow-md min-w-[90%] xl:min-w-[65%] px-7 py-12 md:py-14">
        <div className="close-module cursor-pointer">✘</div>
        <form onSubmit={handleFormSubmited}>
          <div className="inputs w-full grid grid-cols-1 md:grid-cols-2 mb-5">
            <div className="input w-full md:w-[90%] mb-6">
              <input
                type="text"
                onChange={setFormData}
                name="firstname"
                placeholder="First Name"
                className=" focus:outline-none w-full bg-slate-800 text-yellow-400  pt-3 pb-1 px-2"
              />
            </div>
            <div className="input w-full md:w-[90%] mb-6">
              <input
                type="text"
                onChange={setFormData}
                name="lastname"
                placeholder="Last Name"
                className=" focus:outline-none w-full bg-slate-800 text-yellow-400 pt-3 pb-1 px-2"
              />
            </div>
            <div className="input w-full md:w-[90%] mb-6">
              <input
                type="text"
                onChange={setFormData}
                name="email"
                placeholder="Email"
                className=" focus:outline-none w-full bg-slate-800 text-yellow-400  pt-3 pb-1 px-2"
              />
            </div>
            <div className="input w-full md:w-[90%] mb-6">
              <input
                type="text"
                onChange={setFormData}
                name="salary"
                placeholder="Salary"
                className=" focus:outline-none w-full bg-slate-800 text-yellow-400  pt-3 pb-1 px-2"
              />
            </div>
          </div>
          <div className="section-two grid grid-cols-1 md:grid-cols-2">
            <div className="dates pb-6">
              <div className="input w-full md:w-[90%] mb-6">
                <input
                  type="date"
                  onChange={setFormData}
                  name="date"
                  className=" focus:outline-none w-full bg-slate-800 text-[aqua]  pt-3 pb-1 px-2 border-b-[1px] border-s-[1px] border-yellow-400 rounded-lg"
                />
              </div>
            </div>
            <div className="radios md:flex items-center pb-6">
              <span className=" text-yellow-500 pe-3">Choose Status: </span>
              <div className="radio flex items-center pe-2">
                <input
                  type="radio"
                  onChange={setFormData}
                  value="Active"
                  name="status"
                  id="activeRadio"
                  className="bg-white checked:bg-green-500 appearance-none border border-gray-700 rounded-full h-4 w-4"
                />
                <label htmlFor="activeRadio" className="text-cyan-300 ps-[2px]">
                  Active
                </label>
              </div>
              <div className="radio flex items-center">
                <input
                  type="radio"
                  onChange={setFormData}
                  value="Inactive"
                  name="status"
                  id="inactiveRadio"
                  className="bg-white checked:bg-red-500 appearance-none border border-gray-700 rounded-full h-4 w-4"
                />
                <label
                  htmlFor="inactiveRadio"
                  className="text-cyan-300 ps-[2px]"
                >
                  InActive
                </label>
              </div>
            </div>
          </div>
          <div className="add-btn flex justify-center">
            <button className=" bg-[#00a789] uppercase font-serif w-full md:w-1/2 p-[6px] rounded-md">
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddingEmployeeModule;
