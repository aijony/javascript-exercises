

function selectionSort (nums) {
    var minIndex;
    for(i = 0; i < nums.length; i++){
        minIndex = i;
        for(j = i; j < nums.length; j++){
            if(nums[j] < nums[minIndex]){
                minIndex = j;
            };
        };
        var temp = nums[i];
        nums[i] = nums[minIndex];
        nums[minIndex] = temp;
    };
    return nums;
};


