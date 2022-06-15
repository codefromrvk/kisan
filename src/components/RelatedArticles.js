import React from "react";
import rel1 from "../assets/rel1.jpg";
import rel2 from "../assets/rel2.jpg";
import rel3 from "../assets/rel3.jpg";
import rel4 from "../assets/rel4.jpg";
import rel5 from "../assets/rel5.jpg";

const RelatedArticles = () => {
  return (
    <div className="lg:px-48">
      <h2 className=" text-2xl  font-bold text-center border-b-2 leading-[0.1em]">
        <span className="bg-white p-4">Related Articles</span>
      </h2>
      <div class="grid grid-cols-1 px-8 lg:px-0 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
        <div className="border-gray-200 border-2 ">
          <img
            className="w-[100%] object-cover h-[120px]"
            src={rel1}
            alt="related article"
          />
          <span className="text-[#19bdb2] px-4 pt-2 block font-bold text-xl">
            Velicious Espresso
          </span>
          <p className="text-sm p-4 font-sans">
            Vestibulum turpis lacus, auctor nec mauris id, porta mollis lacus.
            Nunc facilisis neque id elit dapibus, porttitor volutpat ante
            efficitur. Morbi blandit turpis odio, ut placerat libero scelerisque
            facilisis
          </p>
        </div>
        <div className="border-gray-200 border-2 ">
          <img
            className="w-[100%] object-cover h-[120px]"
            src={rel2}
            alt="related article"
          />
          <span className="text-[#19bdb2] px-4 pt-2 block font-bold text-xl">
            Velicious Espresso
          </span>
          <p className="text-sm p-4 font-sans">
            Vestibulum turpis lacus, auctor nec mauris id, porta mollis lacus.
            Nunc facilisis neque id elit dapibus, porttitor volutpat ante
            efficitur. Morbi blandit turpis odio, ut placerat libero scelerisque
            facilisis
          </p>
        </div>
        <div className="border-gray-200 border-2 ">
          <img
            className="w-[100%] object-cover h-[120px]"
            src={rel3}
            alt="related article"
          />
          <span className="text-[#19bdb2] px-4 pt-2 block font-bold text-xl">
            Velicious Espresso
          </span>
          <p className="text-sm p-4 font-sans">
            Vestibulum turpis lacus, auctor nec mauris id, porta mollis lacus.
            Nunc facilisis neque id elit dapibus, porttitor volutpat ante
            efficitur. Morbi blandit turpis odio, ut placerat libero scelerisque
            facilisis
          </p>
        </div>
        <div className="border-gray-200 border-2 ">
          <img
            className="w-[100%] object-cover h-[120px]"
            src={rel4}
            alt="related article"
          />
          <span className="text-[#19bdb2] px-4 pt-2 block font-bold text-xl">
            Velicious Espresso
          </span>
          <p className="text-sm p-4 font-sans">
            Vestibulum turpis lacus, auctor nec mauris id, porta mollis lacus.
            Nunc facilisis neque id elit dapibus, porttitor volutpat ante
            efficitur. Morbi blandit turpis odio, ut placerat libero scelerisque
            facilisis
          </p>
        </div>
        <div className="border-gray-200 border-2 ">
          <img
            className="w-[100%] object-cover h-[120px]"
            src={rel5}
            alt="related article"
          />
          <span className="text-[#19bdb2] px-4 pt-2 block font-bold text-xl">
            Velicious Espresso
          </span>
          <p className="text-sm p-4 font-sans">
            Vestibulum turpis lacus, auctor nec mauris id, porta mollis lacus.
            Nunc facilisis neque id elit dapibus, porttitor volutpat ante
            efficitur. Morbi blandit turpis odio, ut placerat libero scelerisque
            facilisis
          </p>
        </div>
      </div>
    </div>
  );
};

export default RelatedArticles;
