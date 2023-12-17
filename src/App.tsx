import { useEffect, useState } from "react";
import { GraphCanvas, GraphEdge, GraphNode } from "reagraph";

function random(start: number, end: number): number {
  return Math.floor(Math.random() * (end - start));
}

function App() {
  const [graph, set_graph] = useState<{
    nodes: GraphNode[]
    edges: GraphEdge[]
  }>({ nodes: [], edges: [] });

  useEffect(() => {
    setTimeout(() => {
      const nodes: GraphNode[] = [];
      const edges: GraphEdge[] = [];

      const num_nodes = 100;
      const num_edges = 50;
      const num_clusters = 20;

      for (const id of Array(num_nodes).keys()) {
        nodes.push({
          id: `${id}`,
          label: `${id}`,
          data: {
            cluster: random(0, num_clusters),
          }
        });
      }

      for (const id of Array(num_edges).keys()) {
        edges.push({
          id: `${id}`,
          source: `${random(0, num_nodes)}`,
          target: `${random(0, num_nodes)}`,
        });
      }

      set_graph({
        nodes,
        edges
      });
    }, 1000);
  }, []);

  return (
    <main>
      <GraphCanvas
        nodes={graph.nodes}
        edges={graph.edges}
        clusterAttribute="cluster" />
    </main>
  )
}

export default App
