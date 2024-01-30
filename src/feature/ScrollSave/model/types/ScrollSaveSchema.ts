// <Адрес страницы, позиция сколла>
export type ScrollSchema = Record<string, number>;

export interface ScrollSaveSchema {
  scroll: ScrollSchema;
}
