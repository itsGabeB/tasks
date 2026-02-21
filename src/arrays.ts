/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let firstLast: number[] = [];
    if (numbers.length === 0) {
        return firstLast;
    } else if (numbers.length === 1) {
        firstLast = [...numbers, ...numbers];
    } else {
        firstLast = [numbers[0], numbers[numbers.length - 1]];
    }
    return firstLast;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let tripArr: number[] = [];
    tripArr = numbers.map((num: number) => num * 3);
    return tripArr;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let newNumsArr: number[] = [];
    newNumsArr = numbers.map((num: string): number =>
        Number.isNaN(+num) ? 0 : +num,
    );
    return newNumsArr;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let newStrArr: string[] = [];
    newStrArr = amounts.map((num: string): string =>
        num.startsWith("$") ? num.slice(1) : num,
    );
    let newNumsArr: number[] = [];
    newNumsArr = newStrArr.map((num: string): number =>
        Number.isNaN(+num) ? 0 : +num,
    );
    return newNumsArr;
};
//    newNumsArr = amounts.map((nums: string): number => nums.includes("$") ? () : number.isNaN(+nums)? 0: +nums);

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let newMessages: string[] = [];
    const sorted = messages.filter(
        (message: string): boolean => !message.endsWith("?"),
    );
    newMessages = sorted.map((message: string): string =>
        message.endsWith("!") ? message.toUpperCase() : message,
    );
    return newMessages;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((word: string): boolean => word.length < 4);
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const allColors = colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green",
    );
    return allColors;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    //let finalString: string = "";
    let total: number = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0,
    );

    return total.toString() + "=" + addends.join("+");
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
    let indexOfFirstNeg = values.findIndex((num: number): boolean => num < 0);
    let finalArr: number[] = [];
    if (indexOfFirstNeg === -1) {
        let total: number = values.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0,
        );
        finalArr = [...values, total];
    } else {
        let frontNums: number[] = values.slice(0, indexOfFirstNeg);
        let backNums: number[] = values.slice(indexOfFirstNeg + 1);
        let total: number = frontNums.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0,
        );
        finalArr = [...frontNums, values[indexOfFirstNeg], total, ...backNums];
    }
    return finalArr;
}
