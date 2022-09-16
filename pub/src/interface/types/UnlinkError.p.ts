
export type TUnlinkError =
| ["no entity", {}]
| ["is directory", {}]
| ["unknown", {
    readonly "message": string
}]