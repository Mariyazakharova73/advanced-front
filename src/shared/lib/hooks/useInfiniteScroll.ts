import { MutableRefObject, useEffect } from 'react';

export interface UseInfiniteScrollOption {
  // вызывается при пересечении элемента
  callback?: () => void;
  // элемент
  triggerRef: MutableRefObject<HTMLElement>;
  // контейнер, внутри которого скролл (сейчас Page)
  wrapperRef: MutableRefObject<HTMLElement>;
}

export const useInfiniteScroll = ({
  callback,
  wrapperRef,
  triggerRef,
}: UseInfiniteScrollOption) => {
  useEffect(() => {
    const wrapperElement = wrapperRef.current;
    const triggerElement = triggerRef.current;

    let observer: IntersectionObserver | null = null;

    if (callback) {
      const options = {
        root: wrapperElement,
        rootMargin: '0px',
        threshold: 1.0,
      };

      observer = new IntersectionObserver(([entry]) => {
        // при появлении в зоне видимости triggerRef
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      observer.observe(triggerElement);
    }

    return () => {
      if (observer && triggerElement) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(triggerElement);
      }
    };
  }, [callback, triggerRef, wrapperRef]);
};
