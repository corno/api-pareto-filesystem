import * as pt from "pareto-core-types"

import { TPath } from "../types/Path"
import { TWriteFile_Result } from "../types/x"


export type AWriteFile = (
    $: {
        readonly path: TPath,
        readonly data: string,
        /**
         * this property is added because getting the dirname of a path is string inspection and should not be done by
         * a caller of this function
         */
        readonly createContainingDirectories: boolean
    },
) => pt.AsyncValue<TWriteFile_Result>