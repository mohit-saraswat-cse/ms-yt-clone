import React, { useEffect,useState } from 'react'
import { video_comments_details_api, staticReplies } from '../config/constants';
import VideoComment from './VideoComment';

const CommentsList = ({comments}) => {
    return comments.map((comment,index)=> {
      return (<div>
        <VideoComment key={index} data={comment}/>
          <div className='pl-8 border-l-2'>
            <CommentsList comments={comment?.replies} />
          </div>
      </div>)
    })
}

// Comments in the Watch Page
const VideoCommentContainer = ({videoId,commentCount}) => {
    const [commentslist,setCommentslist]=useState(null);
    const [AllCommentslist,setAllCommentslist]=useState(null);
    const [isShowAllComments,setIsShowAllComments]=useState(false);

    // Called when Video Id is Chang(Helps while landing to Same page with Different Video Id-> Clicking on Recomendations)
    useEffect(()=>{
        fetchComments();
    },[videoId])

    // Fetching Comments
    const fetchComments=async ()=>{
        const data=await fetch(video_comments_details_api+videoId);
        const jsonData=await data.json();
        jsonData?.items?.map(el => {
          return el['replies'] = staticReplies;
        })
        const comments = jsonData?.items?.length > 6 ? jsonData?.items?.slice(1, 6) : jsonData?.items;
        setCommentslist(comments);
        setAllCommentslist(comments);
    }

    const showAllComments = () => {
      setCommentslist(AllCommentslist);
      setIsShowAllComments(true);
    }

  return commentslist==null?<div>Loading</div>:(
    <div>
        <h2 className='my-2 font-bold'>{commentCount} Comments</h2>
        <CommentsList comments={commentslist} />
        { !isShowAllComments && (
          <div className='w-full flex justify-center rounded-3xl '>
            <button data-testid="show-chat" onClick={showAllComments} className='w-full py-2 border rounded-3xl my-2 hover:bg-gray-200 dark:hover:bg-slate-600'>Show All Comments</button>
          </div>
        ) }
    </div>
  )
}

export default VideoCommentContainer