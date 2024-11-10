// 1 - masala


async function getRandomNumber() {
    return new Promise((resolve) => {
        const randomNumber = Math.floor(Math.random() * 10);
        console.log("Kuting...");
        setTimeout(() => {
            resolve(randomNumber);
        }, 2000)
    })
}


async function random_generator() {
    console.log(await getRandomNumber());
}

random_generator();





























