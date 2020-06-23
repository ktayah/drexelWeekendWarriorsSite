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