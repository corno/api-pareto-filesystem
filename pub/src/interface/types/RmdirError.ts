
export type TRmdirError =
| ["no entity", {}]
| ["not empty", {}]
| ["unknown", {
    readonly "message": string
}]