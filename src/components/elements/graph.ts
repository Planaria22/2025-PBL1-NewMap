import Graph from 'node-dijkstra';
import GraphLeft from '../../data/graphLeft';
import GraphCenter from '../../data/graphCenter';
import GraphRight from '../../data/graphRight';
import imgPaths from '../../data/imgpath';

export type ImgPath = {
  id: string;
  src: string;
};

export type NodeId = string;
export type Edge = {
  to: NodeId;
  cost: number;
};
export type graphData = Record<NodeId, Edge[]>;
export type RouteType = 'left' | 'center' | 'right';

/* =========
 * position → データの対応表
 * ========= */
const graphMap: Record<RouteType, graphData> = {
  left: GraphLeft,
  center: GraphCenter,
  right: GraphRight,
};

/* =========
 * グラフ生成
 * ========= */
function buildGraph(
  data: Record<string, { to: string; cost: number }[]>,
) {
  const graph = new Graph();
  Object.entries(data).forEach(([from, edges]) => {
    const node: Record<string, number> = {};
    edges.forEach(({ to, cost }) => {
      node[to] = cost;
    });
    graph.addNode(from, node);
  });
  return graph;
}

/* =========
 * ルート画像取得（検索時に呼ぶ）
 * ========= */
export async function getViaImages(
  position: RouteType,
  from: string,
  to: string,
): Promise<ImgPath[]> {
  await new Promise(r => setTimeout(r, 300)); // 擬似遅延

  const graphData = graphMap[position];
  const graph = buildGraph(graphData);

  const path = graph.path(from, to) as string[] | null;
  if (!path || path.length <= 2) return [];

  const viaNodes = path.slice(1, -1);

  const imgMap = new Map(
    imgPaths.map(img => [img.id, img]),
  );

  return viaNodes
    .map(id => imgMap.get(id))
    .filter((v): v is ImgPath => v !== undefined);
}