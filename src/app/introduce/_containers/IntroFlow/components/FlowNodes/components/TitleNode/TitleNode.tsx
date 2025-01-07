import { Handle, Node } from "@xyflow/react";
import { NodeProps, Position } from "@xyflow/system";

import { NodeType } from "../../../../types";
import { getNodeColor } from "../../../../utils";

type TitleNodeProps = Node<{ title: string; type: NodeType }, "stack">;

const TitleNode = ({ data }: NodeProps<TitleNodeProps>) => {
  return (
    <>
      <div
        className="w-[12rem] p-[0.4rem] rounded-[0.8rem]"
        style={{ backgroundColor: getNodeColor(data.type) }}
      >
        <p className="w-full h-[2rem] flex items-center justify-center text-white_500 text-[1.2rem] font-bold">
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
