interface InputbodyJson {
    iriziv_n: number,
    iprestdate: string,
    iclass: string
}

export class InputBody {
    constructor(
    private _iriziv_n : number,
    private _iprestdate : string,
    private _iclass : string
    ){}

    toJSON(): InputbodyJson {
        return <InputbodyJson>{
            iriziv_n : this._iriziv_n,        
            iprestdate : this._iprestdate,
            iclass : this._iclass
        };
    }
}