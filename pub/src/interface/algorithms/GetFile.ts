import * as pt from "pareto-core-types"

import { TPath } from "../types/Path"
import { TFSResult } from "../types/FSResult"
import { IStreamConsumer } from "../interfaces/StreamConsumer"
import { TAnnotatedReadFileError } from "../types/x"

export type AGetFile = (
    $: {
        readonly path: TPath
    },
    $i: {
        init: () => IStreamConsumer<string>
    }
) => pt.AsyncValue<TFSResult<TAnnotatedReadFileError, {}>>
