import { Handle, Node } from "@xyflow/react";
import { NodeProps, Position } from "@xyflow/system";

type TitleNodeProps = Node<{ title: string }, "stack">;

const TitleNode = ({ data }: NodeProps<TitleNodeProps>) => {
  return (
    <>
      <div className="w-[12rem] p-[0.4rem] rounded-[0.8rem] border-[0.2rem] border-red_500">
        <p className="w-full h-[2rem] flex items-center justify-center text-[1.2rem] font-bold">
          {data.title}
        </p>
      </div>

      <Handle
        id={data.title}
        type="source"
        position={Position.Bottom}
      />
    </>
  );
};

export default TitleNode;
