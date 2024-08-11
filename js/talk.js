new TypeIt("#lywry", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("猫 X 鱼")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("幸福就是猫吃鱼🥰")
    .pause(3000)
    .go();

new TypeIt('#talkToWRY', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();