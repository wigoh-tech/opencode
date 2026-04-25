export function decodeDataUrl(url: string) {
  const idx = url.indexOf(",")
  if (idx === -1) return ""

  const head = url.slice(0, idx)
  const body = url.slice(idx + 1)
  if (head.includes(";base64")) return Buffer.from(body, "base64").toString("utf8")
  return decodeURIComponent(body)
}

export function decodeDataUrlBytes(url: string): Uint8Array {
  const idx = url.indexOf(",")
  if (idx === -1) return new Uint8Array()

  const head = url.slice(0, idx)
  const body = url.slice(idx + 1)
  if (head.includes(";base64")) return Buffer.from(body, "base64")
  return Buffer.from(decodeURIComponent(body), "utf8")
}

const MIME_EXT: Record<string, string> = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
  "image/gif": "gif",
  "image/webp": "webp",
  "image/svg+xml": "svg",
  "application/pdf": "pdf",
}

export function extForMime(mime: string): string {
  return MIME_EXT[mime.toLowerCase()] ?? "bin"
}
