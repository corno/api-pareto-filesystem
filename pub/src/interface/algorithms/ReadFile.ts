import * as pt from "pareto-core-types"

import { TReadFile_Data, TReadFile_Result } from "../types/x"

export type FReadFile = (
    $: TReadFile_Data
) => pt.AsyncValue<TReadFile_Result>
