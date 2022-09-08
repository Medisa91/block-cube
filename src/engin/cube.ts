import {CubeData} from "./cubeData";
import {ICube} from "./icube";


export class Cube {
    private cube: ICube;
    public static size: number = 5;
  
    public constructor() {
      const type = Math.floor(Math.random() * 18) + 1;
      this.cube = CubeData.getCube(type);
    }
  
    public getCubeType = () => this.cube.type;
  
    public getCube = () => this.cube.cube;
  }