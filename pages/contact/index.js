import Layout from "@/components/Layout";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactPage() {
  const [state, handleSubmit] = useForm("xknkqenr");
  if (state.succeeded) {
    return <p>Thanks for Contacting! I will get in touch shortly!</p>;
  }
  return (
    <div>
      <Layout>
        <div className="flex items-center justify-center">
          <div className="container">
            <section className="relative text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col w-full mb-12 text-center">
                  <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
                    Contact Me
                  </h1>
                  <p className="mx-auto text-base leading-relaxed lg:w-2/3">
                    You can send me hello!
                  </p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="mx-auto lg:w-1/2 md:w-2/3">
                    <div className="flex flex-wrap -m-2">
                      <div className="w-1/2 p-2">
                        <div className="relative">
                          <label
                            htmlFor="name"
                            className="text-sm leading-7 text-gray-600"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required={true}
                            className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200"
                          />
                        </div>
                      </div>
                      <div className="w-1/2 p-2">
                        <div className="relative">
                          <label
                            htmlFor="email"
                            className="text-sm leading-7 text-gray-600"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required={true}
                            className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200"
                          />
                        </div>
                      </div>
                      <div className="w-full p-2">
                        <div className="relative">
                          <label
                            htmlFor="message"
                            className="text-sm leading-7 text-gray-600"
                          >
                            Message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            required={true}
                            className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none resize-none focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200"
                          ></textarea>
                        </div>
                      </div>
                      <div className="w-full p-2">
                        <button
                          className="flex px-8 py-2 mx-auto text-lg text-white transition duration-300 ease-in-out transform bg-red-500 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 hover:bg-red-600 text-medium hover:scale-110"
                          type="submit"
                          disabled={state.submitting}
                        >
                          Send!
                        </button>
                      </div>
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    </div>
  );
}
