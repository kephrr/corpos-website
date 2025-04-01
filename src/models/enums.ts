interface Enum {
    value:string;
    id:number
}

export const State:Enum[] = [
    {value: "blue", id: 1},
    {value: "green", id: 2},
    {value: "yellow", id: 3},
    {value: "red", id: 4}
]

// State.find((e)=>e.value==="Red")