interface Options {
  label: string
  value: number
}

export interface SelectProps {
  label: string
  numberOptionsValue?: number
  defaultOptions?: Options[]
}
