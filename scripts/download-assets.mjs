import { createWriteStream, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import https from 'https';
import http from 'http';

const BASE = 'public/images';

const assets = [
  // Logo
  { url: 'https://static.wixstatic.com/media/11cf1a_b64d39fd76e94cb7a7a7dce40ff2c9e6~mv2.png/v1/fill/w_360,h_71,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/icon.png', dest: 'logo.png' },
  // Client logos
  { url: 'https://static.wixstatic.com/media/11cf1a_c9ebe36c25fb4697af9235fdb8ed4570~mv2.png/v1/fill/w_244,h_59,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/d91a97a89130c816c1ff019cf72edc59.png', dest: 'clients/ermenegildo-zegna.png' },
  { url: 'https://static.wixstatic.com/media/11cf1a_c486e67608634570ae5dc0816f7681e6~mv2.png/v1/fill/w_165,h_108,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/hacket.png', dest: 'clients/hackett.png' },
  { url: 'https://static.wixstatic.com/media/11cf1a_c915ce23cb0142eda16d16b7fbd6cfb7~mv2.png/v1/fill/w_173,h_133,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11cf1a_c915ce23cb0142eda16d16b7fbd6cfb7~mv2.png', dest: 'clients/network.png' },
  { url: 'https://static.wixstatic.com/media/11cf1a_5474daed6a984640b31fdf0779c1c490~mv2.png/v1/fill/w_228,h_81,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo-eden-park-Paris-2014.png', dest: 'clients/eden-park.png' },
  { url: 'https://static.wixstatic.com/media/11cf1a_3c5947b23ec54bc8af39ab8715ded52a~mv2.png/v1/fill/w_175,h_121,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/hartford.png', dest: 'clients/hartford.png' },
  { url: 'https://static.wixstatic.com/media/11cf1a_3772074208954ddea6efabb70418d60f~mv2.png/v1/fill/w_149,h_78,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11cf1a_3772074208954ddea6efabb70418d60f~mv2.png', dest: 'clients/falke.png' },
  { url: 'https://static.wixstatic.com/media/11cf1a_e11a3226445a4e9493e1941d4821a66f~mv2.png/v1/fill/w_127,h_92,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fay%20logo.png', dest: 'clients/fay.png' },
  { url: 'https://static.wixstatic.com/media/11cf1a_b8b86f7bf17c408a91e3880deccb9105~mv2.png/v1/fill/w_165,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11cf1a_b8b86f7bf17c408a91e3880deccb9105~mv2.png', dest: 'clients/beymen.png' },
  { url: 'https://static.wixstatic.com/media/11cf1a_95de40208a6041168011ee232e782d0b~mv2.png/v1/fill/w_139,h_54,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/AxelArigato.png', dest: 'clients/axel-arigato.png' },
  // Certification badges
  { url: 'https://static.wixstatic.com/media/11cf1a_33f9ac9e8cbb4b44bd91cde02198562a~mv2.png/v1/fill/w_73,h_73,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/amfori-BSCI-1-300x300.png', dest: 'badges/amfori-bsci.png' },
  { url: 'https://static.wixstatic.com/media/11cf1a_955ee23fb2644f5291649cddcf73eb4a~mv2.png/v1/fill/w_73,h_73,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/256-2564094_global-organic-textile-stand.png', dest: 'badges/gots.png' },
  // Process icons
  { url: 'https://static.wixstatic.com/media/11cf1a_9ad26b1caff44d64b0039a4e429ce9ee~mv2.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fabric.png', dest: 'process/fabric-icon.png' },
  { url: 'https://static.wixstatic.com/media/11cf1a_754adcad68164c8abda779b1619b3545~mv2.png/v1/fill/w_49,h_49,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/art-and-design.png', dest: 'process/design-icon.png' },
  { url: 'https://static.wixstatic.com/media/11cf1a_83e3d1fa69b04d8a8ddcfd9206477428~mv2.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/casual-t-shirt-.png', dest: 'process/tshirt-icon.png' },
  // Contact icons
  { url: 'https://static.wixstatic.com/media/11cf1a_fd0e98eaa4104b1aa8d6c25ea4f9abd7~mv2.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/pin%20(1).png', dest: 'icons/pin.png' },
  { url: 'https://static.wixstatic.com/media/11cf1a_bb8b3072a4dc49b086baf01131b1d1f9~mv2.png/v1/fill/w_24,h_20,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/black-back-closed-envelope-shape.png', dest: 'icons/email.png' },
  { url: 'https://static.wixstatic.com/media/11cf1a_5d20534570de4926999acc37a22bae1b~mv2.png/v1/fill/w_19,h_20,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/call-answer.png', dest: 'icons/phone.png' },
  // Favicon
  { url: 'https://static.wixstatic.com/media/11cf1a_b64d39fd76e94cb7a7a7dce40ff2c9e6~mv2.png/v1/fill/w_32,h_32,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/icon.png', dest: '../seo/favicon.png' },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const fullDest = join(BASE, dest);
    mkdirSync(dirname(fullDest), { recursive: true });
    const file = createWriteStream(fullDest);
    const client = url.startsWith('https') ? https : http;
    client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(dest); });
    }).on('error', (err) => { file.close(); reject(err); });
  });
}

// Batch 4 at a time
async function run() {
  const batch = 4;
  for (let i = 0; i < assets.length; i += batch) {
    const slice = assets.slice(i, i + batch);
    await Promise.allSettled(slice.map(a =>
      download(a.url, a.dest)
        .then(d => console.log('✓', d))
        .catch(e => console.error('✗', a.dest, e.message))
    ));
  }
  console.log('Done.');
}

run();
