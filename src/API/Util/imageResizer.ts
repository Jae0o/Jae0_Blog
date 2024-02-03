import FileResizer from "react-image-file-resizer";

type ResizeFile = (file: File) => Promise<Blob>;

const resizeFile: ResizeFile = async file =>
  await new Promise(resolve => {
    FileResizer.imageFileResizer(
      file,
      600,
      600,
      "WEBP",
      100,
      0,
      uri => {
        if (uri instanceof Blob) {
          resolve(uri);
        }
      },
      "blob",
    );
  });

export default resizeFile;
