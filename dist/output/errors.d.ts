export interface ParseErrorInfo {
    file: string;
    error: string;
    sql?: string;
}
export declare function formatParseError(info: ParseErrorInfo): string;
export declare function formatFileError(filePath: string): string;
export declare function formatConnectionError(error: string): string;
//# sourceMappingURL=errors.d.ts.map