import React from "react";

export const Footer = () => {
  return (
    <div className="bg-[#28373e] text-white flex justify-center text-center p-14">
      <table className="table-auto ">
        <thead className="text-lg">
          <tr>
            <th className="px-2 md:px-14 py-4 ">About Us</th>
            <th className="px-2 md:px-14 py-4">Legal</th>
            <th className="px-2 md:px-14 py-4">Developers</th>
          </tr>
        </thead>
        <tbody className="text-gray-400 font-serif tracking-wider text-[0.7rem]">
          <tr>
            <td>Lurapisere</td>
            <td>Christlok</td>
            <td>reystino</td>
          </tr>
          <tr>
            <td>A Long</td>
            <td>Adaminort</td>
            <td>Introductino </td>
          </tr>
          <tr>
            <td>Introductino </td>
            <td>luxario</td>
            <td>Capablanca </td>
          </tr>
          <tr>
            <td>Adaminort</td>
            <td> </td>
            <td>Leonardinadivo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
