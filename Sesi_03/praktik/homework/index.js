const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];

const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = async (arr) => {
    return new Promise((resolve, reject) => {
        resolve(arr.map((item) => {
            if (typeof item === "string") {
                return item.toUpperCase();
            }
        }));
    });
};

const sortWords = async (arr) => {
    return new Promise((resolve, reject) => {
        resolve(arr.sort());
    });
}; 

makeAllCaps(arrayOfWords)
    .then(sortWords)
    .then(res => console.log(res))
    .catch(err => console.log(err));