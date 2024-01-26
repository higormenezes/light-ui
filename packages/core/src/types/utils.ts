export type TEmptyObject = Record<string, never>
export type TObject = Record<string, unknown>

export type Override<BaseProps, OverrideProps> = OverrideProps &
  Omit<BaseProps, keyof OverrideProps>
