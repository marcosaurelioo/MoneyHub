import type { PropsWithChildren } from "react";
import { useEffect, useRef } from "react";

interface InfiniteScrollProps {
  fetchMore: () => any;
  hasNext?: boolean;
}

const options = { root: null, rootMargin: "0px", threshold: 1 };

export function InfiniteScroll({
  children,
  fetchMore,
  hasNext = false,
}: PropsWithChildren<InfiniteScrollProps>) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && hasNext) {
        const container = containerRef.current;
        const children = container?.parentElement?.children;
        const lastChild = children && children[children.length - 1];

        if (container === lastChild) {
          fetchMore();
        }
      }
    }, options);

    observer.observe(containerRef?.current as HTMLDivElement);

    return () => {
      observer.disconnect();
    };
  }, [hasNext, fetchMore]);

  return (
    <>
      {children}
      <div ref={containerRef} />
    </>
  );
}
