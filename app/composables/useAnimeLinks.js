export const animeLinks = [
  { id: 'zero', name: 'ワンパンマン' },
  { id: 'first', name: '鬼滅の刃' },
  { id: 'second', name: '呪術廻戦' },
  { id: 'third', name: 'チェンソーマン' },
  { id: 'fourth', name: '怪獣8号' },
  { id: 'fifth', name: 'ダンダダン' }
];

export function scrollToAnime(id) {
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}
