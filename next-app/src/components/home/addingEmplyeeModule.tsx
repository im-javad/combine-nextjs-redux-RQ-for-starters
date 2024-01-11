import { ActionsType, FormAction, FormState } from "@/types/homePage";
import * as React from "react";
import Swal from "sweetalert2";

const formRaducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case "SET_FIRST_NAME":
      return { ...state, firstname: action.payload };
    case "SET_LAST_NAME":
      return { ...state, lastname: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_SALARY":
      return { ...state, salary: action.payload };
    case "SET_DATE":
      return { ...state, date: action.payload };
    case "SET_STATUS":
      return { ...state, status: action.payload };
    case "RESET":
      return {
        firstname: "",
        lastname: "",
        email: "",
        salary: "",
        date: "",
        status: "",
      };
    default:
      return state;
  }
};

function AddingEmployeeModule() {
  const [formData, setFormData] = React.useReducer(formRaducer, {
    firstname: "",
    lastname: "",
    email: "",
    salary: "",
    date: "",
    status: "",
  });

  const handleInputChange = (
    type: ActionsType,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    switch (type) {
      case "SET_FIRST_NAME":
        setFormData({ type, payload: e.target.value });
        break;
      case "SET_LAST_NAME":
        setFormData({ type, payload: e.target.value });
        break;
      case "SET_EMAIL":
        setFormData({ type, payload: e.target.value });
        break;
      case "SET_SALARY":
        setFormData({ type, payload: parseFloat(e.target.value) || "" });
        break;
      case "SET_DATE":
        setFormData({ type, payload: e.target.valueAsDate || "" });
        break;
      case "SET_STATUS":
        setFormData({
          type,
          payload: e.target.value as "Active" | "Inactive" | "",
        });
        break;
      default:
        break;
    }
  };

  const handleFormSubmited = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { firstname, lastname, email, salary, date, status }: FormState =
      formData;

    firstname == "" ||
    lastname == "" ||
    email == "" ||
    salary == "" ||
    date == null ||
    status == ""
      ? Swal.fire({
          position: "top-end",
          icon: "error",
          title: "please fill the form",
          showConfirmButton: false,
          timer: 2500,
        })
      : (Swal.fire({
          position: "top-end",
          icon: "success",
          title: "employee added successfully",
          showConfirmButton: false,
          timer: 2500,
        }),
        setFormData({ type: "RESET" }));
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
                value={formData.firstname}
                onChange={(e) => handleInputChange("SET_FIRST_NAME", e)}
                name="firstname"
                placeholder="First Name"
                className=" focus:outline-none w-full bg-slate-800 text-yellow-400  pt-3 pb-1 px-2"
              />
            </div>
            <div className="input w-full md:w-[90%] mb-6">
              <input
                type="text"
                value={formData.lastname}
                onChange={(e) => handleInputChange("SET_LAST_NAME", e)}
                name="lastname"
                placeholder="Last Name"
                className=" focus:outline-none w-full bg-slate-800 text-yellow-400 pt-3 pb-1 px-2"
              />
            </div>
            <div className="input w-full md:w-[90%] mb-6">
              <input
                type="text"
                value={formData.email}
                onChange={(e) => handleInputChange("SET_EMAIL", e)}
                name="email"
                placeholder="Email"
                className=" focus:outline-none w-full bg-slate-800 text-yellow-400  pt-3 pb-1 px-2"
              />
            </div>
            <div className="input w-full md:w-[90%] mb-6">
              <input
                type="text"
                value={formData.salary}
                onChange={(e) => handleInputChange("SET_SALARY", e)}
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
                  value={
                    formData.date
                      ? formData.date.toISOString().split("T")[0]
                      : ""
                  }
                  onChange={(e) => handleInputChange("SET_DATE", e)}
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
                  onChange={(e) => handleInputChange("SET_STATUS", e)}
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
                  onChange={(e) => handleInputChange("SET_STATUS", e)}
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
