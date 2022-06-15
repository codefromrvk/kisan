import React from "react";
import Contact from "./Contact";
import SubMenu from "./SubMenu";
import more1 from "../assets/more1.png";
import more2 from "../assets/more2.png";

const Recipe = () => {
  return (
    <div className=" p-4 lg:px-48  flex flex-col lg:flex-row ">
      <section className="lg:hidden">
        <div className="w-[250px] border-2 ml-2 my-8  rounded ">
          <span className="font-bold text-lg text-center block p-2">
            Submenu
          </span>
          <ul className=" text-[#19bdb2]  text-sm py-4 cursor-pointer">
            <li className="pl-4 py-1 font-semibold">Home</li>
            <li className="pl-4 py-1 font-semibold bg-[#19bdb2] text-white">
              Examples
            </li>
            <li className="pl-4 py-1 font-semibold">Contact</li>
            <li className="pl-4 py-1 font-semibold">About</li>
          </ul>
        </div>
      </section>
      <section className="my-4 ">
        <span className="inline-block my-4 text-2xl font-bold ">
          Recipe Title
        </span>
        <p className="font-serif text-lg">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy.
        </p>
        <br />
        <p className="font-serif text-sm">
          Latin professor at Hampden-Sydney College in Virginia, looked up one
          of the more obscure Latin words, consectetur, from a Lorem Ipsum
          passage, and going through the cites of the word in classical
          literature, discovered
        </p>
        <br />
        <p className="font-serif text-sm mb-20">
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy.
          <div className="float-right md:w-[25rem] ml-6 mt-2 text-lg">
            <blockquote>
              <em>
                Lorem Ipsum is that it has a more-or-less normal distribution of
                letters, as opposed to using 'Content here, content here'
              </em>
            </blockquote>
            <cite className="block text-right">-Jane Doe</cite>
          </div>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
          reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham.
        </p>
        <br />
        <div>
          <h2 className=" text-2xl  font-bold text-center border-b-2 leading-[0.1em]">
            <span className="bg-white p-4">More in this series</span>
          </h2>
          <div className="my-8">
            <div className="flex my-8 flex-col md:flex-row px-8 md:p-0 ">
              <img
                className="rounded md:object-contain "
                src={more1}
                alt="recipe"
              />
              <p className="ml-4">
                <span className="block  font-bold text-sky-400 text-2xl ">
                  Nunc facilisis neque id
                </span>
                Cicero are also reproduced in their exact original form,
                accompanied by English versions from the 1914 translation by H.
                Rackham.
              </p>
            </div>
            <div className="flex my-8 flex-col md:flex-row px-8 md:p-0 ">
              <img
                className="rounded  md:object-contain "
                src={more2}
                alt="recipe"
              />
              <p className="ml-4">
                <span className="block text-2xl  font-bold text-sky-400">
                  Curabitur commodo tortor vitae
                </span>
                Cicero are also reproduced in their exact original form,
                accompanied by English versions from the 1914 translation by H.
                Rackham.
              </p>
            </div>
          </div>
        </div>
      </section>

      <aside className=" hidden lg:block pl-4 ">
        <SubMenu />
        <Contact />
      </aside>
      {/* </div> */}
    </div>
  );
};

export default Recipe;
