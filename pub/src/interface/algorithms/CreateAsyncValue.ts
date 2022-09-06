import * as pt from "pareto-core-types"

export type FCreateAyncValue<Data, Result> = (
    $: Data
) => pt.AsyncValue<Result>