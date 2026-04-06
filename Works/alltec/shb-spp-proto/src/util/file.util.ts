export const formatFileSize = (bytes: number): string => {
  if (isNaN(bytes)) return "";

  if (bytes <= 0) return "0B";

  const KB = 1024;
  const MB = KB * 1024;
  const GB = MB * 1024;

  if (bytes >= GB || Math.ceil(bytes / MB) >= 1024) {
    const gbVal = bytes / GB;
    const destVal = gbVal < 100 ? Math.ceil(gbVal * 10) / 10 : Math.ceil(gbVal);
    return `${destVal.toLocaleString()}GB`;
  }

  if (bytes >= MB || Math.ceil(bytes / KB) >= 1024) {
    const mbVal = bytes / MB;
    const destVal = mbVal < 100 ? Math.ceil(mbVal * 10) / 10 : Math.ceil(mbVal);
    return `${destVal.toLocaleString()}MB`;
  }

  const kbVal = Math.ceil(bytes / KB);
  return `${kbVal.toLocaleString()}KB`;
};
