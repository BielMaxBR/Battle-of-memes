import Meme from "../Meme.js";

export default class Square extends Meme {
    constructor(scene, x, y, team) {
        super(
            scene,
            x, y,
            team,
            {
                attackFrames: [8],
                damage: 5,
                life: 10,
                stunPoints: [5],
                cooldown: 2,
                type: 'single'
            },
            {
                texture: 'test',
                frames: 4,
                animsConfig: {
                    frameRate: 10,
                    anims: [
                        {
                            key: 'walk',
                            start: 0,
                            end: 3
                        },
                        {
                            key: 'idle',
                            start: 10,
                            end: 17
                        },
                        {
                            key: 'attack',
                            start: 4,
                            end: 9
                        },

                    ]
                }
            }
        )
    }
}