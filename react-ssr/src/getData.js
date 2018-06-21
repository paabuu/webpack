const data = [
    { text: '1111' },    
    { text: '2222' },
    { text: '3333' },
    { text: '4444' },
    { text: '5555' },
];

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 1000);
    })
}

export default getData;