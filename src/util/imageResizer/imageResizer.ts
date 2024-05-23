import FileResizer from "react-image-file-resizer";

type ResizeFile = (file: File) => Promise<Blob>;

const imageResizer: ResizeFile = async file =>
  await new Promise(resolve => {
    FileResizer.imageFileResizer(
      file,
      1200,
      1200,
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

export default imageResizer;
