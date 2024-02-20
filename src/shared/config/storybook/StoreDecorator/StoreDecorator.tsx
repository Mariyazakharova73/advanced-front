import { StoreProvider } from 'app/providers/StoreProvider';
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { loginReducer } from 'feature/AuthByUserName/model/slice/loginSlice';
import { profileReducer } from 'feature/EditableProfileCard/model/slice/profileSlice';
import { addCommentFormReducer } from 'feature/addCommentForm/model/slices/addCommentFormSlice';
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slices/ArticleDetailsCommentsSlice';
import { articleRecommendationsReducer } from 'pages/ArticleDetailsPage/model/slices/articleRecommendationsSlice';
import { ReducerList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducerList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  articleDetailsComments: articleDetailsCommentsReducer,
  addCommentForm: addCommentFormReducer,
  articleRecommendations: articleRecommendationsReducer,
};

export const StoreDecorator =
  // eslint-disable-next-line react/display-name, @typescript-eslint/no-explicit-any
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducerList) => (Story: any) => (
    <StoreProvider
      initialState={state as StateSchema}
      asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
      <Story />
    </StoreProvider>
  );
