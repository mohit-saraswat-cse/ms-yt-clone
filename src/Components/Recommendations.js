import React, { useEffect, useState } from 'react'
import { video_recommendations_api } from '../config/constants';
import RecVideo from './RecVideo';
import ShimmerRecommemdedVideo from './ShimmerRecommemdedVideo';
import { Link } from 'react-router-dom';

// Recomendations that appear in Watch Page
const Recommendations = ({channelId}) => {
    const [recVideoList,setRecVideoList]=useState(null);

    useEffect(()=>{
      fetchData();
    },[channelId])

    const fetchData=async ()=>{
      const data=await fetch(video_recommendations_api+channelId);
      const jsondata=await data.json();
      setRecVideoList(jsondata?.items);
    }

    // Shimmer UI until the Api data is Obtained
  return recVideoList==null?<div>
    <ShimmerRecommemdedVideo/>
    <ShimmerRecommemdedVideo/>
    <ShimmerRecommemdedVideo/>
    <ShimmerRecommemdedVideo/>
    <ShimmerRecommemdedVideo/>
    <ShimmerRecommemdedVideo/>
    <ShimmerRecommemdedVideo/>
    <ShimmerRecommemdedVideo/>
    <ShimmerRecommemdedVideo/>
    <ShimmerRecommemdedVideo/>
    <ShimmerRecommemdedVideo/>
    <ShimmerRecommemdedVideo/>
    <ShimmerRecommemdedVideo/>
    <ShimmerRecommemdedVideo/>
  </div>:(
    <div>
      {
        // Recommended Video Lists
        recVideoList.map((recvideo,index)=> <Link to={"/watch?v="+recvideo?.contentDetails?.upload?.videoId} key={index}><RecVideo data={recvideo}/></Link> )
      }
    </div>
  )
}

export default Recommendations