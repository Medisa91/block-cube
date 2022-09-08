import {CubeType} from "./cubeType";
import {ICube} from "./icube";

export class CubeData {
    private static cubes: ICube[] = [
      {
        type: CubeType.OneOne,
        cube: [
          [true, false, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
        ],
      },
      {
        type: CubeType.TwoTwo,
        cube: [
          [true, true, false, false, false],
          [true, true, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
        ],
      },
      {
        type: CubeType.ThreeThree,
        cube: [
          [true, true, true, false, false],
          [true, true, true, false, false],
          [true, true, true, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
        ],
      },
      {
        type: CubeType.TwoRow,
        cube: [
          [true, true, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
        ],
      },
      {
        type: CubeType.ThreeRow,
        cube: [
          [true, true, true, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
        ],
      },
      {
        type: CubeType.FourRow,
        cube: [
          [true, true, true, true, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
        ],
      },
      {
        type: CubeType.FiveRow,
        cube: [
          [true, true, true, true, true],
          [false, false, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
        ],
      },
      {
        type: CubeType.TwoCol,
        cube: [
          [true, false, false, false, false],
          [true, false, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
        ],
      },
      {
        type: CubeType.ThreeCol,
        cube: [
          [true, false, false, false, false],
          [true, false, false, false, false],
          [true, false, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
        ],
      },
      {
        type: CubeType.FourCol,
        cube: [
          [true, false, false, false, false],
          [true, false, false, false, false],
          [true, false, false, false, false],
          [true, false, false, false, false],
          [false, false, false, false, false],
        ],
      },
      {
        type: CubeType.FiveCol,
        cube: [
          [true, false, false, false, false],
          [true, false, false, false, false],
          [true, false, false, false, false],
          [true, false, false, false, false],
          [true, false, false, false, false],
        ],
      },
      {
        type: CubeType.SmallLTopRight,
        cube: [
          [true, false, false, false, false],
          [true, true, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
        ],
      },
      {
        type: CubeType.SmallLTopLeft,
        cube: [
          [false, true, false, false, false],
          [true, true, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
        ],
      },
      {
        type: CubeType.SmallLDownRight,
        cube: [
          [true, true, false, false, false],
          [true, false, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
        ],
      },
      {
        type: CubeType.SmallLDownLeft,
        cube: [
          [true, true, false, false, false],
          [false, true, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
        ],
      },
      {
        type: CubeType.LargeLTopRight,
        cube: [
          [true, false, false, false, false],
          [true, false, false, false, false],
          [true, true, true, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
        ],
      },
      {
        type: CubeType.LargeLTopLeft,
        cube: [
          [false, false, true, false, false],
          [false, false, true, false, false],
          [true, true, true, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
        ],
      },
      {
        type: CubeType.LargeLDownRight,
        cube: [
          [true, true, true, false, false],
          [true, false, false, false, false],
          [true, false, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
        ],
      },
      {
        type: CubeType.LargeLDownLeft,
        cube: [
          [false, false, true, false, false],
          [false, false, true, false, false],
          [true, true, true, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
        ],
      },
    ];
  
    public static getCube(type: CubeType): ICube {
      return this.cubes.filter((x) => x.type === type)[0];
    }
  }