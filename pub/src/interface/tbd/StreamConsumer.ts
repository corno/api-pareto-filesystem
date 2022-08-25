
export type StreamConsumer<Data> = {
    onData: ($: Data) => void
    onEnd: () => void
}