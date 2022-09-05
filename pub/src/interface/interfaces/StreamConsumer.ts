
export type IStreamConsumer<Data> = {
    readonly  onData: ($: Data) => void
    readonly  onEnd: () => void
}