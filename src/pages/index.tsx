import { Fragment } from 'react'
import { NextPage, GetStaticProps } from 'next'
import Link from 'next/link'
import styles from './index.module.css'
import { fetchApi } from '@/libs/api'
import { Posts, Post } from '@/types/post'

const Index: NextPage<{posts: Post[]}> = ({posts}) => {
  return (
    <div>
      <h2 className={styles.heading}>最新の記事</h2>
      <div>
        {posts.map(post => (
          <Fragment key={post.id}>
            <Link href="/posts/[id]" as={`posts/${post.id}`}>
              <a>
                <h2>{post.title}</h2>
              </a>
            </Link>
          </Fragment>
        ))}
      </div>
    </div>
  )
}


export const getStaticProps: GetStaticProps = async () => {

  const data = await fetchApi<Posts>('/posts')
    .catch((e) => {
      return null;
    });

  return {
    props: {
      posts: data!.contents,
    },
  };
};

export default Index
