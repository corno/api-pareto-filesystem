import * as pt from "pareto-core-types"

import { Path } from "../types/Path"
import { TReadDirError } from "../types/ReadDirError"
import { CreateAyncValue } from "./CreateAsyncValue"
import { FSResult, TAnnotatedFSError } from "./FSResult"

export type DirNodeData = {
    readonly path: string
    readonly type:
    | ["directory", {}]
    | ["file", {}]
    | ["unknown", {}]
}

export type ReadDirectory_Data = {
    path: Path
}

export type ReadDirectory_Success = pt.Dictionary<DirNodeData>

export type AnnotatedReadDirectoryError = TAnnotatedFSError<TReadDirError>


export type ReadDirectory_Result = FSResult<
    AnnotatedReadDirectoryError,
    ReadDirectory_Success
>

export type ReadDirectory = CreateAyncValue<ReadDirectory_Data, ReadDirectory_Result>