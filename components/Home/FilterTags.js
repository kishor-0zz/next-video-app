import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tagRemoved, tagSelected } from '../../src/features/filter/firterSlice';


const FilterTags = ({ title }) => {

   const { tags: tagselected } = useSelector(state => state.filter)

   const isSelected = tagselected.includes(title) ? true : false

   const dispatch = useDispatch()
   const handelTags = () => {

      if (isSelected) {
         dispatch(tagRemoved(title))
      }
      else {
         dispatch(tagSelected(title))
      }

   }

   const style = isSelected ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer" : "bg-blue-300 text-white px-4 py-1 rounded-full cursor-pointer"

   return (
      <div>
         <div onClick={handelTags} class={style}>
            {title}
         </div>
      </div>
   );
};

export default FilterTags;