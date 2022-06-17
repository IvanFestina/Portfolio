import Particles from "react-tsparticles";
import {loadSlim} from "tsparticles-slim";

export const ParticlesComponent = () => {
    const particlesInit = (engine: any) => {
        loadSlim(engine)
    }
    return (
        <Particles
            //@ts-ignore
            init={particlesInit}
            options={{
                background: {
                    color: "#294861",
                    position: "50% 50%",
                    repeat: "no-repeat",
                    size: "cover"
                },
                fullScreen: {
                    enable: true,
                    zIndex: -1
                },
                interactivity: {
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

                        }
                    }
                },
                particles: {
                    color: {
                        value: "#FFFFE0"
                    },
                    move: {
                        attract: {
                            rotate: {
                                x: 600,
                                y: 600
                            }
                        },
                        enable: true,
                        random: true,
                        speed: 0.75,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                            factor: 1000
                        },
                        value: 100
                    },
                    opacity: {
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
                        value: {
                            min: 1,
                            max: 2
                        },
                        animation: {
                            speed: 4,
                            minimumValue: 0.3
                        }
                    },
                }
            }}
        />
    );
}