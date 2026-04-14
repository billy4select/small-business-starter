/**
 * ─────────────────────────────────────────────────────────────────────────────
 * CLIENT DATA
 * ─────────────────────────────────────────────────────────────────────────────
 * Business-specific copy: name, phone, email, address, socials.
 * Imported by Header, Footer, Contact page, and Head/SEO components.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const client = {
  name: '行銷裡的路人甲 | 比利陳',
  email: 'billy4select@gmail.com',
  phoneForTel: '', // 如果沒有對外公開的電話，留空即可，手機版不會出現撥號連結
  phoneFormatted: '', // 留空
  /** * 原本是放執照編號，這裡可以放你的專業核心，
   * 它會顯示在頁首/頁尾，作為一種專業標籤。
   */
  license: '10 年整合行銷實戰', 
  address: {
    lineOne: '台北, 台灣',
    lineTwo: '', 
    city: 'Taipei',
    state: 'Taiwan',
    zip: '', // 如果不對外公開詳細地址可留空
    country: 'TW',
    mapLink: '', // 如果沒有實體辦公室可留空
  },
  socials: {
    facebook: 'https://www.facebook.com/billyselect/', // 如果沒用到可留空
    instagram: 'https://www.instagram.com/billy4select', 
    google: 'https://www.youtube.com/@billyselect4', // 原本是 Google 商家，可改放你主要的頻道
    // 註：如果模版 Footer 有抓 threads，可自行在下方擴充欄位
  },
  domain: 'https://portaly.cc/billyselect4', // 之後部署後的網址記得回來改這裡
} as const;

export type Client = typeof client;