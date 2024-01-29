import cn from 'classnames';
import { MutableRefObject, PropsWithChildren, useRef } from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll';
import s from './Page.module.css';

export interface PageProps {
  className?: string;
  onScrollEnd?: () => void;
}

const Page = (props: PropsWithChildren<PageProps>) => {
  const { className, children, onScrollEnd } = props;

  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({ triggerRef, wrapperRef, callback: onScrollEnd });

  return (
    <section ref={wrapperRef} className={cn(s.Page, className)}>
      {children}
      <div ref={triggerRef} />
    </section>
  );
};

export default Page;
