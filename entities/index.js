import Matter from "matter-js"
import Monkey from "../components/Monkey";
import Obstacle from "../components/Obstacle";
import { getPipeSizePosPair } from "../utils/random";

export default restart = () => {
    let engine = Matter.Engine.create({
        enableSleeping:false,
    })

    let world = engine.world
    world.gravity.y = 0.4;
    const pipeSizePosA = getPipeSizePosPair(-300)
    const pipeSizePosB = getPipeSizePosPair(300)

    return {
        physics: {engine, world},
        Monkey: Monkey(world, 'green', {x:50, y:200}, {height:40, width:40}),

        ObstacleTop1: Obstacle(world, 'ObstacleTop1', 'red', pipeSizePosA.pipeTop.pos, pipeSizePosA.pipeTop.size),
        ObstacleBottom1: Obstacle(world, 'ObstacleBottom1', 'red', pipeSizePosA.pipeBottom.pos, pipeSizePosA.pipeBottom.size),
        ObstacleTop2: Obstacle(world, 'ObstacleTop2', 'red', pipeSizePosB.pipeTop.pos, pipeSizePosB.pipeTop.size),
        ObstacleBottom2: Obstacle(world, 'ObstacleBottom2', 'red', pipeSizePosB.pipeBottom.pos, pipeSizePosB.pipeBottom.size),
    }
}