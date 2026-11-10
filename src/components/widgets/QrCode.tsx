import { QR_MATRIX, QR_QUIET_ZONE, QR_SIZE } from '@/lib/qr-matrix'
import { site } from '@/lib/site'

const viewBoxSize = QR_SIZE + QR_QUIET_ZONE * 2

export function QrCode() {
  return (
    <div className="w-full max-w-[15rem]">
      <div className="relative rounded-[1.4rem] border border-black/10 bg-white p-3 shadow-md">
        <span
          aria-hidden
          className="absolute left-2 top-2 h-4 w-4 rounded-tl-md border-l-2 border-t-2 border-radar"
        />
        <span
          aria-hidden
          className="absolute right-2 top-2 h-4 w-4 rounded-tr-md border-r-2 border-t-2 border-radar"
        />
        <span
          aria-hidden
          className="absolute bottom-2 left-2 h-4 w-4 rounded-bl-md border-b-2 border-l-2 border-radar"
        />
        <span
          aria-hidden
          className="absolute bottom-2 right-2 h-4 w-4 rounded-br-md border-b-2 border-r-2 border-radar"
        />

        <svg
          viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
          role="img"
          aria-label="QR code to download MotoSync"
          shapeRendering="crispEdges"
          className="h-auto w-full"
        >
          <title>Scan to download MotoSync</title>
          <rect width={viewBoxSize} height={viewBoxSize} fill="#ffffff" />
          {QR_MATRIX.map((row, y) =>
            row.map((on, x) =>
              on ? (
                <rect
                  key={`${x}-${y}`}
                  x={x + QR_QUIET_ZONE}
                  y={y + QR_QUIET_ZONE}
                  width="1.02"
                  height="1.02"
                  fill="#2c2c2c"
                />
              ) : null,
            ),
          )}
        </svg>
      </div>
      <p className="mt-3 text-center font-mono text-[9px] uppercase tracking-[0.2em] text-dim">
        Scan to install · {site.name}
      </p>
    </div>
  )
}
