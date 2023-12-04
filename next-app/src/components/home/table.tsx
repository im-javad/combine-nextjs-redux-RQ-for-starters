import { FaTrashAlt } from "react-icons/fa";
import { LiaEdit } from "react-icons/lia";

function Table() {
  return (
    <table className="border-collapse w-full mt-5">
      <thead>
        <tr>
          <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 hidden lg:table-cell">
            Name
          </th>
          <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 hidden lg:table-cell">
            Email
          </th>
          <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 hidden lg:table-cell">
            Salary
          </th>
          <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 hidden lg:table-cell">
            Birthday
          </th>
          <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 hidden lg:table-cell">
            Status
          </th>
          <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 hidden lg:table-cell">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
          <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
            <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
              Name
            </span>
            Javad
          </td>
          <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
            <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
              Email
            </span>
            javad@gmail.com
          </td>
          <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
            <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
              Salary
            </span>
            $20000
          </td>
          <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
            <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
              Birthday
            </span>
            2005-07-02
          </td>
          <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
            <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
              Status
            </span>
            <span className="rounded-md bg-green-500 py-1 px-3 text-xs font-bold">
              success
            </span>
          </td>
          <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
            <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
              Actions
            </span>
            <div className="flex justify-evenly items-center">
              <a href="#" className="text-cyan-700">
                <LiaEdit size={24} />
              </a>
              <a href="#" className=" text-red-700">
                <FaTrashAlt size={19} />
              </a>
            </div>
          </td>
        </tr>
        <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
          <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
            <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
              Name
            </span>
            Javad
          </td>
          <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
            <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
              Email
            </span>
            javad@gmail.com
          </td>
          <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
            <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
              Salary
            </span>
            $20000
          </td>
          <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
            <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
              Birthday
            </span>
            2005-07-02
          </td>
          <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
            <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
              Status
            </span>
            <span className="rounded-md bg-red-500 py-1 px-3 text-xs font-bold">
              delete
            </span>
          </td>
          <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
            <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
              Actions
            </span>
            <div className="flex justify-evenly items-center">
              <a href="#" className="text-cyan-700">
                <LiaEdit size={24} />
              </a>
              <a href="#" className=" text-red-700">
                <FaTrashAlt size={19} />
              </a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
