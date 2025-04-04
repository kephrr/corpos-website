export interface RestResponse<T>{
    totalItems?: number,
    pages?: number[],
    totalPages?: number,
    currentPage?: number,
    hasPrev?: boolean,
    hasNext?: boolean,
    results:T
    status:number
}

export class Enum{
    constructor(key:number, value:string){
        this.key = key;
        this.value = value;
    }

    public key: number | undefined;
    public value: string | undefined;
}





