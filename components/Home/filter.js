import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTages } from '../../src/features/tages/tagesSlice';
import FilterTags from './FilterTags'

const filter = () => {
   const dispatch = useDispatch()
   const { isLodding, error, isError, tags } = useSelector((state) => state.tags)


   useEffect(() => {
      dispatch(fetchTages())
   }, [dispatch])

   return tags?.length > 0 ? (
      <section>
         <div
            class="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto"
         >
            {
               tags.map(tag => <FilterTags key={tag.id} title={tag.title} ></FilterTags>)
            }

         </div>
      </section>
   ) : null
};

export default filter;