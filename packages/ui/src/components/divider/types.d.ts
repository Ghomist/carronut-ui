export type CrDividerProps = {
  /**
   * Divider type
   * @default horizontal
   */
  direction?: "horizontal" | "vertical";

  /**
   * Divider width
   * @default 1px
   */
  width?: string;

  /**
   * Divider length
   * @default 100%
   */
  length?: string;

  /**
   * Divider label
   */
  label?: string;

  /**
   * Label position
   * @default center
   */
  labelPosition?: "left" | "center" | "right";
};
