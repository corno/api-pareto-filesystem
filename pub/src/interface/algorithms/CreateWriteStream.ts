import * as pt from "pareto-core-types"

import { TPath } from "../types/Path"
import { IStreamConsumer } from "../interfaces/StreamConsumer"
import { IOnWriteFileError } from "../interfaces/x"

export type FCreateWriteStream = (
    $: {
        readonly path: TPath
        readonly createContainingDirectories: boolean
    },
    $i: {
        onError: IOnWriteFileError
    },
) => pt.AsyncValue<IStreamConsumer<string>>