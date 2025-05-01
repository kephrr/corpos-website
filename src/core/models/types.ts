export interface RestResponse<T>{
    totalItems?: number,
    pages?: number[],
    totalPages?: number,
    currentPage?: number,
    nextPage?: number,
    previousPage?: number,
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





