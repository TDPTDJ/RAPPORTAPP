interface OutputbodyJson {
    return_code: string,
    sql_code: string,
    htmlTable: string
}

export class OutputBody {
    constructor(
    public return_code : string,
    public sql_code : string,
    public htmlTable : string
    ){}

    static fromJSON(json: OutputbodyJson): OutputBody {
        const ob = new OutputBody(
          json.return_code,
          json.sql_code,
          json.htmlTable
        );
        return ob;
    }

    getReturnCode(): string {
        return this.return_code;
    }

    getSqlCode(): string {
        return this.sql_code;
    }
    
    getHtmlTable() : string {
        return this.htmlTable;
    }
}