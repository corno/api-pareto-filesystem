import { TAnnotatedFSError } from "./tbd/FSResult";

export type OnFSError<T> = ($: TAnnotatedFSError<T>) => void