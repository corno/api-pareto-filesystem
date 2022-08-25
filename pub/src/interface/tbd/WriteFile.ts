import * as pt from "pareto-core-types"

import { Path } from "../types/Path"
import { TWriteFileError } from "../types/WriteFileError"
import { FSResult, TAnnotatedFSError } from "./FSResult"

export type WriteFile_Data = {
    readonly path: Path,
    readonly data: string,
    /**
     * this property is added because getting the dirname of a path is string inspection and should not be done by
     * a caller of this function
     */
    readonly createContainingDirectories: boolean
}


export type WriteFile_Result = FSResult<TAnnotatedFSError<TWriteFileError>, {}>

export type WriteFile = (
    $: WriteFile_Data,
) => pt.AsyncValue<WriteFile_Result>