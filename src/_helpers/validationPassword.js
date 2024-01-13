export const validationPassword = (value) => {
  const result = {
    valid: { violated: false, message: "Пароль має містити 8-16 символів." },
  };

  result.whitespaces.violated = !/^\S*$/.test(value);
  result.uppercase.violated = !/^(?=.*[A-Z]).*$/.test(value);
  result.lowercase.violated = !/^(?=.*[a-z]).*$/.test(value);
  result.number.violated = !/^(?=.*[0-9]).*$/.test(value);
  result.symbol.violated = !/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/.test(value);
  result.valid.violated = !/^.{8,16}$/.test(value);

  return result;
};
