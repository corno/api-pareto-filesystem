
export type TMkdirError =
| ["no entity", {}]
| ["exists", {}]
//| ["is directory", {}]
| ["unknown", {
    readonly "message": string
}]
