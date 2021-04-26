import { fetchApi } from '@/libs/api'
import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import { Post, Posts } from '@/types/post'
import Link from 'next/link'
import styles from './[id].module.css'


type Props = { post: Post }

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await fetchApi<Posts>(`/posts`)
  const paths = posts.contents!.map(post => `/posts/${post.id}`)
  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const id = context.params!.id;
  const post = await fetchApi<Post>(`/posts/${id}`)
  console.log(post)

  return {
    props : {
      post,
    }
  };
};

const PostDetail: NextPage<Props> = ({ post }) => {
  const {title, content} = post
  return (
    <>
      <h1 className={styles.heading}>{title}</h1>
      <div dangerouslySetInnerHTML={{__html: `${content}`}}></div>
      <Link href="/">
        <a>
          <h2>戻る</h2>
        </a>
      </Link>
    </>
  )
}

export default PostDetail