export const FadeInDown = (delay) => {
    return {
        init: { opacity: 0, y: -20 },
        anim: {
            opacity: 1,
            y: 0,
            transition: {
                delay: delay ? delay : 0,
                duration: 1
            }
        }
    }
}


