// Import the Currency class from './3-currency'
import Currency from './3-currency';

class Pricing {
  // Constructor to initialize amount and currency
  constructor(amount, currency) {
    this.amount = amount; // Set the amount
    this.currency = currency; // Set the currency
  }

  /**
   * Setter method for amount
   * @param {Number} amount
   */
  set amount(amount) {
    // Check if amount is a number, throw error if not
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a Number');
    }
    this._amount = amount; // Set the private _amount variable
  }

  // Getter method for amount
  get amount() {
    return this._amount;
  }

  /**
   * Setter method for currency
   * @param {Currency} currency
   */
  set currency(currency) {
    // Check if currency is an instance of Currency, throw error if not
    if (currency instanceof Currency) {
      this._currency = currency; // Set the private _currency variable
    } else {
      throw new TypeError('currency must be an instance of Currency');
    }
  }

  // Getter method for currency
  get currency() {
    return this._currency;
  }

  // Method to display the full price (amount and currency)
  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  /**
   * Static method to convert price based on conversion rate
   * @param {Number} amount
   * @param {Number} conversionRate
   */
  static convertPrice(amount, conversionRate) {
    // Check if amount and conversionRate are numbers, throw error if not
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }

    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }

    // Return the converted price
    return amount * conversionRate;
  }
}

// Export the Pricing class as the default export
export default Pricing;
