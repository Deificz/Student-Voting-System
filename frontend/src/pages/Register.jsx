import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Text from "../components/form comps/register/type_text";
import Password from "../components/form comps/register/type_password";
import Email from "../components/form comps/register/type_email";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/Auth";

export default function Register() {
  const [studentNum, setStudentNum] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isRegistered, register_status } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    signup(studentNum, email, firstName, lastName, middleName, password);
  };

  useEffect(() => {
    if (isRegistered) {
      navigate("/signin", { replace: true });
    }
  }, [isRegistered]);
  return (
    <>
      <Header />

      <div className="flex flex-col items-center h-[110dvh] mt-16 md:mt-32 2xl:mt-48 transition-all duration-300">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:grid grid-cols-2 justify-center w-[80dvw] h-fit  border-color-blue border-4 p-6 md:p-10 2xl:p-14  rounded-xl shadow-card"
        >
          <h1 className="self-center mb-10 text-3xl font-bold text-color-blue md:text-3xl 2xl:text-5xl">
            Student Sign-up
          </h1>
          <Text stud_num={true} setStudentNum={setStudentNum} />
          <Text first_name={true} setFirstName={setFirstName} />
          <Text middle_name={true} setMiddleName={setMiddleName} />
          <Text last_name={true} setLastName={setLastName} />
          <Email setEmail={setEmail} />
          <Password setPassword={setPassword} />
          <h1
            className={`text-color-red font-bold ${
              register_status === 'Error' ? "visible" : "invisible"
            } md:text-xl 2xl:text-2xl`}
          >
            Student number is already registered or the email has already been used.
          </h1>
          <button
            type="submit"
            onSubmit={() => navigate("/option")}
            className="col-start-2 row-start-6 px-16 py-5 mt-5 text-xl font-semibold text-white transition-all duration-300 border-2 rounded-lg bg-color-blue 2xl:p-8 2xl:text-3xl shadow-button md:w-fit justify-self-end hover:bg-white hover:text-color-blue border-color-blue"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
