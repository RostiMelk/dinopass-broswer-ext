let message = document.querySelector("#generatedMessage"),
    result = document.querySelector("#resultPassword");

function randomResponse() {
    responses = [
        "Here's a password I made just for you!",
        "Sure, no problem.",
        "Sure, here's another one.",
        "OK. Here you are!",
        "Yep. Another one for you!",
        "I love passwords!",
        "Remember to keep your passwords safe.",
        "I still love passwords!",
        "Passwords, passwords, passwords, here you go!",
        "Sure, no problem.",
        "Yep, another one for you.",
        "OK.",
        "Alakazam! New password. Just like magic!",
        "You can call me the 'Genie of the passwords!'",
        "OK, another password.",
        "Alright, here you go.",
        "Yep, here you go.",
        "You want another one? You got it!",
        "Really? Another one? OK.",
        "Shazaaam!",
        "OK, haven't you made your choice yet?",
        "You're not one of those fussy password people are you?",
        "I bet you are.",
        "See, I am sure you are now.",
        "Come on, this one's a good one.",
        "Alright.",
        "Sheesh, pick a password already.",
        "Really, pick one.",
        "I think you should pick this one.",
        "Hmmm.",
        "OK.",
        "Fine.",
        "OK, now this is your last one.",
        "Fine. Now THIS one is your last one. Really.",
        "Alright, now THIS one is really your last one. I mean it!",
        "Nope, that's it for you. No more.",
        "You are waaayyy too fussy.",
        "Nope. No more. That's all for you.",
        "Nope.",
        "No way.",
        "OK, fine. I'll give you ONE more.",
        "Now that's really all you're getting.",
        "Just kidding! I LOVE passwords!",
        "Happy to make them for you all day!",
    ]

    randResponse = responses[Math.floor(Math.random() * responses.length)];
    message.textContent = randResponse;
    if (typeof prevResponse == "undefined") {
        newResponse = randResponse;
    } else {
        newResponse = randResponse;
        if (newResponse == prevResponse) randomNum += 1;
    };
}

function getPassword(type) {
    const dinopassApi = 'https://www.dinopass.com/password/';

    fetch(dinopassApi+type)
        .then(response => response.text())
        .then((response) => {
            result.value = response;
        })
        .catch(function (error) {
            console.log('Error during fetch: ' + error.message);
        });
}

document.querySelector("#generateSimple").addEventListener("click", () => {
    randomResponse();
    getPassword('simple');
});

document.querySelector("#generateStrong").addEventListener("click", () => {
    randomResponse();
    getPassword('strong');
});

document.querySelector("#copyPass").addEventListener("click", () => {
    result.select();
    document.execCommand("copy");
    message.innerText = 'Copied password!'
});


randomResponse();
getPassword('simple');