export declare type IBlock = {
  [type in keyof Partial<HTMLElementTagNameMap>]: {
    block: Partial<HTMLElementTagNameMap[type]> | IBlock;
  };
};

export declare type IRenderBlock = {
  [type in keyof Partial<HTMLElementTagNameMap>]: any;
};
