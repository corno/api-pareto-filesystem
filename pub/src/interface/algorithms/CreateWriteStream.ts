import * as pt from "pareto-core-types"

import { TPath } from "../types/Path"
import { IOnWriteFileError } from "../interfaces/x"

export type FCreateWriteStream = (
    $: {
        readonly "path": TPath
        readonly "createContainingDirectories": boolean
    },
    $c: (
        $i: ($: string) => void
    ) => void,
    $i: {
        readonly "onError": IOnWriteFileError
    },
    $a: pt.ProcessAsyncValue
) => void