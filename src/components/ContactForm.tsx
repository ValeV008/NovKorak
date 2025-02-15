import Divider from "./Divider";

const ContactForm = () => {
  return (
    <div id="form">
      <h1
        className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
      >
        Pišite nam
      </h1>
      <Divider />
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        action="/"
        className={`bg-gray-100 w-2/5 mx-auto my-2 py-5 font-bold text-center text-xl text-gray-500`}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="mb-5">
          <label htmlFor="name">Ime</label>
          <br />
          <input type="text" id="name" name="name" />
        </p>
        <p className="mb-5">
          <label htmlFor="youremail" className="px-5">
            Email
          </label>
          <br />
          <input type="email" name="email" id="youremail" />
        </p>
        <p>
          <label htmlFor="yourmessage">Sporočilo</label>
          <br />
          <textarea
            name="message"
            id="yourmessage"
            rows={6}
            className="w-3/4 rounded-md text-base text-gray-900"
          ></textarea>
        </p>
        <p
          className={`w-1/4 m-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10 cursor-pointer`}
        >
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
