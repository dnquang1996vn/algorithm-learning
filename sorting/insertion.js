let array = [31, 41, 59, 26, 42, 58];
const array2 = [5, 2, 4, 6, 1, 3];


function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {
        const value = arr[i]
        let j = i - 1;
        while (j >= 0 && arr[j] < value) {
            arr[j + 1] = arr[j];
            j = j - 1
        }
        arr[j + 1] = value
    }

    return arr
}

console.log(insertionSort(array));
console.log(insertionSort(array2));
