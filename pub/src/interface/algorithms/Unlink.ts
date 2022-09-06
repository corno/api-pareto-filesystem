import * as pt from "pareto-core-types"

import { TUnlink_Data, TUnlink_Result } from "../types/x"


export type FUnlink = (
    $: TUnlink_Data,

) => pt.AsyncValue<TUnlink_Result>

