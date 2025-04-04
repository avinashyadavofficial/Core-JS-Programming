let x=[3, 3, 4, 2, 3, 3, 5, 3];

function majorityElement(nums) {
    let candidate = null, count = 0;

    nums.forEach(num => {
        if (count === 0) candidate = num;
        count += (num === candidate) ? 1 : -1;
    });

    return candidate;
}

console.log(majorityElement(x)); // Output: 3

