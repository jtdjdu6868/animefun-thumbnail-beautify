// ==UserScript==
// @name         animefun ncc beautify
// @name:zh-TW   動畫瘋年齡確認美化
// @namespace    http://github.com/jtdjdu6868
// @version      0.1
// @description  Beautify Animefun NCC confirm page
// @description:zh-TW 美化動畫瘋年齡確認畫面，使集數縮圖可以顯示
// @author       jtdjdu6868
// @match        https://ani.gamer.com.tw/animeVideo.php*
// @icon         https://ani.gamer.com.tw/favicon.ico
// @grant        GM_addStyle
// @license      MIT
// ==/UserScript==

GM_addStyle(`
    div.R18 {
        background: transparent;
    }

    .R18 div.video-cover-ncc {
        top: auto;
        bottom: 0;
        transform: none;
        background-color: #00000026;
    }

    .R18 .video-cover-ncc div.ncc-choosearea {
        justify-content: inherit;
    }
`);