// components/RegisterPersonalInfoForm.tsx
import React, { useMemo } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaChevronLeft, FaChevronRight, FaCheck } from "react-icons/fa6";

const RegisterPersonalInfoForm = ({
  storeData,
  selectForm,
  setSelectForm,
}: any) => {
  const initialValues = useMemo(
    () => ({
      name: storeData?.name,
      email: storeData?.email,
      countryCode: "",
      mobileNumber: "",
      state: "",
      city: "",
      address: "",
    }),
    [storeData?.name, storeData?.email]
  );

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    countryCode: Yup.string().required("Country Code is required"),
    mobileNumber: Yup.number().required("Mobile Number is required"),
    state: Yup.string().required("State is required"),
    city: Yup.string().required("City is required"),
    address: Yup.string().required("Address is required"),
  });

  const onSubmit = (values: any) => {
    // Handle form submission here
    console.log("Form submitted with values:", {
      storeData,
      values,
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize={true}
    >
      {({ touched, errors }) => (
        <Form className="flex flex-col gap-8 w-[70%] h-full ">
          <p className="flex flex-col gap-1">
            <span className="text-2xl text-gray-500 font-medium ">
              Personal Information
            </span>
            <span className="text-gray-400">Enter Your Personal Details</span>
          </p>
          <div className="flex items-center gap-5 w-full">
            <div className="flex flex-col gap-2 w-full">
              <p className="text-gray-500 uppercase text-sm font-medium">
                Name
              </p>
              <Field
                type="text"
                name="name"
                className={`outline-none border  placeholder:text-sm  rounded-md py-2 px-4 w-full ${
                  errors.name && touched.name
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Enter your name"
                dis
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <p className="text-gray-500 uppercase text-sm font-medium">
                Email
              </p>
              <Field
                type="email"
                name="email"
                className={`outline-none border placeholder:text-sm  rounded-md py-2 px-4 w-full ${
                  errors.email && touched.email
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Enter your email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
          </div>
          <div className="flex items-center gap-5 w-full">
            <div className="flex flex-col gap-2 w-full relative">
              <p className="text-gray-500 uppercase text-sm font-medium">
                Country Code
              </p>
              <Field
                type="text"
                name="countryCode"
                className={`outline-none border placeholder:text-sm  rounded-md py-2 px-4 w-full ${
                  errors.countryCode && touched.countryCode
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Enter your country code"
              />
              <ErrorMessage
                name="countryCode"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="flex flex-col gap-2 w-full relative">
              <p className="text-gray-500 uppercase text-sm font-medium">
                Mobile Number
              </p>
              <Field
                type="number"
                name="mobileNumber"
                className={`outline-none border placeholder:text-sm  rounded-md py-2 px-4 w-full ${
                  errors.mobileNumber && touched.mobileNumber
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Enter your mobile number"
              />
              <ErrorMessage
                name="mobileNumber"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
          </div>
          <div className="flex items-center gap-5 w-full">
            <div className="flex flex-col gap-2 w-full relative">
              <p className="text-gray-500 uppercase text-sm font-medium">
                State
              </p>
              <Field
                type="text"
                name="state"
                className={`outline-none border placeholder:text-sm  rounded-md py-2 px-4 w-full ${
                  errors.state && touched.state
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Enter your state"
              />
              <ErrorMessage
                name="state"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="flex flex-col gap-2 w-full relative">
              <p className="text-gray-500 uppercase text-sm font-medium">
                City
              </p>
              <Field
                type="text"
                name="city"
                className={`outline-none border placeholder:text-sm  rounded-md py-2 px-4 w-full ${
                  errors.city && touched.city
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Enter your city"
              />
              <ErrorMessage
                name="city"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
          </div>
          <div className="flex items-center gap-5 w-full">
            <div className="flex flex-col gap-2 w-full relative">
              <p className="text-gray-500 uppercase text-sm font-medium">
                Address
              </p>
              <Field
                type="text"
                name="address"
                className={`outline-none border placeholder:text-sm  rounded-md py-2 px-4 w-full ${
                  errors.address && touched.address
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Enter your address"
              />
              <ErrorMessage
                name="address"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
          </div>
          <div className="w-full flex items-center justify-between">
            <div
              onClick={() => setSelectForm("Account")}
              className={`flex items-center justify-center  rounded-lg px-6 py-3 
              ${
                selectForm === "Account"
                  ? ` bg-gray-200 text-gray-300 cursor-none`
                  : `bg-primary text-white cursor-pointer`
              }
              `}
            >
              <p className="flex items-center gap-3  ">
                <FaChevronLeft className="text-sm" />
                <span className=" tracking-wider">Previous</span>
              </p>
            </div>

            <button
              type="submit"
              className={` items-center justify-center bg-primary rounded-lg px-6 py-3 cursor-pointer
              
              `}
            >
              <p className="flex items-center gap-3 text-white font-medium">
                <FaCheck className="text-sm" />
                <span className=" tracking-wider">Submit</span>
              </p>
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterPersonalInfoForm;
