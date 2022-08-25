import * as pt from "pareto-core-types"

import { Path } from "../types/Path"
import { TUnlinkError } from "../types/UnlinkError"
import { FSResult, TAnnotatedFSError } from "./FSResult"

export type Unlink_Data = {
    readonly path: Path
}

export type Unlink_Result = FSResult<TAnnotatedFSError<TUnlinkError>, {}>

export type Unlink = (
    $: Unlink_Data,

) => pt.AsyncValue<Unlink_Result>

