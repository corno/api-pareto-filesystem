
export type TReadFileError =
| ["no entity", {}]
| ["is directory", {}]
| ["unknown", {
    readonly "message": string
}]