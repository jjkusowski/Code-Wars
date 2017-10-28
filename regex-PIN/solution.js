function validatePIN (pin) {
  result = /^\d{4}$|^\d{6}$/.test(pin)
  return result
}
