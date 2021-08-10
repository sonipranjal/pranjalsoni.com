export default function Form({
  first_name,
  last_name,
  email,
  setEmail,
  setFirst_name,
  setLast_name,
  notify,
}) {
  return (
    <>
      <form onSubmit={notify}>
        <div className="relative flex-grow w-full">
          <input
            type="text"
            id="first-name"
            name="first_name"
            placeholder="first name"
            value={first_name}
            onChange={(e) => setFirst_name(e.target.value)}
            className="w-full px-3 py-2 text-base leading-8 placeholder-red-500 transition-colors duration-200 ease-in-out bg-opacity-50 rounded-t outline-none focus:placeholder-red-700"
          />
        </div>
        <div className="relative flex-grow w-full">
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={last_name}
            placeholder="last name"
            onChange={(e) => setLast_name(e.target.value)}
            className="w-full px-3 py-2 text-base leading-8 placeholder-red-500 transition-colors duration-200 ease-in-out bg-opacity-50 outline-none focus:placeholder-red-700"
          />
        </div>
        <div className="relative flex-grow w-full">
          <input
            type="email"
            id="email"
            required={true}
            name="email"
            placeholder="email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 text-base leading-8 placeholder-red-500 transition-colors duration-200 ease-in-out bg-opacity-50 rounded-b outline-none focus:placeholder-red-700"
          />
        </div>
      </form>
    </>
  );
}
