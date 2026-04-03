import type { Metadata } from 'next';
import { ErkekGiyimContent } from './content';

export const metadata: Metadata = {
  title: 'Erkek Giyim - SARAR',
  description: 'Sarar Erkek Giyim koleksiyonunu keşfedin. Takım elbise, gömlek, pantolon ve daha fazlası.',
};

export default function ErkekGiyimPage() {
  return <ErkekGiyimContent />;
}
