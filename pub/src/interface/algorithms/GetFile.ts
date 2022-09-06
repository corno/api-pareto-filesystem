import * as pt from "pareto-core-types"

import { TPath } from "../types/Path"
import { TFSResult } from "../types/FSResult"
import { IStreamConsumer } from "../interfaces/StreamConsumer"
import { TAnnotatedReadFileError } from "../types/x"

export type FGetFile = (
    $: {
        readonly "path": TPath
    },
    $i: {
        readonly "init": () => IStreamConsumer<string>
    }
) => pt.AsyncValue<TFSResult<TAnnotatedReadFileError, {}>>
