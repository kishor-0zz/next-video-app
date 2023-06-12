import Link from 'next/link';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedVideos } from '../../src/features/relatedVideos/relatedVideosSlice';
import Loading from '../Loading'
import RelatedVideoItem from './RelatedVideoItem';

const RelatedVideo = ({ id, tags }) => {

   const { relatedVideos, isLodding, isError, error } = useSelector(state => state.relatedVideoss)
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(fetchRelatedVideos({ id, tags }))
   }, [dispatch, tags, id])

   let content = null;
   if (isLodding) content = <Loading></Loading>
   if (!isLodding && isError) content = <h2>error</h2>
   if (!isLodding && !isError && relatedVideos.length === 0) content = <h2>no video found</h2>
   if (!isLodding && !isError && relatedVideos.length > 0)
      content = relatedVideos.map(video => <RelatedVideoItem video={video} key={video.id}></RelatedVideoItem>
      )


   return (
      <div>
         {content}
      </div>
   );
};

export default RelatedVideo;