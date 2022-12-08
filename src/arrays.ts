/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    // Check if the input array is empty
    if (numbers.length === 0) {
        // Return an empty array
        return [];
    }

    // Check if the input array only contains one element
    if (numbers.length === 1) {
        // Return a new array with the single element repeated twice
        return [numbers[0], numbers[0]];
    }

    // Return a new array with the first and last number in the input array
    return [numbers[0], numbers[numbers.length - 1]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((n) => n * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((s) => parseInt(s) || 0);
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((s) => {
        const stripped = s.replace(/\$/g, "");
        return parseInt(stripped) || 0;
    });
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    return messages
        .filter((m) => !m.endsWith("?"))
        .map((m) => (m.endsWith("!") ? m.toUpperCase() : m));
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words.filter((w) => w.length < 4).length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) return true;
    return colors.every(
        (color) => color === "red" || color === "blue" || color === "green"
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
    let stringifiedNumbers = "";
    const sum = addends.reduce((total, number) => total + number, 0);

    if (addends.length === 0) {
        stringifiedNumbers = "0";
    } else {
        stringifiedNumbers = addends
            .map((number) => number.toString())
            .join("+");
    }

    return `${sum}=${stringifiedNumbers}`;
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
    let sum = 0;
    let previousSum = 0;

    const negativeIndex = values.findIndex((number) => number < 0);
    const result = [...values];

    if (negativeIndex >= 0) {
        for (let i = 0; i < negativeIndex; i++) {
            previousSum += values[i];
        }

        result.splice(negativeIndex + 1, 0, previousSum);
    } else {
        sum = values.reduce((total, number) => total + number, 0);
        result.push(sum);
    }

    return result;
}
