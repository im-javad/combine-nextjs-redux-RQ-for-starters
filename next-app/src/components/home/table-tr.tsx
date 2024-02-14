import * as React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { LiaEdit } from "react-icons/lia";
import { DatabaseUsers } from "@/types/homePage";

const TableTr: React.FunctionComponent<DatabaseUsers> = ({
  id,
  name,
  avatar,
  email,
  salary,
  date,
  status,
}) => {
  const [updateModuleStatus, setUpdateModuleStatus] = React.useState(false);

  const handleSubmitUpdateForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      {updateModuleStatus && (
        <div className="updating-module">
          <div className="module absolute top-[50%] left-[50%] border-2 rounded-md bg-slate-800 border-cyan-700 shadow-md min-w-[90%] xl:min-w-[65%] px-7 py-12 md:py-14">
            <div
              className="close-module cursor-pointer"
              onClick={(e) => setUpdateModuleStatus(false)}
            >
              ✘
            </div>
            <form onSubmit={handleSubmitUpdateForm}>
              <div className="inputs w-full grid grid-cols-1 md:grid-cols-2 mb-5">
                <div className="input w-full md:w-[90%] mb-6">
                  <input
                    type="text"
                    value={name}
                    // onChange={(e) => handleInputChange("SET_FIRST_NAME", e)}
                    name="firstname"
                    placeholder="First Name"
                    className=" focus:outline-none w-full bg-slate-800 text-yellow-400  pt-3 pb-1 px-2"
                  />
                </div>
                <div className="input w-full md:w-[90%] mb-6">
                  <input
                    type="text"
                    value="......"
                    // onChange={(e) => handleInputChange("SET_LAST_NAME", e)}
                    name="lastname"
                    placeholder="Last Name"
                    className=" focus:outline-none w-full bg-slate-800 text-yellow-400 pt-3 pb-1 px-2"
                  />
                </div>
                <div className="input w-full md:w-[90%] mb-6">
                  <input
                    type="text"
                    value="......"
                    // onChange={(e) => handleInputChange("SET_EMAIL", e)}
                    name="email"
                    placeholder="Email"
                    className=" focus:outline-none w-full bg-slate-800 text-yellow-400  pt-3 pb-1 px-2"
                  />
                </div>
                <div className="input w-full md:w-[90%] mb-6">
                  <input
                    type="text"
                    value="......."
                    // onChange={(e) => handleInputChange("SET_SALARY", e)}
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
                      // value={
                      //   formData.date
                      //     ? formData.date.toISOString().split("T")[0]
                      //     : ""
                      // }
                      value="....."
                      // onChange={(e) => handleInputChange("SET_DATE", e)}
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
                      // onChange={(e) => handleInputChange("SET_STATUS", e)}
                      value="Active"
                      name="status"
                      id="activeRadio"
                      className="bg-white checked:bg-green-500 appearance-none border border-gray-700 rounded-full h-4 w-4"
                    />
                    <label
                      htmlFor="activeRadio"
                      className="text-cyan-300 ps-[2px]"
                    >
                      Active
                    </label>
                  </div>
                  <div className="radio flex items-center">
                    <input
                      type="radio"
                      // onChange={(e) => handleInputChange("SET_STATUS", e)}
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
                  Update Employee
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <tr
        key={id}
        className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
      >
        <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
          <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
            Name
          </span>
          {name}
        </td>
        <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
          <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
            Email
          </span>
          {email}
        </td>
        <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
          <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
            Salary
          </span>
          {salary}
        </td>
        <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
          <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
            Birthday
          </span>
          {date}
        </td>
        <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
          <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
            Status
          </span>
          {status == "Active" ? (
            <span className="rounded-md bg-green-500 py-1 px-3 text-xs font-bold">
              success
            </span>
          ) : (
            <span className="rounded-md bg-red-500 py-1 px-3 text-xs font-bold">
              delete
            </span>
          )}
        </td>
        <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
          <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
            Actions
          </span>
          <div className="flex justify-evenly items-center">
            <a
              className="text-cyan-700 cursor-pointer"
              onClick={(e) => setUpdateModuleStatus(true)}
            >
              <LiaEdit size={24} />
            </a>
            <a href="#" className=" text-red-700">
              <FaTrashAlt size={19} />
            </a>
          </div>
        </td>
      </tr>
    </>
  );
};

export default TableTr;
