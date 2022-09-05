import * as pt from "pareto-core-types"

import { TWriteFileData, TWriteFile_Result } from "../types/x"


export type AWriteFile = (
    $: TWriteFileData,
) => pt.AsyncValue<TWriteFile_Result>