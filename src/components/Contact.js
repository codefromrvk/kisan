import React from "react";

const Contact = () => {
  return (
    <div className=" ml-4 w-[250px] rounded">
      <section className="bg-[#e9e7e8] p-4 text-sm">
        <span className="block my-2 ">
          <b>Name</b> Sophia
        </span>
        <span className="block  my-2">
          <b>Email</b> sophia@gmail.com
        </span>
        <span className="block  my-2">
          <b>Phone</b> 7338978192
        </span>
      </section>
      <section className=" bg-[#d7d3d2] p-4">
        <span className="font-bold text-center py-2 block">
          Send me a message
        </span>
        <form>
          <label htmlFor="subject" className="text-[0.7rem]">
            Subject
          </label>
          <input type="text" id="subject" className="w-[100%] mb-2 rounded" />
          <label htmlFor="message" className="text-[0.7rem]">
            Message
          </label>
          <textarea
            maxLength={140}
            id="message"
            rows={4}
            className="w-[100%] rounded"
          />
          <span className="block text-right font-normal text-[0.5rem]">
            0/140
          </span>
          <button className="block bg-[#19bdb2] w-[100%] rounded my-2 text-white text-sm py-1">
            Send
          </button>
        </form>
      </section>
      <section className="bg-[#e9e7e8] ">
        <span className="text-center block p-4 text-lg font-bold">
          or meet me at the office
        </span>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9639.937908143578!2d74.9792748731222!3d12.864370634904848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1655019298607!5m2!1sen!2sin"
          width="250"
          height="150"
          className=""
        ></iframe>
        <address className="p-4 font-sans ">
          Xyz Complex
          <br />
          Box 564, Disneyland
          <br />
          USA
        </address>
      </section>
    </div>
  );
};

export default Contact;
