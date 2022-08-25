import { Path } from "../types/Path"
import { TReadFileError } from "../types/ReadFileError"
import { CreateAyncValue } from "./CreateAsyncValue"
import { FSResult, TAnnotatedFSError } from "./FSResult"

export type ReadFile_Result = FSResult<
    TAnnotatedFSError<TReadFileError>,
    string
>

export type ReadFile_Data = {
    path: Path
}

export type ReadFile = CreateAyncValue<ReadFile_Data, ReadFile_Result>
