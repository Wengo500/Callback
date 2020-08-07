const runner = {
    $$runnerId: null,
    $$tasks: [],
    setSpeed: function(speed) {
        this.stop();
        this.start(speed);
    },
    add: function(task) {
        this.$$tasks.push(task);
    },
    start: function(speed) {
        var _this = this;
        this.$$runnerId = setTimeout(function callback() {
            _this.$$tasks.forEach(function(value) {
                value();
            });
            _this.$$runnerId = setTimeout(callback, speed);
        }, speed);
    },
    stop: function() {
        clearTimeout(this.$$runnerId);
    },
};

runner.add(function() {
    const app = document.getElementById("app");
    const date = new Date();
    app.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
});

runner.add(() => {
    console.log("Hello");
});
runner.add(() => {
    console.log("world");
});
runner.setSpeed(1000);




const arr = ['1234567', 'Andrew', '7654321'];
const arr2 = [22, 12, 10, 5];

const methodMap = (array, callback) => {
    const newArr = [];

    for (let i = 0; i < array.length; i++) {

        newArr.push(callback.call(array, array[i], i));
    }
    return newArr;
};

const slicer = methodMap(arr, function(slicer) {
    return slicer.slice(0, 3);
});


const minus = methodMap(arr2, function(result) {
    return result - 10;
});

console.log(slicer);
console.log(minus);