import React, { useEffect, useState } from 'react';
import { Container, PostCard } from '../components';
import appwritreService from '../appwrite/mainconfig'

const Addpost = () => {


  const [posts, setPosts] = useState([])
  useEffect(() => {}, [])

  appwritreService.getPost([]).then((posts) => {
    if (posts) {
      setPosts(posts.documents)
    }
  })


  return (
    <div className='py-8'>
      <Container >
        <div className='flex flex-wrap'>
          {posts.map((post) => (
            <div key={post.$id} className='p-2 w-1/4' >
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Addpost; 