import * as pt from "pareto-core-types"

import { Path } from "../types/Path"
import { TReadFileError } from "../types/ReadFileError"
import { FSResult, TAnnotatedFSError } from "./FSResult"
import { StreamConsumer } from "./StreamConsumer"

export type TAnnotatedReadFileError = TAnnotatedFSError<TReadFileError>

export type GetFile = (
    $: {
        readonly path: Path
    },
    $i: {
        init: () => StreamConsumer<string>
    }
) => pt.AsyncValue<FSResult<TAnnotatedReadFileError, {}>>
