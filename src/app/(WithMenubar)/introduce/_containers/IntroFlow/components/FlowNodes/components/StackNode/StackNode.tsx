"use client";

import { Handle, Node, NodeProps, Position } from "@xyflow/react";

import { NodeType } from "../../../../types";
import { getNodeColor } from "../../../../utils";

import { motion } from "motion/react";

type StackNodeProps = Node<
  { title: string; icon: React.ReactNode; type: NodeType },
  "stack"
>;

const StackNode = ({ data }: NodeProps<StackNodeProps>) => {
  return (
    <>
      <Handle
        id={data.title}
        type="target"
        position={Position.Top}
      />

      <motion.div
        className="w-[12rem] p-[0.4rem] flex items-center gap-[0.8rem] rounded-[0.8rem] border-[0.2rem] bg-white_500"
        style={{ borderColor: getNodeColor(data.type) }}
        whileHover={{ scale: 1.1 }}
      >
        <span className="w-[2rem] h-[2rem]">{data.icon}</span>
        <p>{data.title}</p>
      </motion.div>

      <Handle
        id={data.title}
        type="source"
        position={Position.Bottom}
      />
    </>
  );
};

export default StackNode;
