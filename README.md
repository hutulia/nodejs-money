## Usage
```js
import Currency from '@hutulia/money/currency';
import Money from '@hutulia/money/money';

const usd = new Currency(1, 'USD');
const uah = new Currency(37, 'UAH');
const usdMoney = new Money(10, usd);
const uahMoney = usdMoney.convertTo(uah);

console.log(usdMoney);
console.log(uahMoney);
```

will output

```text
Money { value: 10, currency: Currency { rate: 1, code: 'USD' } }
Money { value: 370, currency: Currency { rate: 37, code: 'UAH' } }
```