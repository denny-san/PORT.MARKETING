import React from 'react';
import { createPortal } from 'react-dom';
import { MediaItem, url } from '../data/projects';

interface LightboxProps {
  items: MediaItem[];
  index: number | null;
  title?: string;
  onClose: () => void;
  onIndex: (i: number) => void;
}

const Lightbox: React.FC<LightboxProps> = ({ items, index, title, onClose, onIndex }) => {
  const open = index !== null;
  const closeRef = React.useRef<HTMLButtonElement>(null);

  const go = React.useCallback(
    (dir: 1 | -1) => {
      if (index === null) return;
      onIndex((index + dir + items.length) % items.length);
    },
    [index, items.length, onIndex],
  );

  React.useEffect(() => {
    if (!open) return;
    const prevFocus = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      prevFocus?.focus?.();
    };
  }, [open, go, onClose]);

  // Gestos táctiles: deslizar para navegar
  const touchX = React.useRef<number | null>(null);

  if (!open || index === null) return null;
  const item = items[index];

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title ? `Galería: ${title}` : 'Galería'}
      className="on-dark fixed inset-0 z-[100] flex flex-col bg-ink/95 text-paper backdrop-blur-sm"
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      <div className="flex items-center justify-between px-5 md:px-8 h-16 shrink-0">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/60">
          {title && <span className="text-paper mr-3">{title}</span>}
          {String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
        </p>
        <button
          ref={closeRef}
          onClick={onClose}
          className="h-10 px-4 rounded-full border border-paper/20 text-sm hover:bg-paper hover:text-ink transition-colors"
        >
          Cerrar <span className="hidden sm:inline text-paper/50 ml-1">Esc</span>
        </button>
      </div>

      <div className="relative flex-1 min-h-0 flex items-center justify-center px-4 md:px-20 pb-6" onClick={onClose}>
        <div className="max-h-full max-w-full" onClick={(e) => e.stopPropagation()}>
          {item.type === 'video' ? (
            <video
              key={item.src}
              src={url(item.src)}
              controls
              autoPlay
              playsInline
              className="max-h-[calc(100vh-7rem)] max-w-full rounded-sm"
            />
          ) : (
            <img
              key={item.src}
              src={url(item.src)}
              alt={item.alt ?? ''}
              className="max-h-[calc(100vh-7rem)] max-w-full object-contain rounded-sm shadow-2xl"
            />
          )}
        </div>

        {items.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
              aria-label="Anterior"
              className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full border border-paper/20 hover:bg-paper hover:text-ink transition-colors"
            >
              <span className="material-symbols-outlined">west</span>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
              aria-label="Siguiente"
              className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full border border-paper/20 hover:bg-paper hover:text-ink transition-colors"
            >
              <span className="material-symbols-outlined">east</span>
            </button>
          </>
        )}
      </div>

      {items.length > 1 && (
        <div className="shrink-0 pb-5 px-5 flex gap-2 overflow-x-auto no-scrollbar justify-start md:justify-center">
          {items.map((m, i) => (
            <button
              key={m.src}
              onClick={() => onIndex(i)}
              aria-label={`Ver pieza ${i + 1}`}
              aria-current={i === index}
              className={`relative h-14 w-11 shrink-0 overflow-hidden rounded-[3px] transition-opacity ${
                i === index ? 'opacity-100 ring-1 ring-accent' : 'opacity-40 hover:opacity-80'
              }`}
            >
              {m.type === 'video' ? (
                <span className="flex h-full w-full items-center justify-center bg-ink-2 material-symbols-outlined">play_arrow</span>
              ) : (
                <img src={url(m.src)} alt="" className="h-full w-full object-cover" loading="lazy" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>,
    document.body,
  );
};

export default Lightbox;

/** Hook de conveniencia para manejar el estado del visor. */
export function useLightbox() {
  const [state, setState] = React.useState<{ items: MediaItem[]; index: number; title?: string } | null>(null);
  const open = (items: MediaItem[], index = 0, title?: string) => setState({ items, index, title });
  const node = (
    <Lightbox
      items={state?.items ?? []}
      index={state ? state.index : null}
      title={state?.title}
      onClose={() => setState(null)}
      onIndex={(i) => setState((s) => (s ? { ...s, index: i } : s))}
    />
  );
  return { open, node };
}
