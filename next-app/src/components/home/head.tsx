import { IoMdPersonAdd } from "react-icons/io";

const Head = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl font-bold mt-3">
          Employee Management
        </h1>
      </div>
      <div className="add-employe mt-8">
        <div className="header">
          <button className="bg-blue-700 px-4 py-2 rounded-md flex items-center">
            <span className="me-1">Add Employee</span>{" "}
            <IoMdPersonAdd size={20} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Head;
