

export type TAnnotatedFSError<Error> = {
    error: Error
    path: string
}

export type FSResult<Error, Success> =
| ["error", Error]
| ["success", Success]