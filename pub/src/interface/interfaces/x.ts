import { TAnnotatedFSError } from "../types/FSResult";
import { TWriteFileError } from "../types/WriteFileError";

export type IOnFSError<T> = ($: TAnnotatedFSError<T>) => void

export type IOnWriteFileError = IOnFSError<TWriteFileError>