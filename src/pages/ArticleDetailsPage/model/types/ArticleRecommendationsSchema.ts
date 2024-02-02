import { EntityId, EntityState } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';

export interface ArticleRecommendationsSchema extends EntityState<Article, EntityId> {
  isLoading?: boolean;
  error?: string;
}
