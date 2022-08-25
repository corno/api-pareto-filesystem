import * as pt from "pareto-core-types"

import { TMkdirError } from "../types/MkdirError"
import { Path } from "../types/Path"
import { FSResult, TAnnotatedFSError } from "./FSResult"

export type Mkdir_Data = {
    readonly path: Path
    readonly createContainingDirectories: boolean
}

export type Mkdir_Result = FSResult<TAnnotatedFSError<TMkdirError>, {}>


export type Mkdir = (
    $: Mkdir_Data,
) => pt.AsyncValue<Mkdir_Result>
