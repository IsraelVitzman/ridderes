import { esey1 } from "./riddesEesy/esey1.js"
import { esey2 } from "./riddesEesy/esey2.js"
import { hard1 } from "./riddesHard/hard1.js"
import { medum1 } from "./riddesMedum/medum1.js"

const riddersEesy = [esey1, esey2]
const riddersMedum = [medum1]
const riddersHard = [hard1]

export function getRiddersEesy() {
    return riddersEesy
}

export function getRiddersMedum() {
    return riddersMedum
}

export function getRiddersHard() {
    return riddersHard
}

export function getLangteEesy() {
    return riddersEesy.length
}
export function getLangteMedum() {
    return riddersMedum.length
}
export function getLangteHard() {
    return riddersHard.length
}