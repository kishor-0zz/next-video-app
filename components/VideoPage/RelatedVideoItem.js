import React from 'react';
import Link from 'next/link'

const RelatedVideoItem = ({ video }) => {
   const { id, thumbnail, link } = video || {};
   console.log(video);
   return (
      <div>
         <div
            class="col-span-full  lg:col-auto max-h-[570px] overflow-y-auto"
         >

            <div class="w-full flex flex-row gap-2 mb-4">
               <div
                  class="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]"
               >
                  <Link href={`/video/${id}`}>
                     <img
                        src={thumbnail}
                        class="object-cover"
                        alt="Some video title"
                     />
                  </Link>
                  <p
                     class="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py"
                  >
                     12:10
                  </p>
               </div>

               <div class="flex flex-col w-full">
                  <a href="#">
                     <p
                        class="text-slate-900 text-sm font-semibold"
                     >
                        Some video title
                     </p>
                  </a>
                  <a
                     class="text-gray-400 text-xs mt-2 hover:text-gray-600"
                     href="#"
                  >
                     Learn with Sumit
                  </a>
                  <p class="text-gray-400 text-xs mt-1">
                     100K views . 23 Oct 2022
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default RelatedVideoItem;