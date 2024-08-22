/**
 * Return extension of given file name
 * @param filename
 * @returns extension of given file as string
 *
 * @example getFileExtension("file.txt");   // txt
 */
function getFileExtension(filename: string): string | null {
  if (filename && filename.includes(".")) {
    const lastDotIndex = filename.lastIndexOf(".");

    if (lastDotIndex > 0) {
      return filename.substring(lastDotIndex + 1);
    }
  }
  return null;
}

export { getFileExtension };
