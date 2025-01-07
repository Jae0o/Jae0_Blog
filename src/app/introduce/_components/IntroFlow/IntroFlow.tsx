"use client";

import "@xyflow/react/dist/style.css";

import { useCallback, useMemo, useState } from "react";

import { FlowNodes } from "@/lib/components/client";

import {
  Edge,
  MiniMap,
  Node,
  OnConnect,
  OnEdgesChange,
  OnNodesChange,
  Panel,
  ReactFlow,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "@xyflow/react";

import { STACK_FLOW_EDGES, STACK_FLOW_NODES } from "./constants";
import { getNodeColor } from "./utils";

const IntroFlow = () => {
  const [nodes, setNodes] = useState<Node[]>(STACK_FLOW_NODES);
  const [edges, setEdges] = useState<Edge[]>(STACK_FLOW_EDGES);

  const nodeTypes = useMemo(
    () => ({
      stack: FlowNodes.StackNode,
      title: FlowNodes.TitleNode,
    }),
    [],
  );

  const onNodesChange: OnNodesChange = useCallback(
    changes => setNodes(nds => applyNodeChanges(changes, nds)),
    [setNodes],
  );

  const onEdgesChange: OnEdgesChange = useCallback(
    changes => setEdges(eds => applyEdgeChanges(changes, eds)),
    [setEdges],
  );

  const onConnect: OnConnect = useCallback(
    connection => setEdges(eds => addEdge(connection, eds)),
    [setEdges],
  );

  return (
    <article className="w-full h-[80rem] border-[0.4rem] border-green_500 rounded-[2rem] select-none">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onConnect={onConnect}
        onEdgesChange={onEdgesChange}
        fitView
      >
        <MiniMap nodeColor={getNodeColor} />
        <Panel>
          <p className="px-[1.6rem] py-[1rem] text-[2rem] bg-green_500 rounded-[90rem] font-bold text-white_500">
            Use Stack Flow
          </p>
        </Panel>
      </ReactFlow>
    </article>
  );
};

export default IntroFlow;
