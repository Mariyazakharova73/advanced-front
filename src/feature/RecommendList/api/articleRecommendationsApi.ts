import { rtkApi } from 'shared/api/rtkApi';

const recomendationsApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    getRecommendList: build.query({
      query: limit => ({
        url: '/articles',
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const useArticleRecommendList = recomendationsApi.useGetRecommendListQuery;
