import * as pt from "pareto-core-types"

import { TMkdir_Data, TMkdir_Result } from "../types/x"



export type AMkdir = (
    $: TMkdir_Data,
) => pt.AsyncValue<TMkdir_Result>
