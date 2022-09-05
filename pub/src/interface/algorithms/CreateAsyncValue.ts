import * as pt from "pareto-core-types"

export type ACreateAyncValue<Data, Result> = (
    $: Data
) => pt.AsyncValue<Result>