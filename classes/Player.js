

export class namePlayer {
    static list = []

    constructor(name, aveTime, allTime) {

        this.name = name
        this.allTime = allTime
        this.aveTime = aveTime
    }
    add() {
        namePlayer.list.push({ "name": this.name, "aveTime": this.aveTime, "allTime": this.allTime })
    }
    getList() {
        return namePlayer.list
    }

}