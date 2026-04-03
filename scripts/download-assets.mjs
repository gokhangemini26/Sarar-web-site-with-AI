import { createWriteStream, mkdirSync } from 'fs';
import { dirname } from 'path';
import { pipeline } from 'stream/promises';
import https from 'https';
import http from 'http';

const BASE = 'public';

const assets = [
  // Logo
  { url: 'https://www.sarar.com/Data/EditorFiles/TASARIM/interaktif-vitrin/srr-logo.png', dest: 'images/srr-logo.png' },
  // Favicon
  { url: 'https://sarar.com/Data/EditorFiles/sarar-fav-icon.png', dest: 'seo/sarar-fav-icon.png' },
  // Hero slider images
  { url: 'https://witcdn.sarar.com/Data/BlockUploadData/slider/img2/258/768x1240-tr-34.jpg', dest: 'images/hero-slide-1.jpg' },
  { url: 'https://witcdn.sarar.com/Data/BlockUploadData/slider/img2/258/768x1240-tr-24.jpg', dest: 'images/hero-slide-2.jpg' },
  { url: 'https://witcdn.sarar.com/Data/BlockUploadData/slider/img2/258/sezon-sonu-kampanyasi-25-indirim-768x1240-tr-33.jpg', dest: 'images/hero-slide-3.jpg' },
  { url: 'https://witcdn.sarar.com/Data/BlockUploadData/slider/img2/258/768x1240-tr-27.jpg', dest: 'images/hero-slide-4.jpg' },
  { url: 'https://witcdn.sarar.com/Data/BlockUploadData/slider/img2/258/sararin-yok-mu-tr-18.jpg', dest: 'images/hero-slide-5.jpg' },
  { url: 'https://witcdn.sarar.com/Data/BlockUploadData/slider/img2/258/768x1240-tr-4.jpg', dest: 'images/hero-slide-6.jpg' },
  { url: 'https://witcdn.sarar.com/Data/BlockUploadData/slider/img2/258/768x1240-tr-7.jpg', dest: 'images/hero-slide-7.jpg' },
  { url: 'https://witcdn.sarar.com/Data/BlockUploadData/slider/img2/258/sarev-hediye-esarp-kampanyasi-banner-r-768x1240-px-copy-76.jpg', dest: 'images/hero-slide-8.jpg' },
  // Category banners
  { url: 'https://witcdn.sarar.com/Data/BlockUploadData/banner/img1/260/kadin-tr-1.jpg', dest: 'images/category-kadin.jpg' },
  { url: 'https://witcdn.sarar.com/Data/BlockUploadData/banner/img1/260/erkek-tr-3.jpg', dest: 'images/category-erkek.jpg' },
  // Best sellers product images
  { url: 'https://witcdn.sarar.com/Data/BlockUploadData/slider/img1/324/4112078-tr-13.jpg', dest: 'images/products/product-1.jpg' },
  { url: 'https://witcdn.sarar.com/Data/BlockUploadData/slider/img1/324/3198708-tr-36.jpg', dest: 'images/products/product-2.jpg' },
  { url: 'https://witcdn.sarar.com/Data/BlockUploadData/slider/img1/324/3199632-tr-28.jpg', dest: 'images/products/product-3.jpg' },
  { url: 'https://witcdn.sarar.com/Data/BlockUploadData/slider/img1/324/4112166-tr-31.jpg', dest: 'images/products/product-4.jpg' },
  { url: 'https://witcdn.sarar.com/Data/BlockUploadData/slider/img1/324/3199418-tr-37.jpg', dest: 'images/products/product-5.jpg' },
  { url: 'https://witcdn.sarar.com/Data/BlockUploadData/slider/img1/324/3200621-tr-33.jpg', dest: 'images/products/product-6.jpg' },
  { url: 'https://witcdn.sarar.com/Data/BlockUploadData/slider/img1/324/3195115-tr-29.jpg', dest: 'images/products/product-7.jpg' },
  { url: 'https://witcdn.sarar.com/Data/BlockUploadData/slider/img1/324/3190849-tr-32.jpg', dest: 'images/products/product-8.jpg' },
  { url: 'https://witcdn.sarar.com/Data/BlockUploadData/slider/img1/324/4112528-tr-30.jpg', dest: 'images/products/product-9.jpg' },
  { url: 'https://witcdn.sarar.com/Data/BlockUploadData/slider/img1/324/3199449-tr-34.jpg', dest: 'images/products/product-10.jpg' },
  { url: 'https://witcdn.sarar.com/Data/BlockUploadData/slider/img1/324/3202980-tr-35.jpg', dest: 'images/products/product-11.jpg' },
  { url: 'https://witcdn.sarar.com/Data/BlockUploadData/slider/img1/324/roys-relax-fit-siyah-pantolon-19754-relax-fit-pantolon-int.jpg', dest: 'images/products/product-12.jpg' },
  // Davet Stili banner
  { url: 'https://witcdn.sarar.com/Data/BlockUploadData/banner/img1/263/davet-stili-ikili-690x681-tr-1.jpg', dest: 'images/davet-stili.jpg' },
  // Lifestyle slider images
  { url: 'https://witcdn.sarar.com/Data/BlockUploadData/slider/img1/264/sarar-yeni-arayuz-lifestyle-tr-19.png', dest: 'images/lifestyle/lifestyle-1.png' },
  { url: 'https://witcdn.sarar.com/Data/BlockUploadData/slider/img1/264/mevsimin-ruhunu-evinize-tasiyin-sarev-fw2526-tr-3.jpg', dest: 'images/lifestyle/lifestyle-2.jpg' },
  { url: 'https://witcdn.sarar.com/Data/BlockUploadData/slider/img1/264/sessiz-luks-2-tr-21.png', dest: 'images/lifestyle/lifestyle-3.png' },
  { url: 'https://witcdn.sarar.com/Data/BlockUploadData/slider/img1/264/power-dressing-tr-24.png', dest: 'images/lifestyle/lifestyle-4.png' },
  { url: 'https://witcdn.sarar.com/Data/BlockUploadData/slider/img1/264/burc-tr-26.png', dest: 'images/lifestyle/lifestyle-5.png' },
  { url: 'https://witcdn.sarar.com/Data/BlockUploadData/slider/img1/264/sarar-spotify-tr-1.png', dest: 'images/lifestyle/lifestyle-6.png' },
  { url: 'https://witcdn.sarar.com/Data/BlockUploadData/slider/img1/264/sarar-blog-tr-14.png', dest: 'images/lifestyle/lifestyle-7.png' },
  { url: 'https://witcdn.sarar.com/Data/BlockUploadData/slider/img1/264/ataturk-lifestyle-tr-8.png', dest: 'images/lifestyle/lifestyle-8.png' },
  { url: 'https://witcdn.sarar.com/Data/BlockUploadData/slider/img1/264/lifestlye-217x288-tr-27.jpg', dest: 'images/lifestyle/lifestyle-9.jpg' },
  { url: 'https://witcdn.sarar.com/Data/BlockUploadData/slider/img1/264/lifestyle-tr-25.jpg', dest: 'images/lifestyle/lifestyle-10.jpg' },
  // Sarev banner
  { url: 'https://witcdn.sarar.com/Data/BlockUploadData/banner/img2/301/alt-banner-ocak-1530x760-px-tr-2.jpg', dest: 'images/sarev-banner.jpg' },
  // Trust badge icons (SVG)
  { url: 'https://witcdn.sarar.com/Data/BlockUploadData/banner/img1/267/icon-cgalsgma-yuezeyi-1-tr-1.svg', dest: 'images/trust/trust-secure.svg' },
  { url: 'https://witcdn.sarar.com/Data/BlockUploadData/banner/img1/267/icon-04-tr-2.svg', dest: 'images/trust/trust-shipping.svg' },
  { url: 'https://witcdn.sarar.com/Data/BlockUploadData/banner/img1/267/icon-03-tr-3.svg', dest: 'images/trust/trust-installment.svg' },
  { url: 'https://witcdn.sarar.com/Data/BlockUploadData/banner/img1/267/iade-tr-4.svg', dest: 'images/trust/trust-return.svg' },
  { url: 'https://witcdn.sarar.com/Data/BlockUploadData/banner/img1/267/icon-05-tr-5.svg', dest: 'images/trust/trust-store.svg' },
  // Footer assets
  { url: 'https://witcdn.sarar.com/Data/EditorFiles/google-play.png', dest: 'images/footer/google-play.png' },
  { url: 'https://witcdn.sarar.com/Data/EditorFiles/app-store.png', dest: 'images/footer/app-store.png' },
  { url: 'https://witcdn.sarar.com/Data/EditorFiles/sa-files/icon-fb-login.svg', dest: 'images/footer/social-facebook.svg' },
  { url: 'https://witcdn.sarar.com/Data/EditorFiles/site-alt-kisim/ikonlar/sarar-ikonlar2.jpg', dest: 'images/footer/payments-1.jpg' },
  { url: 'https://witcdn.sarar.com/Data/EditorFiles/site-alt-kisim/ikonlar/sarar-ikonlar5.jpg', dest: 'images/footer/payments-2.jpg' },
  { url: 'https://witcdn.sarar.com/Data/EditorFiles/site-alt-kisim/ikonlar/sarar-ikonlar4.jpg', dest: 'images/footer/payments-3.jpg' },
  { url: 'https://witcdn.sarar.com/Data/EditorFiles/site-alt-kisim/ikonlar/sarar-ikonlar6.jpg', dest: 'images/footer/payments-4.jpg' },
];

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const proto = url.startsWith('https') ? https : http;
    proto.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchUrl(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) { res.resume(); return reject(new Error(`HTTP ${res.statusCode}`)); }
      resolve(res);
    }).on('error', reject);
  });
}

async function downloadAsset({ url, dest }) {
  const fullDest = `${BASE}/${dest}`;
  mkdirSync(dirname(fullDest), { recursive: true });
  try {
    const stream = await fetchUrl(url);
    await pipeline(stream, createWriteStream(fullDest));
    console.log(`✓ ${dest}`);
  } catch (e) {
    console.error(`✗ ${dest}: ${e.message}`);
  }
}

async function run() {
  const batchSize = 4;
  for (let i = 0; i < assets.length; i += batchSize) {
    await Promise.all(assets.slice(i, i + batchSize).map(downloadAsset));
  }
  console.log('Done.');
}

run();
