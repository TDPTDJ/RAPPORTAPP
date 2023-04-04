interface InputbodyJson {
    id: string,
    iprestdate: string,
    iclass: string
}

export class InputBody {
    constructor(
    private _iriziv_n : string,
    private _iprestdate : string,
    private _iclass : string
    ){}

    toJSON(): InputbodyJson {
        return <InputbodyJson>{
            id : this._iriziv_n,        
            iprestdate : this._iprestdate,
            iclass : this._iclass
        };
    }
}