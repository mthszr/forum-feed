import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:
        'https://i.pinimg.com/736x/bc/bd/8c/bcbd8c3b68d48ee9774adb71e78b270d.jpg',
      name: 'Matheus Barbosa',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifólio! 🚀',
      },
      { type: 'link', content: 'mthszr.design/projeto' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        'https://i.pinimg.com/736x/bc/bd/8c/bcbd8c3b68d48ee9774adb71e78b270d.jpg',
      name: 'Matheus Barbosa',
      role: 'Web Developer',
    },
    content: [
      { type: 'paaragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifólio! 🚀',
      },
      { type: 'link', content: 'mthszr.design/projeto' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
