import { StateSchema } from 'app/providers/StoreProvider';
import cn from 'classnames';
import { scrollSaveActions } from 'feature/ScrollSave';
import { getScrollByPath } from 'feature/ScrollSave/model/selectors/scrollSave';
import { MutableRefObject, PropsWithChildren, UIEvent, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useThrottle } from 'shared/lib/hooks/useTrottle';
import s from './Page.module.css';

export interface PageProps {
  className?: string;
  onScrollEnd?: () => void;
}

const Page = (props: PropsWithChildren<PageProps>) => {
  const { className, children, onScrollEnd } = props;

  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: StateSchema) =>
    getScrollByPath(state, pathname),
  );

  useInfiniteScroll({ triggerRef, wrapperRef, callback: onScrollEnd });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  const onScroll = useThrottle((e: UIEvent) => {
    console.log('SCROLL')
    dispatch(
      scrollSaveActions.setScrollPosition({
        path: pathname,
        position: e.currentTarget.scrollTop,
      }),
    );
  }, 500);

  return (
    <section ref={wrapperRef} className={cn(s.Page, className)} onScroll={onScroll}>
      {children}
      <div ref={triggerRef} />
    </section>
  );
};

export default Page;
