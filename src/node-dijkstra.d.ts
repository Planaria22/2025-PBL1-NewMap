// src/types/node-dijkstra.d.ts
declare module 'node-dijkstra' {
  export type GraphData = {
    [key: string]: {
      [key: string]: number;
    };
  };

  export default class Graph {
    constructor(graph?: GraphData);

    addNode(
      name: string,
      edges: { [key: string]: number }
    ): void;

    path(
      start: string,
      end: string,
      options?: { cost?: boolean }
    ): string[] | { path: string[]; cost: number } | null;
  }
}
