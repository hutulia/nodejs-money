export default class Money {
    value = 0;

    /**
     * @type {Currency}
     */
    currency;

    constructor(value, currency) {
        this.value = value;
        this.currency = currency;
    }

    getValue(){
        return this.value;
    }

    getCurrency(){
        return this.currency;
    }

    /**
     *
     * @param {Currency} currency
     * @returns {Money}
     */
    convertTo(currency){
        const value = this.getValue() / this.currency.getRate() * currency.getRate();
        return new Money(value, currency);
    }
}
