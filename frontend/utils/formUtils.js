export const capitalizeFirstLetter = word => word.substring(0, 1).toUpperCase().concat(word.substring(1));
export const formalizeCamelCaseString = word => {
    if (typeof word === 'string') {
        const lowercaseWords = word.match(/^[a-z]+/gm);

        if (!lowercaseWords) {
            return word;
        } else {
            const firstWord = lowercaseWords[0];
            const capitalizedFirstWord = capitalizeFirstLetter(firstWord);
            const otherWords = word.match(/[A-Z][a-z]+/g)?.join(' ') || '';
            
            return capitalizedFirstWord.concat(' ', otherWords);
        }
    }
    return word;
}
export const parseTrueFalseObjectIntoStringObject = (object, objectName) => Object.assign(
    {},
    {
        [objectName]: Object.keys(object).length 
            ? Object.keys(object).reduce(
                (objectString, key) => {
                    if (object[key] && objectString.length) {
                        return `${objectString}, ${formalizeCamelCaseString(key)}`
                    } else if (object[key]) {
                        return formalizeCamelCaseString(key);
                    } else {
                        return objectString;
                    }
            }, '')
            : ''
    }
);