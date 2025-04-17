const bubbleSort = (arr) => {
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
                
            }
        }
    } while (swapped);

    return arr;
};

let myArray = [97, 45, 49, 32,2 ,5 , 9, 99, 1, 7];
console.log(bubbleSort(myArray));