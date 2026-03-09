import { PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;

  beforeEach(() => {
    postsService = new PostsService();
  });

  describe('.findMany', () => {
    const posts = [
      {text: 'Post 1'},
      {text: 'Post 2'},
      {text: 'Post 3'},
      {text: 'Post 4'},
    ];
    const withoutPosts = ['Post 1', 'Post 2', 'Post 3', 'Post 4'];
    const skipLimitPosts  = ['Post 2'];
    const skipPost = [ 'Post 2', 'Post 3', 'Post 4'];
    const limitPosts = ['Post 1'];

    beforeEach(() => {
      posts.forEach((post) => postsService.create(post));
    });

    it('should return all posts if called without options', () => {
      // реализуйте тест-кейс
      const preparedPosts = postsService.findMany().map(post => post.text);
      expect(preparedPosts).toEqual(withoutPosts);
    });

    it('should return correct posts for skip and limit options', () => {
      // реализуйте тест-кейс
      const preparedPosts = postsService.findMany({skip: 1, limit: 1}).map(post => post.text);
      expect(preparedPosts).toEqual(skipLimitPosts);
    });

    // реализуйте недостающие тест-кейсы

    it('should return correct posts for skip and without limit options', () => {
      // реализуйте тест-кейс
      const preparedPosts = postsService.findMany({skip: 1}).map(post => post.text);
      expect(preparedPosts).toEqual(skipPost);
    });

    it('should return correct posts for without skip and limit options', () => {
      // реализуйте тест-кейс
      const preparedPosts = postsService.findMany({ limit: 1}).map(post => post.text);
      expect(preparedPosts).toEqual(limitPosts);
    });
  });
});