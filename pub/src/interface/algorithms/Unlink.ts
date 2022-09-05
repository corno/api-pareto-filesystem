import * as pt from "pareto-core-types"

import { TUnlink_Data, TUnlink_Result } from "../types/x"


export type AUnlink = (
    $: TUnlink_Data,

) => pt.AsyncValue<TUnlink_Result>

