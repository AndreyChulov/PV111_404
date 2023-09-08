class Road_404 {
    #_road = [];
    #_levelRoad = [];
    #_roadSize = 20;
    #_endRoadIndex = 0;

    set RoadSize(value){
        this.#_roadSize = value;
    }

    get Road(){
        console.log("Road=", this.#_road)
        console.log("LevelRoad=", this.#_levelRoad)
        console.log("RoadSize=", this.#_roadSize)
        console.log("EndRoadIndex=", this.#_endRoadIndex)
        console.trace()

        if (this.#_road.length == 0){
            this.#CreateRoad()
        }

        return this.#_road;//[...this.#_road];
    }

    MoveRoad(){
        let nextIndex = this.#_endRoadIndex + 1;

        if (nextIndex == this.#_levelRoad.length){
            nextIndex = 0;
        }

        this.#_road.shift();
        this.#_road.push(this.#_levelRoad[nextIndex]);
        this.#_road = [...this.#_road];
        this.#_endRoadIndex = nextIndex;
    }

    #CreateRoad(){
        for (let counter=0; counter < this.#_roadSize; counter++){
            this.#_road.push(this.#_levelRoad[counter])
        }

        this.#_endRoadIndex = this.#_roadSize - 1;
    }

    GenerateLevel() {
        this.#_levelRoad = [1,2,1,0,1,0,0,0,0,1,2,1,2,2,1,0,1,0,0,0,0,0,1,2,1,2,2,1,0,1,0,1,0,1]
    }
}

export default new Road_404()