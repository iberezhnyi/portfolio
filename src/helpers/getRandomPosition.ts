// lg (554px): scaling factor = 1
// xl / 1200+ / 554 x 150
const availablePositionsXL: [number, number][] = [
  // 1 line
  [2.8, 0.57],
  [1.4, 0.57],
  [0, 0.57],
  [-1.4, 0.57],
  [-2.8, 0.57],

  // 2 line
  [2.8, -0.09],
  [1.4, -0.09],
  [0, -0.09],
  [-1.4, -0.09],
  [-2.8, -0.09],

  // 3 line
  [2.8, -0.75],
  [1.4, -0.75],
  [0, -0.75],
  [-1.4, -0.75],
  [-2.8, -0.75],
]

// lg (928px): scaling factor = 928 / 554 ≈ 1.68
// lg / 960-1199 / 928 x 150
const availablePositionsLG: [number, number][] = [
  // 1 line
  [2.8 * 1.68, 0.57], // ≈ [4.704, 0.57]
  [1.4 * 1.68, 0.57], // ≈ [2.352, 0.57]
  [0 * 1.68, 0.57], // ≈ [0, 0.57]
  [-1.4 * 1.68, 0.57], // ≈ [-2.352, 0.57]
  [-2.8 * 1.68, 0.57], // ≈ [-4.704, 0.57]

  // 2 line
  [2.8 * 1.68, -0.09], // ≈ [4.704, -0.09]
  [1.4 * 1.68, -0.09], // ≈ [2.352, -0.09]
  [0 * 1.68, -0.09], // ≈ [0, -0.09]
  [-1.4 * 1.68, -0.09], // ≈ [-2.352, -0.09]
  [-2.8 * 1.68, -0.09], // ≈ [-4.704, -0.09]

  // 3 line
  [2.8 * 1.68, -0.75], // ≈ [4.704, -0.75]
  [1.4 * 1.68, -0.75], // ≈ [2.352, -0.75]
  [0 * 1.68, -0.75], // ≈ [0, -0.75]
  [-1.4 * 1.68, -0.75], // ≈ [-2.352, -0.75]
  [-2.8 * 1.68, -0.75], // ≈ [-4.704, -0.75]
]

// md (736px): scaling factor = 736 / 554 ≈ 1.33
// md / 768-959 / 736 x 150
const availablePositionsMD: [number, number][] = [
  // 1 line
  [2.8 * 1.33, 0.57], // ≈ [3.724, 0.57]
  [1.4 * 1.33, 0.57], // ≈ [1.862, 0.57]
  [0 * 1.33, 0.57], // ≈ [0, 0.57]
  [-1.4 * 1.33, 0.57], // ≈ [-1.862, 0.57]
  [-2.8 * 1.33, 0.57], // ≈ [-3.724, 0.57]

  // 2 line
  [2.8 * 1.33, -0.09], // ≈ [3.724, -0.09]
  [1.4 * 1.33, -0.09], // ≈ [1.862, -0.09]
  [0 * 1.33, -0.09], // ≈ [0, -0.09]
  [-1.4 * 1.33, -0.09], // ≈ [-1.862, -0.09]
  [-2.8 * 1.33, -0.09], // ≈ [-3.724, -0.09]

  // 3 line
  [2.8 * 1.33, -0.75], // ≈ [3.724, -0.75]
  [1.4 * 1.33, -0.75], // ≈ [1.862, -0.75]
  [0 * 1.33, -0.75], // ≈ [0, -0.75]
  [-1.4 * 1.33, -0.75], // ≈ [-1.862, -0.75]
  [-2.8 * 1.33, -0.75], // ≈ [-3.724, -0.75]
]

// sm (608px): scaling factor = 608 / 554 ≈ 1.10
// sm / 640-767 / 608 x 150
const availablePositionsSM: [number, number][] = [
  // 1 line
  [2.8 * 1.1, 0.57], // ≈ [3.08, 0.57]
  [1.4 * 1.1, 0.57], // ≈ [1.54, 0.57]
  [0 * 1.1, 0.57], // ≈ [0, 0.57]
  [-1.4 * 1.1, 0.57], // ≈ [-1.54, 0.57]
  [-2.8 * 1.1, 0.57], // ≈ [-3.08, 0.57]

  // 2 line
  [2.8 * 1.1, -0.09], // ≈ [3.08, -0.09]
  [1.4 * 1.1, -0.09], // ≈ [1.54, -0.09]
  [0 * 1.1, -0.09], // ≈ [0, -0.09]
  [-1.4 * 1.1, -0.09], // ≈ [-1.54, -0.09]
  [-2.8 * 1.1, -0.09], // ≈ [-3.08, -0.09]

  // 3 line
  [2.8 * 1.1, -0.75], // ≈ [3.08, -0.75]
  [1.4 * 1.1, -0.75], // ≈ [1.54, -0.75]
  [0 * 1.1, -0.75], // ≈ [0, -0.75]
  [-1.4 * 1.1, -0.75], // ≈ [-1.54, -0.75]
  [-2.8 * 1.1, -0.75], // ≈ [-3.08, -0.75]
]

// xs (448px): scaling factor = 448 / 554 ≈ 0.81
// xs / 480-639 / 448 x 150
const availablePositionsXS: [number, number][] = [
  // 1 line
  [2.8 * 0.81, 0.57], // ≈ [3.08, 0.57]
  [1.4 * 0.81, 0.57], // ≈ [1.54, 0.57]
  [0 * 0.81, 0.57], // ≈ [0, 0.57]
  [-1.4 * 0.81, 0.57], // ≈ [-1.54, 0.57]
  [-2.8 * 0.81, 0.57], // ≈ [-3.08, 0.57]

  // 2 line
  [2.8 * 0.81, -0.09], // ≈ [3.08, -0.09]
  [1.4 * 0.81, -0.09], // ≈ [1.54, -0.09]
  [0 * 0.81, -0.09], // ≈ [0, -0.09]
  [-1.4 * 0.81, -0.09], // ≈ [-1.54, -0.09]
  [-2.8 * 0.81, -0.09], // ≈ [-3.08, -0.09]

  // 3 line
  [2.8 * 0.81, -0.75], // ≈ [3.08, -0.75]
  [1.4 * 0.81, -0.75], // ≈ [1.54, -0.75]
  [0 * 0.81, -0.75], // ≈ [0, -0.75]
  [-1.4 * 0.81, -0.75], // ≈ [-1.54, -0.75]
  [-2.8 * 0.81, -0.75], // ≈ [-3.08, -0.75]
]

const getRandomPosition = (positions: [number, number][]) => {
  if (positions.length === 0) {
    return [0, 0]
  }

  const index = Math.floor(Math.random() * positions.length)
  const selectedPosition = positions.splice(index, 1)[0]
  return selectedPosition
}

export {
  getRandomPosition,
  availablePositionsXL,
  availablePositionsLG,
  availablePositionsMD,
  availablePositionsSM,
  availablePositionsXS,
}
