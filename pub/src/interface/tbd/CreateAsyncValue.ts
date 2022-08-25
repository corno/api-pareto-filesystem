import * as pt from "pareto-core-types"

export type CreateAyncValue<Data, Result> = (
    $: Data
) => pt.AsyncValue<Result>