export const validationPassword = (value) => {
  const result = {
    whitespaces: {
      violated: false,
      message: "Пароль не повинен містити пробілів.",
    },
    uppercase: {
      violated: false,
      message: "Пароль повинен містити хоча б один символ верхнього регістру.",
    },
    lowercase: {
      violated: false,
      message: "Пароль має містити принаймні один малий регістр.",
    },
    number: {
      violated: false,
      message: "Пароль має містити хоча б одну цифру.",
    },
    symbol: {
      violated: false,
      message: "Пароль повинен містити принаймні один спеціальний символ.",
    },
    valid: { violated: false, message: "Пароль має містити 8-16 символів." },
  };

  result.whitespaces.violated = !/^\S*$/.test(value);
  result.uppercase.violated = !/^(?=.*[A-Z]).*$/.test(value);
  result.lowercase.violated = !/^(?=.*[a-z]).*$/.test(value);
  result.number.violated = !/^(?=.*[0-9]).*$/.test(value);
  result.symbol.violated =
    !/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/.test(value);
  result.valid.violated = !/^.{8,16}$/.test(value);

  return result;
};
