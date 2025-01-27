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
    <div className="container mx-auto flex justify-center items-center px-6 py-10 md:px-10">
      <div className="bg-[#F4F7FA] px-6 py-8 md:px-10 md:py-12 max-w-[1250px] w-full rounded-2xl">
        {/* Header Section */}
        <section className="text-center text-gray-900 px-4 md:px-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.2] pt-4">
            Contact Us
          </h1>
          <p className="mt-6 text-lg md:text-xl tracking-normal leading-7 max-w-[650px] mx-auto">
            We are here to assist you. Feel free to reach out to us for inquiries or assistance regarding Sarah Homestay.
          </p>
        </section>

        {/* Contact Information Section */}
        <section className="py-12">
          <div className="flex flex-col md:flex-row gap-8 text-center md:text-left">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold">Our Location</h2>
              <p className="mt-2 text-lg">Wood Avenue, Kilimani</p>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold">Phone</h2>
              <p className="mt-2 text-lg">+254 701 946104</p>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold">Email</h2>
              <p className="mt-2 text-lg">sarahomestayke@gmail.com</p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-white px-6 py-8 md:px-12 md:py-12 rounded-xl shadow-lg">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-wrap justify-center gap-6"
          >
            <div className="flex flex-col w-full md:w-[48%]">
              <label
                htmlFor="name"
                className="text-sm font-bold mb-2 text-gray-700"
              >
                First Name & Last Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="i.e. John Smith"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div className="flex flex-col w-full md:w-[48%]">
              <label
                htmlFor="email"
                className="text-sm font-bold mb-2 text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="i.e. john@mail.com"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div className="flex flex-col w-full md:w-[48%]">
              <label
                htmlFor="phone"
                className="text-sm font-bold mb-2 text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="i.e. +1-234-567-7890"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div className="flex flex-col w-full md:w-[48%]">
              <label
                htmlFor="subject"
                className="text-sm font-bold mb-2 text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="i.e. I need help"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div className="flex flex-col w-full">
              <label
                htmlFor="message"
                className="text-sm font-bold mb-2 text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Type your message here."
                rows="5"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              ></textarea>
            </div>

            <div className="flex justify-center w-full pt-6">
              <button
                type="submit"
                className="text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg px-6 py-3 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
