import FileResizer from "react-image-file-resizer";

interface ResizeFileProps {
  file: File;
  maxWidth: number;
  maxHeight: number;
  minWidth?: number;
  minHeight?: number;
}

type ResizeFile = (props: ResizeFileProps) => Promise<Blob>;

const imageResizer: ResizeFile = async ({
  file,
  maxWidth,
  maxHeight,
  minWidth = 0,
  minHeight = 0,
}) =>
  await new Promise(resolve => {
    FileResizer.imageFileResizer(
      file,
      maxWidth,
      maxHeight,
      "WEBP",
      minWidth,
      minHeight,
      uri => {
        if (uri instanceof Blob) {
          resolve(uri);
        }
      },
      "blob",
    );
  });

export default imageResizer;
