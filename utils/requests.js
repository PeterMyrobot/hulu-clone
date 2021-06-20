const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: 'Trending',
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  topRated: {
    title: 'Top Rated',
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-us`,
  },
  allTimeBest: {
    url: `/discover/movie?api_key=${API_KEY}&language=en-us&sort_by=vote_count.desc`,
    title: 'All-Time Best',
  },
  upcoming: {
    url: `/movie/upcoming?api_key=${API_KEY}&language=en-us`,
    title: 'Upcoming',
  },
  action: {
    url: `/discover/movie?api_key=${API_KEY}&language=en-us&sort_by=popularity.desc&with_genres=28`,
    title: 'Action',
  },
  crime: {
    url: `/discover/movie?api_key=${API_KEY}&language=en-us&sort_by=popularity.desc&with_genres=80`,
    title: 'Crime',
  },
  comedy: {
    url: `/discover/movie?api_key=${API_KEY}&language=en-us&sort_by=popularity.desc&with_genres=35`,
    title: 'Comedy',
  },
  history: {
    url: `/discover/movie?api_key=${API_KEY}&language=en-us&sort_by=popularity.desc&with_genres=36`,
    title: 'History',
  },
  horror: {
    url: `/discover/movie?api_key=${API_KEY}&language=en-us&sort_by=popularity.desc&with_genres=27`,
    title: 'Horror',
  },
  mystery: {
    url: `/discover/movie?api_key=${API_KEY}&language=en-us&sort_by=popularity.desc&with_genres=9648`,
    title: 'Mystery',
  },
  romance: {
    url: `/discover/movie?api_key=${API_KEY}&language=en-us&sort_by=popularity.desc&with_genres=10749`,
    title: 'Romance',
  },
  thriller: {
    url: `/discover/movie?api_key=${API_KEY}&language=en-us&sort_by=popularity.desc&with_genres=53`,
    title: 'Thriller',
  },
};
