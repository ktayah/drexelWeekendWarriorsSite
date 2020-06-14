export const capitalizeFirstLetter = word => word.substring(0, 1).toUpperCase().concat(word.substring(1));
export const formalizeCamelCaseString = word => {
    const firstWord = word.match(/^[a-z]+/gm)[0];
    const capitalizedFirstWord = capitalizeFirstLetter(firstWord);
    const otherWords = word.match(/[A-Z][a-z]+/g)?.join(' ') || '';
    
    return capitalizedFirstWord.concat(' ', otherWords);;
}