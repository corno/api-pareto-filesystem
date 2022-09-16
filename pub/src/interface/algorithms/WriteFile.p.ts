import * as pt from "pareto-core-types"

import { TWriteFileData, TWriteFile_Result } from "../types/x"


export type FWriteFile = (
    $: TWriteFileData,
) => pt.AsyncValue<TWriteFile_Result>