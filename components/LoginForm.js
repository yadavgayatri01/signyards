// components/LoginForm.js

import React from "react";
import { Formik, Form, Field } from "formik";
import { formFields } from "../public/constants";

const LoginForm = () => {
  const initialValues = {};

  formFields.forEach((section) => {
    section.fields.forEach((field) => {
      initialValues[field.name] = field.defaultValue;
    });
  });

  const handleSubmit = (values) => {
    // Handle form submission here
    console.log(values);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className="max-w-screen-xl mx-auto p-4">
        {formFields.map((section, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
            <h2 className="text-xl font-semibold mb-4">{section.heading}</h2>
            <div className="grid grid-cols-2 gap-4">
              {section.fields.map((field, fieldIndex) => (
                <div key={field.name} className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-1"
                    htmlFor={field.name}
                  >
                    {field.label}
                  </label>
                  <div className="relative">
                    {field.type === "textarea" ? (
                      <Field
                        as="textarea"
                        name={field.name}
                        className="w-3/4 border rounded p-2 focus:outline-none focus:ring focus:border-blue-500"
                      />
                    ) : field.type === "select" ? (
                      <Field
                        as="select"
                        name={field.name}
                        className="w-3/4 border rounded p-2 focus:outline-none focus:ring focus:border-blue-500"
                      >
                        {field.options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </Field>
                    ) : field.type === "file" ? (
                      <Field
                        type="file"
                        name={field.name}
                        className="w-3/4 p-2 focus:outline-none"
                      />
                    ) : (
                      <Field
                        type="text"
                        name={field.name}
                        className="w-3/4 border rounded p-2 focus:outline-none focus:ring focus:border-blue-500"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
  // return (
  //   <Formik initialValues={initialValues} onSubmit={handleSubmit}>
  //     <Form className="max-w-screen-xl mx-auto p-4">
  //       {formFields.map((section, index) => (
  //         <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
  //           <h2 className="text-xl font-semibold">{section.heading}</h2>
  //           <div className="grid grid-cols-2 gap-4">
  //             {section.fields.map((field, fieldIndex) => (
  //               <div key={field.name} className="mb-4">
  //                 <label
  //                   className="block text-gray-700 text-sm font-bold mb-1"
  //                   htmlFor={field.name}
  //                 >
  //                   {field.label}
  //                 </label>
  //                 {field.type === "textarea" ? (
  //                   <Field
  //                     as="textarea"
  //                     name={field.name}
  //                     className="w-full border rounded p-2"
  //                   />
  //                 ) : field.type === "select" ? (
  //                   <Field
  //                     as="select"
  //                     name={field.name}
  //                     className="w-full border rounded p-2"
  //                   >
  //                     {field.options.map((option) => (
  //                       <option key={option} value={option}>
  //                         {option}
  //                       </option>
  //                     ))}
  //                   </Field>
  //                 ) : field.type === "file" ? (
  //                   <Field type="file" name={field.name} className="w-full" />
  //                 ) : (
  //                   <Field
  //                     type="text"
  //                     name={field.name}
  //                     className="w-full border rounded p-2"
  //                   />
  //                 )}
  //               </div>
  //             ))}
  //           </div>
  //         </div>
  //       ))}
  //       <button
  //         type="submit"
  //         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  //       >
  //         Submit
  //       </button>
  //     </Form>
  //   </Formik>
  // );
};

export default LoginForm;
