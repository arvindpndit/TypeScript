function getOTP(access: boolean): { otp: number } {
  return {
    otp: Math.random(),
  };
}

getOTP(true);
