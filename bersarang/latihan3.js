var a= '';

for (let i = 10; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        a += '*';
    }
    a += '\n'
    
}

console.log(a);