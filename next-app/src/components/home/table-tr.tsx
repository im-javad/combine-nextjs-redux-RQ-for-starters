import * as React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { LiaEdit } from "react-icons/lia";
import { DatabaseUsers } from "@/types/homePage";
import UpdatingEmployeeModule from "./updatingEmployeeModule";

const TableTr: React.FunctionComponent<DatabaseUsers> = ({
  id,
  name,
  avatar,
  email,
  salary,
  date,
  status,
}) => {
  const [updateModuleStatus, setUpdateModuleStatus] = React.useState<boolean>(false);

  const handleSubmitUpdateForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      {updateModuleStatus &&
        UpdatingEmployeeModule(setUpdateModuleStatus, handleSubmitUpdateForm, {
          id,
          name,
          avatar,
          email,
          salary,
          date,
          status,
        })}

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
