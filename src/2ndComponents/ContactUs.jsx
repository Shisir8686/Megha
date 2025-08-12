import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useRef, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import receptionImg from "../assets/Images/reception.jpg";

export default function ContactUs() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const formRef = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [formType, setFormType] = useState("student"); 

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const onSubmit = (data) => {
    // Determine which template to use based on form type
    const templateId = formType === "student" 
      ? "template_zhov0ru" 
      : "template_zhov0ru"; // You might want to create a different template for outsiders
    
    emailjs.sendForm(
      "service_qvcu6fs",
      templateId,
      formRef.current,
      "4G798peRwWvT7Yyy9"
    ).then(() => {
      setSubmitted(true);
      reset();
    }).catch((error) => {
      alert("Failed to send form. Try again later.");
      console.error(error);
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-pink-100 px-4 py-14 my-12">
      {!submitted ? (
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-3xl transition-all" data-aos="fade-up">
         
          <div className="flex justify-center mb-6">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                type="button"
                onClick={() => setFormType("student")}
                className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                  formType === "student"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                Student Enquiry
              </button>
              <button
                type="button"
                onClick={() => setFormType("outsider")}
                className={`px-4 py-2 text-sm font-medium rounded-r-md ${
                  formType === "outsider"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                Public Enquiry
              </button>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <img
              src={receptionImg}
              alt="Reception"
              className="rounded-lg mb-4 w-full max-w-[400px] object-cover"
              data-aos="zoom-in"
            />
          </div>

          {formType === "student" ? (
            <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
              <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-1">
                Send us an enquiry mail
              </h2>
              <p className="text-center text-sm sm:text-base text-gray-600 mb-6">
                and our receptionist will contact you as soon as possible.
              </p>

              <div>
                <label className="block mb-1 font-medium">Full Name:</label>
                <input
                  {...register("user_name", { required: true })}
                  name="user_name"
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
                />
                {errors.user_name && <p className="text-red-500 text-sm">Full name is required.</p>}
              </div>

              <div>
                <label className="block mb-1 font-medium">Gender:</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-1">
                    <input {...register("gender", { required: true })} type="radio" value="Male" /> Male
                  </label>
                  <label className="flex items-center gap-1">
                    <input {...register("gender", { required: true })} type="radio" value="Female" /> Female
                  </label>
                  <label className="flex items-center gap-1">
                    <input {...register("gender", { required: true })} type="radio" value="Other" /> Other
                  </label>
                </div>
                {errors.gender && <p className="text-red-500 text-sm">Gender is required.</p>}
              </div>

              <div>
                <label className="block mb-1 font-medium">Previous School Name:</label>
                <input
                  {...register("school_name", { required: true })}
                  name="school_name"
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="Enter previous school name"
                />
                {errors.school_name && <p className="text-red-500 text-sm">This field is required.</p>}
              </div>

              <div>
                <label className="block mb-1 font-medium">Phone Number:</label>
                <input
                  {...register("phone", {
                    required: true,
                    pattern: /^[0-9]{10}$/
                  })}
                  name="phone"
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="Enter 10-digit phone number"
                />
                {errors.phone && <p className="text-red-500 text-sm">Valid 10-digit phone number required.</p>}
              </div>

              <div>
                <label className="block mb-1 font-medium">Email Address:</label>
                <input
                  {...register("user_email", { required: true })}
                  name="user_email"
                  type="email"
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="Enter your email"
                />
                {errors.user_email && <p className="text-red-500 text-sm">Valid email required.</p>}
              </div>

              <div>
                <label className="block mb-1 font-medium">Inquiry About:</label>
                <select
                  {...register("inquiry_about", { required: true })}
                  name="inquiry_about"
                  className="w-full border border-gray-300 p-2 rounded"
                >
                  <option value="">-- Select an option --</option>
                  <option>Management</option>
                  <option>Computer Management</option>
                  <option>Science</option>
                  <option>Computer Science</option>
                  <option>Hotel Management</option>
                  <option>Diploma in Hotel Management</option>
                  <option>Law</option>
                </select>
                {errors.inquiry_about && <p className="text-red-500 text-sm">Please select a field.</p>}
              </div>

              <div>
                <label className="block mb-1 font-medium">Additional Message (optional):</label>
                <textarea
                  {...register("message")}
                  name="message"
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="Write something..."
                  rows={4}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-transform transform hover:scale-105 mt-4"
              >
                Submit
              </button>
            </form>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
              <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-1">
                Contact Us - For Outsiders
              </h2>
              <p className="text-center text-sm sm:text-base text-gray-600 mb-6">
                Please fill out the form below and we'll get back to you as soon as possible.
              </p>

              <div>
                <label className="block mb-1 font-medium">Full Name:</label>
                <input
                  {...register("user_name", { required: true })}
                  name="user_name"
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
                />
                {errors.user_name && <p className="text-red-500 text-sm">Full name is required.</p>}
              </div>

              <div>
                <label className="block mb-1 font-medium">Phone Number:</label>
                <input
                  {...register("phone", {
                    required: true,
                    pattern: /^[0-9]{10}$/
                  })}
                  name="phone"
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="Enter 10-digit phone number"
                />
                {errors.phone && <p className="text-red-500 text-sm">Valid 10-digit phone number required.</p>}
              </div>

              <div>
                <label className="block mb-1 font-medium">Email Address:</label>
                <input
                  {...register("user_email", { required: true })}
                  name="user_email"
                  type="email"
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="Enter your email"
                />
                {errors.user_email && <p className="text-red-500 text-sm">Valid email required.</p>}
              </div>

              <div>
                <label className="block mb-1 font-medium">Address:</label>
                <input
                  {...register("address", { required: true })}
                  name="address"
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="Enter your address"
                />
                {errors.address && <p className="text-red-500 text-sm">Address is required.</p>}
              </div>

              <div>
                <label className="block mb-1 font-medium">Message:</label>
                <textarea
                  {...register("message", { required: true })}
                  name="message"
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="Write your message here..."
                  rows={4}
                />
                {errors.message && <p className="text-red-500 text-sm">Message is required.</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-transform transform hover:scale-105 mt-4"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      ) : (
        <div className="text-center p-8 bg-white rounded-lg shadow-md animate-fade-in" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-green-600">Thank you!</h2>
          <p className="mt-2">Your enquiry has been submitted successfully. We'll get back to you soon.</p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormType("student");
            }}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-300"
          >
            Submit Another Enquiry
          </button>
          <button
            onClick={() => window.location.href = '/'}
            className="mt-4 ml-4 bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition-all duration-300"
          >
            Back to Home Page
          </button>
        </div>
      )}
    </div>
  );
}
