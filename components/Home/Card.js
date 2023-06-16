import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos } from '../../src/features/videos/videosSlice';
import Loading from '../Loading';
import CardItem from './CardItem';

const Card = () => {

   const dispatch = useDispatch()
   const { isLodding, error, isError, videos } = useSelector((state) => state.videos)
   const { tags, search } = useSelector((state) => state.filter)

   let content;

   useEffect(() => {
      dispatch(fetchVideos({ tags, search }))
   }, [dispatch, search, tags])


   if (isLodding)
      content = <Loading></Loading>
   if (!isLodding && isError)
      content = <h2>Network  Eror</h2>
   if (!isError && !isLodding && videos.length === 0)
      content = <h2>no found video</h2>
   if (!isError && !isLodding && videos.length > 0)
      content = videos.map((video) => <CardItem video={video} key={video.id} ></CardItem>)



   return (
      <section class="pt-12">
         <section class="pt-12">
            <div
               class="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]"
            >
               {content}
               {/* <div class="col-span-12">some error happened</div> */}
            </div>
         </section>
      </section>
   );
};

export default Card;