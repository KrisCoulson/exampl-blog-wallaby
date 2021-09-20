import { allPosts } from './posts'

describe('posts', () => {
  scenario('returns all posts', async (scenario) => {
    const result = await allPosts({})

    expect(result.posts.length).toEqual(Object.keys(scenario.post).length)
  })
})
