// Adjacency List
class Graph {
    constuctor() {
        this.adjacencyList = {};
    }
    // Undirected Graph
    // Adding a Vertex
    addVertext(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
}