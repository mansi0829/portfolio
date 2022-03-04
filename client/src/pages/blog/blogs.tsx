import Link from "next/link";
import React from "react";

export const Allblog = () => {
  return (
    <div>
      <div
        className="px-5 sm:px-10 md:px-20 lg:px-10 xl:px-20 py-20"
        id="blog-posts"
      >
        <div className="max-w-screen-xl mx-auto">
          <div className="xl:flex">
            <div>
              <h3 className="leading-none font-black text-3xl">Tech Posts</h3>
              <div className="flex flex-col items-center lg:flex-row lg:items-stretch lg:justify-around">
                <Link href="/blog/blogtemplate">
                  <div className="flex w-full max-w-sm mt-6 lg:mt-8 xl:mr-8">
                    <div className="transition-all duration-300 cursor-pointer w-full shadow-lg hover:shadow-xl rounded-lg bg-gray-100 dark:bg-gray-800 relative">
                      <div className="w-full h-48 bg-cover rounded-t-lg"></div>
                      <div className="p-6">
                        <div className="text-lg font-bold">
                          Difference Between Javascript and Typescript
                        </div>
                        <div className="mt-2 text-gray-900 dark:text-gray-400 text-sm">
                          Learn how to create a new design system that is
                          beautiful and efficient for creating your UI
                          components.
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link href="/blog/blogtemplate">
                  <div className="flex w-full max-w-sm mt-6 lg:mt-8 xl:mr-8">
                    <div className="transition-all duration-300 cursor-pointer w-full shadow-lg hover:shadow-xl rounded-lg bg-gray-100 dark:bg-gray-800 relative">
                      <div className="w-full h-48 bg-cover rounded-t-lg"></div>
                      <div className="p-6">
                        <div className="text-lg font-bold">
                          UI For Your Web App
                        </div>
                        <div className="mt-2 text-gray-900 dark:text-gray-400 text-sm">
                          Good Icons are hard to come by. This article guides
                          you on how to create beautiful sketched icons using a
                          drawing pad.
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="mt-12 xl:mt-0 xl:ml-8">
              <h3 className="leading-none font-black text-3xl">Recent Posts</h3>
              <div className="flex flex-col items-center lg:flex-row lg:items-stretch lg:justify-around xl:flex-col">
                <Link href="/blog/blogtemplate">
                  <div className="flex w-full max-w-sm mt-6 lg:mt-8">
                    <div
                      className="transition-all duration-300 cursor-pointer w-full shadow-lg hover:shadow-xl rounded-lg
              bg-gray-100 dark:bg-gray-800 relative xl:flex xl:flex-row-reverse xl:items-center xl:px-6 xl:py-8"
                    >
                      <div className="w-full h-48 bg-cover rounded-t-lg xl:w-32 xl:h-20 xl:rounded-lg xl:ml-2"></div>
                      <div className="p-6 xl:p-0">
                        <div className="text-lg font-bold">
                          How to work effectively with freelancers
                        </div>
                        <div className="mt-2 text-gray-900 dark:text-gray-400 text-sm xl:hidden">
                          Hiring a freelancer for your new project can be
                          challenging if you&aposve never done before. Learn
                          some tips that will allow you to have a better
                          experience working with freelancers
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link href="/blog/blogtemplate">
                  <div className="flex w-full max-w-sm mt-6 lg:mt-8">
                    <div
                      className="transition-all duration-300 cursor-pointer w-full shadow-lg hover:shadow-xl rounded-lg
              bg-gray-100 dark:bg-gray-800 relative xl:flex xl:flex-row-reverse xl:items-center xl:px-6 xl:py-8"
                    >
                      <div className="w-full h-48 bg-cover rounded-t-lg xl:w-32 xl:h-20 xl:rounded-lg xl:ml-2"></div>
                      <div className="p-6 xl:p-0">
                        <div className="text-lg font-bold">
                          How to create smooth React Native animations
                        </div>
                        <div className="mt-2 text-gray-900 dark:text-gray-400 text-sm xl:hidden">
                          Animations play a vital role in user experience. This
                          article describes how you can create butter smooth 60
                          FPS animations easily.
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="px-10 py-8">
          <div className="xl:flex">
            <div>
              <h3 className="leading-none font-black text-3xl">
                Non Tech Posts
              </h3>
              <div className="flex flex-col items-center lg:flex-row lg:items-stretch lg:justify-around">
                <Link href="/blog/blogtemplate">
                  <div className="flex w-full max-w-sm mt-6 lg:mt-8 xl:mr-8">
                    <div className="transition-all duration-300 cursor-pointer w-full shadow-lg hover:shadow-xl rounded-lg bg-gray-100 dark:bg-gray-800 relative">
                      <div className="w-full h-48 bg-cover rounded-t-lg"></div>
                      <div className="p-6">
                        <div className="text-lg font-bold">Virat Kohli</div>
                        <div className="mt-2 text-gray-900 dark:text-gray-400 text-sm">
                          Learn how to create a new design system that is
                          beautiful and efficient for creating your UI
                          components.
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link href="/blog/blogtemplate">
                  <div className="flex w-full max-w-sm mt-6 lg:mt-8 xl:mr-8">
                    <div className="transition-all duration-300 cursor-pointer w-full shadow-lg hover:shadow-xl rounded-lg bg-gray-100 dark:bg-gray-800 relative">
                      <div className="w-full h-48 bg-cover rounded-t-lg"></div>
                      <div className="p-6">
                        <div className="text-lg font-bold">Russia Ukraine</div>
                        <div className="mt-2 text-gray-900 dark:text-gray-400 text-sm">
                          Good Icons are hard to come by. This article guides
                          you on how to create beautiful sketched icons using a
                          drawing pad.
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allblog;
