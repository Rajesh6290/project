import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { BiCurrentLocation } from "react-icons/bi";
// import { COUNTRIES } from "./CustomerRegister";
// import { useAuth, useMutation, useSwr } from "@/hooks";
// import { LoadingButton } from "../common";
import { toast } from "react-toastify";

const AddressFormSchema = Yup.object().shape({
  name: Yup.string().required("Full Name is required"),
  phoneNumber: Yup.string().required("Phone Number is required"),
  pincode: Yup.string().required("Pincode is required"),
  state: Yup.string().required("State is required"),
  landmark: Yup.string(),
  address: Yup.string().required("Address is required"),
  country: Yup.string().required("Country is required"),
  city: Yup.string().required("City is required"),
  location: Yup.string().required("Address Type is required"), // Update "location" to string
});

interface FormProps {
  showForm: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddAddressForm: React.FC<FormProps> = ({ showForm, setShowForm }) => {
  //   const { mutation, isLoading } = useMutation();
  //   const { mutate } = useSwr("addresses");
  const formik = useFormik({
    initialValues: {
      name: "",
      phoneNumber: "",
      pincode: "",
      state: "",
      landmark: "",
      address: "",
      country: "",
      city: "",
      location: "home", // Default to "home"
    },
    validationSchema: AddressFormSchema,
    onSubmit: async (values, { resetForm }) => {
      //   try {
      //     const res = await mutation("addresses", {
      //       method: "POST",
      //       body: {
      //         name: values?.name,
      //         type: values?.location,
      //         phone: values?.phoneNumber,
      //         zip: values?.pincode,
      //         city: values?.city,
      //         state: values?.state,
      //         country: values?.country,
      //         addressLineOne: values?.address,
      //         landmark: values?.landmark,
      //       },
      //       isAlert: true,
      //     });
      //     console.log(res);
      //     if (res?.status === 200) {
      //       toast.success(res?.results?.msg);
      //       mutate();
      //       setShowForm(false);
      //     } else if (res?.status === 422) {
      //       toast.error(res?.results?.msg);
      //     } else if (res?.status === 500) {
      //       toast.error(res?.results?.msg);
      //     } else {
      //       toast.error(res?.results?.msg);
      //     }
      //   } catch (error) {
      //     console.log(error);
      //   } finally {
      //     resetForm();
      //   }
    },
  });
  return (
    <motion.form
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      // Smoothly fade out

      onSubmit={formik.handleSubmit}
      className=" bg-white"
    >
      <div className=" ring-1 outline-none p-4 rounded-md ring-gray-300 ">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => setShowForm(!showForm)}
            className="text-red-500 px-6 py-1 rounded-xl font-semibold border border-red-500 cancel-button"
          >
            Close
          </button>
        </div>
        <div className="flex flex-col gap-2 ">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="mb-4 w-full">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className={`w-full py-4 ring-1 outline-none p-2 text-gray-500 rounded-md ring-gray-300 focus:ring-blue-400 ${
                  formik.errors.name && formik.touched.name
                    ? "border-red-500"
                    : ""
                }`}
                {...formik.getFieldProps("name")}
              />
              {formik.errors.name && formik.touched.name ? (
                <div className="text-red-500 text-xs italic">
                  {formik.errors.name}
                </div>
              ) : null}
            </div>
            <div className=" w-full">
              <label
                htmlFor="phoneNumber"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your Phone Number"
                className={`w-full py-4 ring-1 outline-none p-2 text-gray-500 rounded-md ring-gray-300 focus:ring-blue-400 ${
                  formik.errors.phoneNumber && formik.touched.phoneNumber
                    ? "border-red-500"
                    : ""
                }`}
                {...formik.getFieldProps("phoneNumber")}
              />
              {formik.errors.phoneNumber && formik.touched.phoneNumber ? (
                <div className="text-red-500 text-xs italic">
                  {formik.errors.phoneNumber}
                </div>
              ) : null}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4"></div>

          <div className="mb-2 w-full">
            <label
              htmlFor="address"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your Address"
              className={`w-full py-4 ring-1 outline-none p-2 text-gray-500 rounded-md ring-gray-300 focus:ring-blue-400 ${
                formik.errors.address && formik.touched.address
                  ? "border-red-500"
                  : ""
              }`}
              {...formik.getFieldProps("address")}
            />
            {formik.errors.address && formik.touched.address ? (
              <div className="text-red-500 text-xs italic">
                {formik.errors.address}
              </div>
            ) : null}
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="mb-4 w-full">
              <label
                htmlFor="country"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Country <span className="text-red-500">*</span>
              </label>
              <select
                className={`w-full py-4 ring-1 outline-none p-2 text-gray-500 rounded-md ring-gray-300 focus:ring-blue-400 ${
                  formik.errors.country && formik.touched.country
                    ? "border-red-500"
                    : ""
                }`}
                {...formik.getFieldProps("country")}
              >
                <option value="">Select Country</option>
                {/* {COUNTRIES.map((country) => (
                  <option key={country.code} value={country.label}>
                    {country.phone}-{country.label}
                  </option>
                ))} */}
              </select>
              {formik.errors.country && formik.touched.country ? (
                <div className="text-red-500 text-xs italic">
                  {formik.errors.country}
                </div>
              ) : null}
            </div>

            <div className="mb-4 w-full">
              <label
                htmlFor="state"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                State <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your state"
                className={`w-full py-4 ring-1 outline-none p-2 text-gray-500 rounded-md ring-gray-300 focus:ring-blue-400 ${
                  formik.errors.state && formik.touched.state
                    ? "border-red-500"
                    : ""
                }`}
                {...formik.getFieldProps("state")}
              />

              {formik.errors.state && formik.touched.state ? (
                <div className="text-red-500 text-xs italic">
                  {formik.errors.state}
                </div>
              ) : null}
            </div>
            <div className="mb-4 w-full">
              <label
                htmlFor="city"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your City"
                className={`w-full py-4 ring-1 outline-none p-2 text-gray-500 rounded-md ring-gray-300 focus:ring-blue-400 ${
                  formik.errors.city && formik.touched.city
                    ? "border-red-500"
                    : ""
                }`}
                {...formik.getFieldProps("city")}
              />
              {formik.errors.city && formik.touched.city ? (
                <div className="text-red-500 text-xs italic">
                  {formik.errors.city}
                </div>
              ) : null}
            </div>
            <div className="mb-4 w-full">
              <label
                htmlFor="pincode"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Pincode <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your Pincode"
                className={`w-full py-4 ring-1 outline-none p-2 text-gray-500 rounded-md ring-gray-300 focus:ring-blue-400 ${
                  formik.errors.pincode && formik.touched.pincode
                    ? "border-red-500"
                    : ""
                }`}
                {...formik.getFieldProps("pincode")}
              />
              {formik.errors.pincode && formik.touched.pincode ? (
                <div className="text-red-500 text-xs italic">
                  {formik.errors.pincode}
                </div>
              ) : null}
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="landmark"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Landmark
            </label>
            <input
              type="text"
              placeholder="Enter your Landmark"
              className={`w-full py-4 ring-1 outline-none p-2 text-gray-500 rounded-md ring-gray-300 focus:ring-blue-400 ${
                formik.errors.landmark && formik.touched.landmark
                  ? "border-red-500"
                  : ""
              }`}
              {...formik.getFieldProps("landmark")}
            />
            {formik.errors.landmark && formik.touched.landmark ? (
              <div className="text-red-500 text-xs italic">
                {formik.errors.landmark}
              </div>
            ) : null}
          </div>
          <div className="">
            <label
              htmlFor="address"
              className=" block text-gray-700 text-sm font-bold "
            >
              Address Type -{" "}
            </label>
          </div>
          <div className="pb-4 flex flex-col md:flex-row gap- md:gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                id="home"
                name="location"
                value="home"
                checked={formik.values.location === "home"}
                onChange={() => formik.setFieldValue("location", "home")}
              />
              Home
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                id="office"
                name="location"
                value="office"
                checked={formik.values.location === "office"}
                onChange={() => formik.setFieldValue("location", "office")}
              />
              Office
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                id="other"
                name="location"
                value="other"
                checked={formik.values.location === "other"}
                onChange={() => formik.setFieldValue("location", "other")}
              />
              Other
            </label>
          </div>

          <div className="flex justify-center gap-4">
            {/* <LoadingButton title="Save" loading={isLoading} /> */}
          </div>
        </div>
      </div>
    </motion.form>
  );
};

export default AddAddressForm;
