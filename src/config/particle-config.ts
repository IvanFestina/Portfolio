export const particleConfig = {
    background: {
        color: "#294861",
    },
    fpsLimit: 60,
    fullScreen: {
        zIndex: -1
    },
    interactivity: {
        detectsOn: "canvas",
        events: {
            onClick: {
                enable: true,
                mode: "attract"
            },
            onHover: {
                enable: true,
                mode: "repulse"
            }
        },
        modes: {
            attract: {
                factor: 3,
                speed: 2
            },
            repulse: {
                distance: 100,
                factor: 20,
                divs: {
                    distance: 200,
                    duration: 0.4,
                    factor: 100,
                    speed: 1,
                    maxSpeed: 50,
                    easing: "ease-out-quad",
                    selectors: []
                }
            }
        }
    },
    particles: {
        color: {
            value: "#FFFFE0"
        },
        links: {
            color: {
                value: "#ffffff"
            },
            distance: 150,
            opacity: 0.4
        },
        move: {
            attract: {
                rotate: {
                    x: 600,
                    y: 600
                }
            },
            enable: true,
            path: {},
            outModes: {
                bottom: "out",
                left: "out",
                right: "out",
                top: "out"
            },
            random: true,
            speed: 0.75,
            spin: {}
        },
        number: {
            density: {
                enable: true
            }
        },
        opacity: {
            random: {
                enable: true
            },
            value: {
                min: 0,
                max: 1
            },
            animation: {
                enable: true,
                speed: 1,
                minimumValue: 0
            }
        },
        size: {
            random: {
                enable: true
            },
            value: {
                min: 1,
                max: 2
            },
            animation: {
                speed: 4,
                minimumValue: 0.3
            }
        }
    }
}