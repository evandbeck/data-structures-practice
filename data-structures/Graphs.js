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
    // Adding an Edge
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    // Removing an Edge
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        )
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        )
    }
    // Removing a Vertex
    removeVertex() {

    }
}