/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length == 0) return [];
    else return [numbers[0], numbers.slice(-1)[0]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((num: number) => num * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((num: string) => (isNaN(Number(num)) ? 0 : Number(num)));
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const amCopy = [...amounts];

    return amCopy
        .map((str: string) => (str.charAt(0) == "$" ? str.slice(1) : str))
        .map((num: string) => (isNaN(Number(num)) ? 0 : Number(num)));
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const clonedMessages = [...messages];
    return clonedMessages
        .filter((message: string) => message.slice(-1)[0] != "?")
        .map((message: string) =>
            message.slice(-1)[0] == "!" ? message.toUpperCase() : message,
        );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const wordsClone = [...words];
    return wordsClone
        .map((word: string) => (word.length < 4 ? 1 : 0))
        .reduce((currentTotal: number, num: number) => currentTotal + num, 0);
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    return colors.reduce(
        (currentBool: boolean, currentItem: string) =>
            (currentItem == "red" ||
                currentItem == "blue" ||
                currentItem == "green") &&
            currentBool,
        true,
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const addendsClone = [...addends];
    const addendsClone2 = [...addends];
    const sum = addendsClone.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0,
    );
    const adds = addendsClone2.reduce(
        (currentStr: string, num: number) => currentStr + num.toString() + "+",
        "",
    );
    let toReturn = sum + "=" + (adds ? adds : "0\\");
    return toReturn.slice(0, toReturn.length - 1);
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const firstNegativeIndex = values.findIndex((value: number) => value < 0);
    const toReturn = [...values];
    if (firstNegativeIndex >= 0) {
        const toReturn = [...values];
        const valuesClone = toReturn.slice(0, firstNegativeIndex);
        console.log(valuesClone);
        const sum = valuesClone.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0,
        );
        toReturn.splice(firstNegativeIndex + 1, 0, sum);
        return toReturn;
    }
    const sum = toReturn.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0,
    );
    toReturn.push(sum);
    return toReturn;
}
