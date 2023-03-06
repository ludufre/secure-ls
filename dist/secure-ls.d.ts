export = SecureLS;

import * as LZString from 'lz-string';

declare class SecureLS {
    constructor(config?: { isCompression?: boolean, encodingType?: string, encryptionSecret?: string, encryptionNamespace?: string });
    getEncryptionSecret(): string;
    get(key: string, isAllKeysData?: boolean): any;
    getDataFromLocalStorage(key: string): string | null;
    getAllKeys(): string[];
    set(key: string, data: any): void;
    setDataToLocalStorage(key: string, data: string): void;
    remove(key: string): void;
    removeAll(): void;
    clear(): void;
    resetAllKeys(): [];
    processData(data: any | string, isAllKeysData: boolean): string;
    setMetaData(): void;
    getMetaData(): { keys: string[] };

    _name: 'secure-ls';
    Base64: SecureLS.Base64;
    LZString: typeof LZString;
    AES: any;
    DES: any;
    RABBIT: any;
    RC4: any;
    enc: {
        Latin1: any;
        _Utf8: any;
    };
}

declare namespace SecureLS {
    interface Base64 {
        _keyStr: string;
        encode(e: string): string;
        decode(e: string): string;
    }
}