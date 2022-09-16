import * as pt from "pareto-core-types"

import { TPath } from "../types/Path.p"
import { IOnWriteFileError } from "../interfaces/interfaces.p"

export type PCreateWriteStream = (
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