import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1>/pages/index.js</h1>
      <ul>
        <li><a href='/sub'>/page/index.js</a></li>
        <li><a href='/sub/about'>/page/sub/about.js</a></li>
        <li><a href='/sub/1'>/page/sub/[id].js</a></li>
        <li><a href='/sub/2'>/page/sub/[id].js</a></li>
        <li><a href='/sub/fetch'>/page/sub/fetch.js</a></li>
      </ul>
    </div>
  )
}
