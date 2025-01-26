import React from "react";
import { useForm } from "react-hook-form";

const InputField = ({ label, placeholder, width, register, name, rules }) => {
  return (
    <div className={`flex flex-col ${width || "w-[50%]"} p-4`}>
      <label className="font-bold">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="border border-gray-300 rounded-md px-3 py-2 mt-1 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400 flex-grow placeholder-normal"
        {...register(name, rules)}
      />
    </div>
  );
};

const ContactItem = ({ icon, title, content }) => (
  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
    <div className="flex flex-col grow mt-2.5 tracking-tight text-gray-900 max-md:mt-10">
      <div className="flex gap-5 text-2xl font-bold leading-9">
        <img src={icon} alt="" className="shrink-0 aspect-square w-[54px]" />
        <h3 className="flex-auto self-start">{title}</h3>
      </div>
      <div className="pr-2px flex-auto self-start text-xl leading-8 px-20 w-auto">
        {content}
      </div>
    </div>
  </div>
);

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log("Submit data >> ", data);

      reset();
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again later.");
    }
  };

  const contactData = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/18179b6ac038d84423d4ee4c96386281587fa212096dec52fd422ee065082649?apiKey=597363a3080546f9b072bf59bebbfd17&",
      title: "Call us",
      content: (
        <>
          +1-940-394-2948
          <br />
          +1-389-385-3807
        </>
      ),
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c9791065adc6c16870ff4a2dc0b81db91ca10e8583d26b74df0f342958a2a420?apiKey=597363a3080546f9b072bf59bebbfd17&",
      title: "Email us",
      content: (
        <>
          support@brainwave.io
          <br />
          contact@brainwave.io
        </>
      ),
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f06f2bccb9b07bf8a8046586bd9f211dbb71be297a47e5dd6d80a6ee9193342?apiKey=597363a3080546f9b072bf59bebbfd17&",
      title: "Visit us",
      content: (
        <>
          34 Madison Street,
          <br />
          NY, USA 10005
        </>
      ),
    },
  ];

  return (
    <div className="container mx-auto h-screen flex justify-center items-center p-10">
      <div className="bg-[#F4F7FA] px-10 py-10 max-w-[1250px] w-full rounded-2xl">
        <section className="flex flex-col px-10 text-center text-gray-900 max-w-[1266px] w-full flex-nowrap justify-center items-center">
          <h1 className="self-center text-6xl font-bold tracking-tighter leading-[64.8px] max-md:text-4xl pt-8">
            Contact us
          </h1>
          <p className="mt-16 w-full text-xl tracking-normal leading-8 max-w-[650px]">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next consultancy website within few minutes.
          </p>
        </section>
        <section className=" py-20">
          <div className="flex gap-8 max-md:flex-col max-md:gap-0">
            {contactData.map((item, index) => (
              <ContactItem
                key={index}
                icon={item.icon}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>
        </section>
        <section className="flex flex-col px-11 py-12 text-base font-bold tracking-normal leading-6 text-gray-900 rounded-xl shadow-2xl max-md:px-5 bg-white">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-wrap justify-center items-center"
          >
            <div className="flex w-full max-w-[1000px] justify-between">
              <InputField
                label="First Name & Last Name"
                placeholder="i.e. John Smith"
                width="w-[48%]"
                register={register}
                name="name"
                rules={{ required: "This field is required" }}
              />
              <InputField
                label="Email"
                placeholder="i.e. john@mail.com"
                width="w-[48%]"
                register={register}
                name="email"
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                }}
              />
            </div>
            <div className="flex w-full max-w-[1000px] justify-between ">
              <InputField
                label="Phone Number"
                placeholder="i.e. +1-234-567-7890"
                width="w-[48%]"
                register={register}
                name="phone"
                rules={{ required: "Phone number is required" }}
              />
              <InputField
                label="Subject"
                placeholder="i.e. I need help"
                width="w-[48%]"
                register={register}
                name="subject"
                rules={{ required: "Subject is required" }}
              />
            </div>
            <InputField
              label="Message"
              placeholder="i.e. Type your message here."
              width="w-[93%]"
              register={register}
              name="message"
              rules={{ required: "Message is required" }}
            />
            <div className="flex justify-start max-md:max-w-full w-[90%] pt-8">
              <button
                type="submit"
                className="text-lg tracking-tight leading-8 text-center text-white bg-indigo-600 rounded-lg max-w-[300px] max-md:px-5 h-18 px-16 py-3 w-[200px]"
              >
                Send
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
