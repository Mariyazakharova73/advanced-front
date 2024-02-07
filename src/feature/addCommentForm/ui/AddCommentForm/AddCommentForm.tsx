import cn from 'classnames';
import { memo, useCallback, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import DynamicModuleLoader, {
  ReducerList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import Button from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import {
  getAddCommentFormError,
  getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors';
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../../model/slices/addCommentFormSlice';
import s from './AddCommentForm.module.css';

export interface AddCommentsFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducerList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm: FC<AddCommentsFormProps> = ({ className, onSendComment }) => {
  const { t } = useTranslation();
  const text = useSelector(getAddCommentFormText);
  // const error = useSelector(getAddCommentFormError);
  const dispatch = useAppDispatch();

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch],
  );

  const onSendHandler = useCallback(() => {
    onSendComment(text || '');
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={cn(s.AddCommentForm, className)}>
        <Input
          className={s.input}
          label={t('commentText')}
          value={text}
          onChange={onCommentTextChange}
        />
        <Button disabled={!text} className={s.bth} onClick={onSendHandler}>
          {t('sendBtn')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(AddCommentForm);
