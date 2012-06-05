function getCube() {
    var puzzlecube = new WaveEngineJS.Model();
    puzzlecube.addVertex(39.3701, -39.3701, 39.3701);
    puzzlecube.addVertex(39.3701, 39.3701, 39.3701);
    puzzlecube.addVertex(-39.3701, 39.3701, 39.3701);
    puzzlecube.addVertex(-39.3701, -39.3701, 39.3701);
    puzzlecube.addVertex(39.3701, -39.3701, -39.3701);
    puzzlecube.addVertex(39.3701, 39.3701, -39.3701);
    puzzlecube.addVertex(-39.3701, -39.3701, -39.3701);
    puzzlecube.addVertex(-39.3701, 39.3701, -39.3701);
    puzzlecube.addPolygon([0, 1, 2, 3]);
    puzzlecube.addPolygon([4, 5, 1, 0]);
    puzzlecube.addPolygon([6, 7, 5, 4]);
    puzzlecube.addPolygon([3, 2, 7, 6]);
    puzzlecube.addPolygon([1, 5, 7, 2]);
    puzzlecube.addPolygon([4, 0, 3, 6]);
    return puzzlecube;
}