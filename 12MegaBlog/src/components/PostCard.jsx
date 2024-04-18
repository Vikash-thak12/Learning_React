import React from 'react';
import { Link } from 'react-router-dom';
import appwriteService from '../appwrite/mainconfig'

const PostCard = ({$id, title, featuredImage}) => {
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                
            </div>
        </div>
    </Link>
  );
};

export default PostCard;