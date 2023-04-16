export default class Currency {
    rate = 0;
    code = '';

    constructor(rate, code) {
        this.rate = rate;
        this.code = code;
    }

    getRate(){
        return this.rate;
    }

    getCode(){
        return this.code;
    }
}