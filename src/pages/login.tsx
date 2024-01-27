import useAppContext from "@/context";
import useAuth from "@/hooks/useAuth";
import useMutation from "@/hooks/useMutation";
import { Field, Form, Formik, FormikHelpers } from "formik";
import Link from "next/link";
import { BiLogoFacebook } from "react-icons/bi";
import { FaGooglePlusG, FaInstagram } from "react-icons/fa6";
import { toast } from "react-toastify";
import * as Yup from "yup";
const Login = () => {
  const { isLogin, setIsLogin } = useAppContext();
  const { getUser } = useAuth();
  const { mutation, isLoading } = useMutation();
  const LoginSchema = Yup.object({
    emailOrUsername: Yup.string().required("This field is required"),
    password: Yup.string().required("This field is required"),
  });
  const handleFormSubmit = async (
    values: any,
    { resetForm }: FormikHelpers<any>
  ) => {
    console.log(values);
    try {
      const res = await mutation(`user/login`, {
        method: "POST",
        body: {
          email: values?.emailOrUsername,
          password: values?.password,
        },
        isAlert: true,
      });
      if (res?.status === 200) {
        toast.success("Login SuccessFully");
        // resetForm();
        return;
      }
      toast.error(res?.results?.msg);

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full h-screen flex itm">
      <div className="w-[68%] bg-slate-100 h-full p-10">
        <img
          src="/register/login.png"
          className="w-full h-full object-contain"
          alt=""
        />
      </div>
      <div className="w-[32%]  h-full  ">
        <div className="w-full h-full flex  justify-center px-10 flex-col  gap-10">
          <img
            src="/logo.png"
            className="w-[20rem] h-fit object-contain"
            alt=""
          />
          <div className="w-full flex flex-col gap-10">
            <p className="flex flex-col gap-1">
              <span className="text-gray-700 text-lg font-medium">
                Welcome to Terracotta Craft! 👋
              </span>
              <span className="text-sm text-gray-400">
                Please sign-in to your account and start the adventure.
              </span>
            </p>
            <Formik
              initialValues={{
                emailOrUsername: "",
                password: "",
                rememberMe: false,
              }}
              validationSchema={LoginSchema}
              onSubmit={handleFormSubmit}
            >
              {({ errors, touched }) => (
                <Form className="w-full flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="uppercase text-xs font-medium px-1 text-gray-500">
                      EMAIL OR USERNAME
                    </label>
                    <Field
                      type="text"
                      name="emailOrUsername"
                      className={`outline-none border ${
                        touched.emailOrUsername && errors.emailOrUsername
                          ? "border-red-500"
                          : "border-gray-200"
                      } px-4 py-3 rounded-lg placeholder:text-sm`}
                      placeholder="Enter email or username"
                    />
                    {touched.emailOrUsername && errors.emailOrUsername && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.emailOrUsername}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="uppercase text-xs flex items-center justify-between font-medium px-1 text-gray-500">
                      <span>Password</span>
                      <span className="capitalize text-primary cursor-pointer">
                        Forgot password?
                      </span>
                    </p>
                    <Field
                      type="password"
                      name="password"
                      className={`outline-none border ${
                        touched.password && errors.password
                          ? "border-red-500"
                          : "border-gray-200"
                      } px-4 py-3 rounded-lg placeholder:text-sm`}
                      placeholder="Enter your password..."
                    />
                    {touched.password && errors.password && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.password}
                      </p>
                    )}
                  </div>
                  <p className="flex items-center gap-2 px-1">
                    <input
                      type="checkbox"
                      className=" outline-none w-4 h-4 border border-primary  shadow shadow-primary"
                      name=""
                      id="check"
                    />
                    <label
                      htmlFor="check"
                      className="text-sm cursor-pointer text-gray-500 font-medium"
                    >
                      Remember me
                    </label>
                  </p>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center py-2.5 shadow-md text-sm font-medium text-white bg-primary rounded-lg"
                  >
                    {isLoading ? (
                      <div role="status">
                        <svg
                          aria-hidden="true"
                          className="inline w-4 h-4 text-gray-200 animate-spin  fill-blue-600"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <span className="sr-only">Loading...</span>
                      </div>
                    ) : (
                      `Sign In`
                    )}
                  </button>
                  <p className=" w-full flex items-center justify-center gap-2">
                    <span className="text-sm text-gray-400">
                      {`Don't have an account ?`}
                    </span>
                    <Link
                      href="/register"
                      className="text-sm font-medium text-primary cursor-pointer"
                    >
                      Create an account
                    </Link>
                  </p>
                  <p className="w-full flex items-center justify-center gap-2">
                    <span className="h-[0.1rem] w-40 bg-gray-200  "></span>
                    <span className="text-xs text-gray-400 ">or</span>
                    <span className="h-[0.1rem] w-40 bg-gray-200  "></span>
                  </p>
                  <div className="w-full flex items-center justify-center gap-4">
                    <p className="w-10 h-10 flex items-center justify-center rounded-md text-facebook bg-facebook/20 cursor-pointer text-xl">
                      <BiLogoFacebook />
                    </p>
                    <p className="w-10 h-10 flex items-center justify-center rounded-md text-red-500 bg-red-50 cursor-pointer text-xl">
                      <FaGooglePlusG />
                    </p>
                    <p className="w-10 h-10 flex items-center justify-center rounded-md text-instagram bg-instagram/20  cursor-pointer text-xl">
                      <FaInstagram />
                    </p>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
