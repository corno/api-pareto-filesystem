
export type TReadDirError =
| ["no entity", {}]
| ["is not directory", {}]
| ["unknown", {
    readonly "message": string
}]