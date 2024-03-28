import { DropdownDirection } from '../../../types/ui';
import s from './popup.module.css';

export const mapDirectionClass: Record<DropdownDirection, string> = {
  bottomLeft: s.OptionsBottomLeft,
  bottomRight: s.OptionsBottomRight,
  topLeft: s.OptionsTopLeft,
  topRight: s.OptionsTopRight,
};
