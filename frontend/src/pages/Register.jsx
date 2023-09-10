import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Text from "../components/form comps/register/type_text";
import Password from "../components/form comps/register/type_password";
import Email from "../components/form comps/register/type_email";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/Auth";

export default function Register() {
  const [studentNum, setStudentNum] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    signup,
    isAuthenticated,
    hasRegisteredSuccessfully,
    setHasRegisteredSuccessfully,
  } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    signup(studentNum, email, firstName, lastName, middleName, password);
  };
  // useEffect(
  //   function () {
  //     if (hasRegisteredSuccessfully) {
  //       navigate("/signin", { replace: true });
  //     setHasRegisteredSuccessfully(false);

  //     }
  //   }[hasRegisteredSuccessfully]
  // );
  useEffect(() => {
    if (hasRegisteredSuccessfully) {
      navigate("/signin", { replace: true });
      setHasRegisteredSuccessfully(false);
    }
  }, [hasRegisteredSuccessfully]);
  return (
    <>
      <Header />

      <div className="flex flex-col items-center h-[110dvh] mt-16 md:mt-32 2xl:mt-48 transition-all duration-300">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:grid grid-cols-2 justify-center w-[80dvw] h-fit  border-color-blue border-4 p-6 md:p-10 2xl:p-14  rounded-xl shadow-card"
        >
          <h1 className="text-color-blue font-bold mb-10 text-3xl self-center md:text-3xl 2xl:text-5xl">
            Student Sign-up
          </h1>
          <Text stud_num={true} setStudentNum={setStudentNum} />
          <Text first_name={true} setFirstName={setFirstName} />
          <Text middle_name={true} setMiddleName={setMiddleName} />
          <Text last_name={true} setLastName={setLastName} />
          <Email setEmail={setEmail} />
          <Password setPassword={setPassword} />
          <button
            type="submit"
            onSubmit={() => navigate("/option")}
            className="bg-color-blue px-16 py-5 mt-5 text-xl 2xl:p-8 2xl:text-3xl shadow-button md:w-fit text-white font-semibold rounded-lg justify-self-end hover:bg-white hover:text-color-blue border-color-blue border-2 transition-all duration-300 col-start-2 row-start-6"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
