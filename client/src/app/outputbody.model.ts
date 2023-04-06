interface OutputbodyJson {
    return_code: string,
    sql_code: number,
    sm_body: string
}

export class OutputBody {
    constructor(
        private _return_code: string,
        private _sql_code: number,
        private _sm_body: string
    ){}

    static fromJSON(json: OutputbodyJson): OutputBody {
        const ob = new OutputBody(
            json.return_code,
            json.sql_code,
            json.sm_body
        );
        return ob;
    }

    getReturnCode(): string {
        return this._return_code;
    }

    getSqlCode(): number {
        return this._sql_code;
    }
    
    getSm_body() : string {
        return this._sm_body;
    }

}