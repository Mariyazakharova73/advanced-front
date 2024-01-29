type DeepPartial<T> = T extends any[]
  ? T
  : T extends Record<string, any>
    ? {
        [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;

// вместо обычного Record, т.к. не все reducers обязательные
type OptionalRecord<K extends keyof any, T> = {
  [P in K]?: T;
};
