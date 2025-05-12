export type CrButtonProps = {
  /**
   * Icon name (using cr-icon)
   */
  icon?: string;

  /**
   * Icon placement
   * @default left
   */
  iconPlacement?: "left" | "right" | "stack";

  /**
   * Disable button, prevent click event
   */
  disabled?: boolean;
};
export type CrButtonEmits = {
  (e: "click", payload: MouseEvent): void;
};

export type CrToggleButtonProps = CrButtonProps;
export type CrToggleButtonEmits = CrButtonEmits & {
  (e: "toggled", value: boolean): void;
};
