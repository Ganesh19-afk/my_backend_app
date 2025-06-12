import crypto from "crypto"

export const generateOTP = (): string => {
  return crypto.randomInt(100000, 999999).toString()
}

export const generateResetToken = (): string => {
  return crypto.randomBytes(32).toString("hex")
}

export const isOTPExpired = (expiryTime: Date): boolean => {
  return new Date() > expiryTime
}
