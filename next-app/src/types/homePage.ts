export type FormState = {
  firstname: string;
  lastname: string;
  email: string;
  salary: number | "";
  date: Date | "";
  status: "Active" | "Inactive" | "";
};

export type ActionsType =
  | "SET_FIRST_NAME"
  | "SET_LAST_NAME"
  | "SET_EMAIL"
  | "SET_SALARY"
  | "SET_DATE"
  | "SET_STATUS";

export type FormAction =
  | { type: "SET_FIRST_NAME"; payload: string }
  | { type: "SET_LAST_NAME"; payload: string }
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_SALARY"; payload: number | "" }
  | { type: "SET_DATE"; payload: Date | "" }
  | { type: "SET_STATUS"; payload: "Active" | "Inactive" | "" }
  | { type: "RESET" };

export type DatabaseUsers = {
  id: number;
  name: string;
  avatar: string;
  email: string;
  salary: number;
  date: string;
  status: string;
};
