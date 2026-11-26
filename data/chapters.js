/*
  網站目錄資料：新增或上線一個章節時，只要修改這個檔案。
  - ready: true  → 首頁與冊別目錄會顯示可點選的卡片
  - ready: false → 顯示「準備中」
  - path 是相對於網站根目錄的資料夾（結尾要有 /）
  教科書為龍騰版；其他章節做到時再加入，不要先猜章名。
*/
window.SITE = {
  title: '高中生物互動教學網',
  books: [
    {
      id: 'elective3',
      title: '選修生物 III',
      grade: '龍騰版',
      path: 'elective3/',
      chapters: [
        { no: '第二章', title: '循環與消化', path: 'elective3/ch2/', ready: true,
          desc: '循環系統的類型與心臟、血管與血壓、血液與淋巴系統、消化系統與消化作用、養分的吸收與消化的調節；含心智圖與 68 張學習卡', cover: 'elective3/ch2/assets/slides/slide01.jpg' }
      ]
    }
  ]
};
