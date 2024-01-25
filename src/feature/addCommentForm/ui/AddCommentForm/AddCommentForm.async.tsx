import { lazy, type FC } from 'react';
import { type AddCommentsFormProps } from './AddCommentForm';

export const AddCommentFormLazy = lazy<FC<AddCommentsFormProps>>(
  async () => await import('./AddCommentForm'),
);
