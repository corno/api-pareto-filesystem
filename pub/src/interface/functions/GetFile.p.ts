import * as pt from "pareto-core-types"

import { TPath } from "../types/Path.p"
import { TFSResult } from "../types/FSResult.p"
import { TAnnotatedReadFileError } from "../types/etc.p"

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
