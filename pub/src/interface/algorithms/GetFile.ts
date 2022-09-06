import * as pt from "pareto-core-types"

import { TPath } from "../types/Path"
import { TFSResult } from "../types/FSResult"
import { TAnnotatedReadFileError } from "../types/x"

export type FGetFile = (
    $: {
        readonly "path": TPath
    },
    $i: {
        readonly "init": (
            $c: (
                $i: ($: string) => void
            ) => void
        ) => void
    }
) => pt.AsyncValue<TFSResult<TAnnotatedReadFileError, {}>>
