class MathUtil {

  static add(a, b) {
    this.validateInputs(a, b);
    return a + b;
  }

  static subtract(a, b) {
    this.validateInputs(a, b);
    return a - b;
  }


  static multiply(a, b) {
    this.validateInputs(a, b);
    return a * b;
  }

  static divide(a, b) {
    this.validateInputs(a, b);
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }

  static power(a, b) {
    this.validateInputs(a, b);
    return Math.pow(a, b);
  }

  static sqrt(a) {
    if (typeof a !== "number") throw new Error("Inputs must be numbers");
    if (a < 0) throw new Error("Cannot compute square root of negative number");
    return Math.sqrt(a);
  }

  static average(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0)
      throw new Error("Input must be a non-empty number array");

    numbers.forEach(n => {
      if (typeof n !== "number") throw new Error("All elements must be numbers");
    });

    const sum = numbers.reduce((acc, n) => acc + n, 0);
    return sum / numbers.length;
  }

  static validateInputs(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error("Inputs must be numbers");
    }
  }
}

module.exports = MathUtil;
