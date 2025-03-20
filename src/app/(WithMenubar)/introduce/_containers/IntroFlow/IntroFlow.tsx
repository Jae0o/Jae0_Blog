"use client";

import "@xyflow/react/dist/style.css";

import { useCallback, useMemo } from "react";

import {
  MiniMap,
  OnConnect,
  Panel,
  ReactFlow,
  addEdge,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";

import { FlowNodes } from "./components";
import { STACK_FLOW_EDGES, STACK_FLOW_NODES } from "./constants";
import { getMiniMapColor } from "./utils";

const IntroFlow = () => {
  const [nodes, , onNodesChange] = useNodesState(STACK_FLOW_NODES);
  const [edges, setEdges, onEdgesChange] = useEdgesState(STACK_FLOW_EDGES);

  const onConnect: OnConnect = useCallback(
    connection => setEdges(eds => addEdge(connection, eds)),
    [setEdges],
  );

  const nodeTypes = useMemo(
    () => ({
      title: FlowNodes.TitleNode,
      stack: FlowNodes.StackNode,
    }),
    [],
  );

  return (
    <article className="w-full h-[80rem] border-[0.4rem] border-black_500 rounded-[2rem] select-none">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <MiniMap nodeColor={getMiniMapColor} />
        <Panel>
          <p className="px-[1.6rem] py-[1rem] text-[2rem] bg-black_500 rounded-[90rem] font-bold text-white_500">
            Use Stack Flow
          </p>
        </Panel>
      </ReactFlow>
    </article>
  );
};

export default IntroFlow;
