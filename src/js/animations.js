export const applyAnimation = (selector, animation, duration = 1000) => {
    $(selector).transition({
        animation: animation,
        duration: duration,

        allowRepeats: false
    });
}

applyAnimation('.header-title', 'pulse');