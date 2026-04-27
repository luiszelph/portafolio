import type { CSSProperties } from "react";

const FACE_CLASSES = [
  "mirror-cube-front",
  "mirror-cube-back",
  "mirror-cube-right",
  "mirror-cube-left",
  "mirror-cube-top",
  "mirror-cube-bottom",
] as const;

/** Una cara del cubo mirror 3×3 con cortes asimétricos (estilo Mirror / Bump Cube). */
function MirrorCubeFace({ faceClass }: { faceClass: (typeof FACE_CLASSES)[number] }) {
  return (
    <div className={`mirror-cube-face-shell ${faceClass}`}>
      <div className="mirror-cube-face-grid">
        {Array.from({ length: 9 }, (_, i) => (
          <span key={i} className="mirror-cube-cell" data-cell={i} />
        ))}
      </div>
    </div>
  );
}

function MirrorCube({ spinClass }: { spinClass?: string }) {
  return (
    <div className={`mirror-cube ${spinClass ?? ""}`.trim()}>
      {FACE_CLASSES.map((fc) => (
        <MirrorCubeFace key={fc} faceClass={fc} />
      ))}
    </div>
  );
}

type CubeSpec = {
  id: string;
  /** Clases de tamaño + trayectoria (ej. mirror-cube-wrapper--md mirror-cube-path-c). */
  wrapperClassName: string;
  /** Modificadores de rotación en el cubo interior */
  spinClass?: string;
  floatDuration: string;
  animationDelay: string;
  /** Opcional: duración de giro si no usas solo clases spin-* */
  spinDuration?: string;
};

/** Un cubo grande + varios pequeños con rutas y velocidades distintas. */
const BACKGROUND_CUBES: CubeSpec[] = [
  {
    id: "hero",
    wrapperClassName: "mirror-cube-wrapper--main mirror-cube-path-a",
    floatDuration: "26s",
    animationDelay: "0s",
    spinDuration: "7s",
  },
  {
    id: "md-1",
    wrapperClassName: "mirror-cube-wrapper--md mirror-cube-path-b",
    spinClass: "mirror-cube-spin--slow mirror-cube-spin--reverse",
    floatDuration: "34s",
    animationDelay: "-8s",
  },
  {
    id: "md-2",
    wrapperClassName: "mirror-cube-wrapper--md mirror-cube-path-c",
    spinClass: "mirror-cube-spin--fast",
    floatDuration: "29s",
    animationDelay: "-14s",
  },
  {
    id: "md-3",
    wrapperClassName: "mirror-cube-wrapper--md mirror-cube-path-d",
    spinClass: "mirror-cube-spin--reverse",
    floatDuration: "37s",
    animationDelay: "-3s",
    spinDuration: "8.5s",
  },
  {
    id: "md-4",
    wrapperClassName: "mirror-cube-wrapper--md mirror-cube-path-e",
    spinClass: "mirror-cube-spin--slow",
    floatDuration: "31s",
    animationDelay: "-19s",
  },
  {
    id: "md-5",
    wrapperClassName: "mirror-cube-wrapper--md mirror-cube-path-f",
    spinClass: "mirror-cube-spin--fast mirror-cube-spin--reverse",
    floatDuration: "39s",
    animationDelay: "-24s",
  },
  {
    id: "sm-1",
    wrapperClassName: "mirror-cube-wrapper--sm mirror-cube-path-b",
    spinClass: "mirror-cube-spin--slow",
    floatDuration: "41s",
    animationDelay: "-11s",
  },
  {
    id: "sm-2",
    wrapperClassName: "mirror-cube-wrapper--sm mirror-cube-path-d",
    spinClass: "mirror-cube-spin--reverse",
    floatDuration: "36s",
    animationDelay: "-6s",
    spinDuration: "6s",
  },
  {
    id: "sm-3",
    wrapperClassName: "mirror-cube-wrapper--sm mirror-cube-path-e",
    spinClass: "mirror-cube-spin--fast",
    floatDuration: "44s",
    animationDelay: "-28s",
  },
  {
    id: "xs-1",
    wrapperClassName: "mirror-cube-wrapper--xs mirror-cube-path-c",
    spinClass: "mirror-cube-spin--slow mirror-cube-spin--reverse",
    floatDuration: "48s",
    animationDelay: "-33s",
  },
];

export function MirrorCubeBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {BACKGROUND_CUBES.map((cube) => {
        const style = {
          animationDuration: cube.floatDuration,
          animationDelay: cube.animationDelay,
          ...(cube.spinDuration ? { "--spin-duration": cube.spinDuration } : {}),
        } satisfies CSSProperties & Record<string, string | undefined>;

        return (
          <div
            key={cube.id}
            className={`mirror-cube-wrapper ${cube.wrapperClassName}`}
            style={style}
          >
            <MirrorCube spinClass={cube.spinClass} />
          </div>
        );
      })}
    </div>
  );
}
