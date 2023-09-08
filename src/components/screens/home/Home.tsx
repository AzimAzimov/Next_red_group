import Image from 'next/image';
import React, { FC } from 'react'

import styles from '@/styles/Home.module.scss';
import Layout from '../../layout/Layout';
import { IPostData } from '@/interfaces/post.interface';
import PostItem from '@/components/posts/PostItem';


const Home: FC<IPostData> = ({ posts }) => {
  console.log(posts);
  
  return (
    <Layout title={'Home'} description="Home Page youta">
      <h1>Hallo chel</h1>

      {posts?.length ? (
        posts.map((items) => <PostItem key={items.id} post={[]} />)
      ) : (
        <p>Error base</p>
      )}
    </Layout>
  );
};

export default Home