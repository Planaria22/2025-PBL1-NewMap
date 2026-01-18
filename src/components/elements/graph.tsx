import { useMemo } from 'react';
import Graph from 'node-dijkstra';
import GraphLeft from '../../data/graphLeft';
import GraphCenter from '../../data/graphCenter';
import GraphRight from '../../data/graphRight';
import imgPaths from '../../data/imgpath';

type ImgPath = {
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
 * カスタムフック
 * ========= */
export function useViaImages(
  position: RouteType,
  from: string,
  to: string,
): ImgPath[] {
  const graphData = graphMap[position];

  const graph = useMemo(() => buildGraph(graphData), [graphData]);

  return useMemo(() => {
    // ① 最短経路
    const path = graph.path(from, to) as string[] | null;
    if (!path || path.length <= 2) return [];

    // ② 先頭・末尾を削除
    const viaNodes = path.slice(1, -1); // ["C", "B"]

    // ③ id → imgPath の対応表を作る
    const imgMap = new Map(
      imgPaths.map(img => [img.id, img]),
    );

    // ④ 順序を保ったまま変換
    return viaNodes
      .map(id => imgMap.get(id))
      .filter((v): v is ImgPath => v !== undefined);
  }, [from, to, graph]);
}