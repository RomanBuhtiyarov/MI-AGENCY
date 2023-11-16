
export const validationPassword = (value) => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
        return {key: "whitespaces", violated: true, message: "Пароль не повинен містити пробілів."};
    }else{
        return {key: "whitespaces", violated: false, message: "Пароль не повинен містити пробілів."};
    }

    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(value)) {
        return {key: "uppercase", violated: true, message: "Пароль повинен містити хоча б один символ верхнього регістру."};
    }else{
        return {key: "uppercase", violated: false, message: "Пароль повинен містити хоча б один символ верхнього регістру."};
    }

    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(value)) {
        return {key: "lowercase", violated: true, message: "Пароль має містити принаймні один малий регістр."};
    }else{
        return {key: "lowercase", violated: false, message: "Пароль має містити принаймні один малий регістр."};
    }

    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(value)) {
        return {key: "number", violated: true, message: "Пароль має містити хоча б одну цифру."};
    }else{
        return {key: "number", violated: false, message: "Пароль має містити хоча б одну цифру."};
    }

    const isContainsSymbol =
        /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
    if (!isContainsSymbol.test(value)) {
        return {key: "symbol", violated: true, message: "Пароль повинен містити принаймні один спеціальний символ."};
    }else{
        return {key: "symbol", violated: false, message: "Пароль повинен містити принаймні один спеціальний символ."};
    }

    const isValidLength = /^.{6,16}$/;
    if (!isValidLength.test(value)) {
        return {key: "valid", violated: true, message: "Пароль має містити 6-16 символів."};
    }else{
        return {key: "valid", violated: false, message: "Пароль має містити 6-16 символів."};
    }

    return null;
}