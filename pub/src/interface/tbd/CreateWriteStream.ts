import * as pt from "pareto-core-types"

import { OnFSError } from "../OnFSError"
import { Path } from "../types/Path"
import { TWriteFileError } from "../types/WriteFileError"
import { StreamConsumer } from "./StreamConsumer"


export type OnWriteFileError = OnFSError<TWriteFileError>

export type CreateWriteStream = (
    $: {
        readonly path: Path
        readonly createContainingDirectories: boolean
    },
    $i: {
        onError: OnWriteFileError
    },
    $c: ($c: StreamConsumer<string>) => void
) => pt.AsyncNonValue