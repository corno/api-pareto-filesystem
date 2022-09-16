
export type TWriteFileError =
    | ["no entity", {}]
    | ["is directory", {}]
    | ["unknown", {
        readonly "message": string
    }]