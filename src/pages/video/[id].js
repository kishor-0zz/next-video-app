import { useRouter } from 'next/router';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Videopage from '../../../components/videoPage/Videopage'
import { fetchVideo } from '../../features/video/videoSlice';


const id = () => {
   const router = useRouter();
   const id = router.query.id
   const { video } = useSelector((state) => state.video)


   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(fetchVideo(id))
   }, [dispatch, id])

   return (
      <div>
         <Videopage video={video} ></Videopage>
      </div>
   );
};

export default id;