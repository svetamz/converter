function convertToM(value, unit) {
    switch (unit) {
      case "m":
        return value;
      case "cm":
        return value / 100;
      case "in":
        return value * 0.0254;
      case "ft":
        return value * 0.3048;
      default:
        throw new Error("Непідтримувана одиниця виміру.");
    }
  }
  
  function convertToCm(value, unit) {
    switch (unit) {
      case "m":
        return value * 100;
      case "cm":
        return value;
      case "in":
        return value * 2.54;
      case "ft":
        return value * 30.48;
      default:
        throw new Error("Непідтримувана одиниця виміру.");
    }
  }
  
  function convertToIn(value, unit) {
    switch (unit) {
      case "m":
        return value / 0.0254;
      case "cm":
        return value / 2.54;
      case "in":
        return value;
      case "ft":
        return value * 12;
      default:
        throw new Error("Непідтримувана одиниця виміру.");
    }
  }
  
  function convertToFt(value, unit) {
    switch (unit) {
      case "m":
        return value / 0.3048;
      case "cm":
        return value / 30.48;
      case "in":
        return value / 12;
      case "ft":
        return value;
      default:
        throw new Error("Непідтримувана одиниця виміру.");
    }
  }
  
  module.exports = {
    convertToM,
    convertToCm,
    convertToIn,
    convertToFt,
  };