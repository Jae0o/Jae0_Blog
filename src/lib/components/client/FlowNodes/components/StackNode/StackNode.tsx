import { Handle, Node, NodeProps, Position } from "@xyflow/react";

type StackNodeProps = Node<{ title: string; icon: React.ReactNode }, "stack">;

const StackNode = ({ data }: NodeProps<StackNodeProps>) => {
  return (
    <>
      <Handle
        id={data.title}
        type="target"
        position={Position.Top}
      />

      <div
        className="w-[12rem] p-[0.4rem] flex items-center gap-[0.8rem] rounded-[0.8rem] border-[0.2rem] border-yellow_500"
        onClick={() => console.log("clicked")}
      >
        <span className="w-[2rem] h-[2rem]">{data.icon}</span>
        <p>{data.title}</p>
      </div>

      <Handle
        id={data.title}
        type="source"
        position={Position.Bottom}
      />
    </>
  );
};

export default StackNode;
