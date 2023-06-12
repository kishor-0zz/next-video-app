import React, { useState } from 'react';

import { searched } from '../src/features/filter/firterSlice';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
   const { search } = useSelector(state => state.filter)
   const dispatch = useDispatch();

   const [input, setInput] = useState(search)

   const searchSubmit = (e) => {
      e.preventDefault()
      dispatch(searched(input))
   }

   return (
      <div>
         <nav class="bg-slate-100 shadow-md">
            <div
               class="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3"
            >
               <a href="/">
                  <img
                     class="h-10"
                     src="./assets/lws.svg"
                     alt="Learn with Sumit"
                  />
               </a>
               <div
                  class="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200"
               >

                  <form onSubmit={searchSubmit}>
                     <input
                        class="outline-none border-none mr-2"
                        type="search"
                        name="search"
                        placeholder="Search"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                     />
                  </form>
                  <img
                     class="inline h-4 cursor-pointer"
                     src="./assets/search.svg"
                     alt="Search"
                  />
               </div>
            </div>
         </nav>
      </div>
   );
};

export default Navbar;