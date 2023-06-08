import Link from 'next/link';
import React from 'react';


const CardItem = ({ video }) => {
   const { author, id, avatar, date, description, duration, likes, link, thumbnail, title, views, unlikes } = video;


   return (
      <div
         class="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]"
      >
         <div class="w-full flex flex-col">
            <div class="relative">
               <Link href={`video/${id}`}>
                  <img
                     src={thumbnail}
                     class="w-full h-auto"
                     alt="Some video title"
                  />
               </Link>

               <p
                  class="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py"
               >
                  {duration}
               </p>
            </div>

            <div class="flex flex-row mt-2 gap-2">
               <a href="#" class="shrink-0">
                  <img
                     src={thumbnail}
                     class="rounded-full h-6 w-6"
                     alt="Learn with Sumit"
                  />
               </a>

               <div clas="flex flex-col">
                  <a href="video.html">
                     <p
                        class="text-slate-900 text-sm font-semibold"
                     >
                        {title}
                     </p>
                  </a>
                  <a
                     class="text-gray-400 text-xs mt-2 hover:text-gray-600"
                     href="#"
                  >
                     {author}
                  </a>
                  <p class="text-gray-400 text-xs mt-1">
                     {views} views . {date}
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CardItem;