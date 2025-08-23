import { initDatabase } from './db/init.js'

import { Post } from './db/models/post.js'
import dotenv from 'dotenv'
dotenv.config()

await initDatabase()

const post = new Post({
  title: 'Hello second Post!',
  author: 'John Castillo',
  contents: 'This is second post.',
  tags: ['frontend'],
})
await post.save()

const posts = await Post.find()
console.log(posts)
