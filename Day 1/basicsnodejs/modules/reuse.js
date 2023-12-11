// module OR class OR library
module.exports = {
    addNumber: function(a,b) {
        return a + b;
    },
    getArraySize: function(arr) {
        return arr.length;
    },
    printArray: function(arr) {
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            console.log(element);
            
        }
    },
    printJSON: function(obj) {
        for (const key in obj) {
            if (Object.hasOwnProperty.call(obj, key)) {
                const element = obj[key];
                console.log(key, "=",element);
                
            }
        }
    }
}