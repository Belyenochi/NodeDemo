var arr = [1,2,3,4,5,6];

var len = arr.length,
    i = 0;

// sync code
/*
    for (; i < len; ++i) {
        arr[i] = sync(arr[i]);
    }
*/

// async code
(function next(i, len, callback) {
    if (i < len) {
        async (arr[i], function (value) {
            arr[i] = value;
            next(i + 1, len. callback);
        });
    } else {
        callback();
    }
}(0, arr.length, function () {
    console.log(1);
}));