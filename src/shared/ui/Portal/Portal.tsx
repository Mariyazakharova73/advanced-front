import { type FC, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps {
  children: ReactNode; // элемент
  element?: HTMLElement; // место назначения
}

const Portal: FC<PortalProps> = ({ children, element = document.body }) => {
  return createPortal(children, element);
};

export default Portal;
