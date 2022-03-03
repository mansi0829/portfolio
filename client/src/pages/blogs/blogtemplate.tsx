import Image from "next/image";
import React from "react";
import mansi from "../../../static/mansi.jpg";

export const BlogTemplate = () => {
  return (
    <div>
      <div className="max-w-screen-lg mx-auto">
        <main className="py-20">
          <div className="mb-4 md:mb-0 w-full mx-auto relative">
            <div className="px-4 lg:px-0">
              <h2 className="text-4xl mb-2 font-semibold text-gray-800 dark:text-gray-200 leading-tight">
                Blogs
              </h2>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-12">
            <div className="px-4 lg:px-0 mt-12 text-gray-700 dark:text-gray-300 text-lg leading-relaxed w-full lg:w-3/4">
              <p className="pb-6">
                Adieus except say barton put feebly favour him. Entreaties
                unpleasant sufficient few pianoforte discovered uncommonly ask.
                Morning cousins amongst in mr weather do neither. Warmth object
                matter course active law spring six. Pursuit showing tedious
                unknown winding see had man add. And park eyes too more him.
                Simple excuse active had son wholly coming number add. Though
                all excuse ladies rather regard assure yet. If feelings so
                prospect no as raptures quitting.
              </p>

              <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
                Sportsman do offending supported extremity breakfast by
                listening. Decisively advantages nor expression unpleasing she
                led met. Estate was tended ten boy nearer seemed. As so seeing
                latter he should thirty whence. Steepest speaking up attended it
                as. Made neat an on be gave show snug tore.
              </div>

              <h2 className="text-2xl text-gray-800 dark:text-gray-200 font-semibold mb-4 mt-4">
                Uneasy barton seeing remark happen his has
              </h2>

              <p className="pb-6">
                Guest it he tears aware as. Make my no cold of need. He been
                past in by my hard. Warmly thrown oh he common future. Otherwise
                concealed favourite frankness on be at dashwoods defective at.
                Sympathize interested simplicity at do projecting increasing
                terminated. As edward settle limits at in.
              </p>
            </div>

            <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
              <div className="p-4 border-t border-b md:border md:rounded">
                <div className="flex py-2">
                  <div className="w-24 px-2 relative">
                    <Image
                      src={mansi}
                      className="h-2 w-2 rounded-full mr-2 object-cover"
                    />
                  </div>
                  <div>
                    <p className="py-2 font-semibold text-gray-700 dark:text-gray-300 text-sm">
                      Mansi Gundre
                    </p>
                    <p className="font-semibold text-gray-600 dark:text-gray-400 text-xs">
                      Student
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 py-3">
                  Sophomore at Pune Institute of Computer Technology. <br />I
                  code sometimes with coffee
                </p>
                <button className="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded">
                  Get Regular Updates
                  <i className="bx bx-user-plus ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BlogTemplate;
