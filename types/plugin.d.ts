import Vue from "vue"

export interface IQueryBuilderOptions {
  verbose?: boolean
  logLevel?: "debug" | "log" | "warn" | "error"
}

export const Plugin: (vue: typeof Vue, options?: IQueryBuilderOptions) => void
