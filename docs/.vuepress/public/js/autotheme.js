
// 创建并添加HTML元素
const mouseScrollHtml = `
<div id="mouse-scroll">
    <div class="mouse">
        <div class="mouse-in"></div>
    </div>
    <div>
        <span class="down-arrow-1"></span>
        <span class="down-arrow-2"></span>
        <span class="down-arrow-3"></span>
    </div>
</div>
`;

const mouseScrollDarkHtml = `
<div id="mouse-scroll-dark">
    <div class="mouse-dark">
        <div class="mouse-in-dark"></div>
    </div>
    <div>
        <span class="down-arrow-1-dark"></span>
        <span class="down-arrow-2-dark"></span>
        <span class="down-arrow-3-dark"></span>
    </div>
</div>
`;

// // 替换repo图标 延迟加载
// document.addEventListener('DOMContentLoaded', function () {
//   const container = document.querySelector('.vp-repo-link');
//   if (container) {
//     // 如果元素存在，执行相应的操作
//     const newSvg = '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="zhuzhan-icon" style="padding-top: 6px;"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.73252 2.67094C3.33229 2.28484 3.33229 1.64373 3.73252 1.25764C4.11291 0.890684 4.71552 0.890684 5.09591 1.25764L7.21723 3.30403C7.27749 3.36218 7.32869 3.4261 7.37081 3.49407H10.5789C10.6211 3.4261 10.6723 3.36218 10.7325 3.30403L12.8538 1.25764C13.2342 0.890684 13.8368 0.890684 14.2172 1.25764C14.6175 1.64373 14.6175 2.28484 14.2172 2.67094L13.364 3.49407H14C16.2091 3.49407 18 5.28493 18 7.49407V12.9996C18 15.2087 16.2091 16.9996 14 16.9996H4C1.79086 16.9996 0 15.2087 0 12.9996V7.49406C0 5.28492 1.79086 3.49407 4 3.49407H4.58579L3.73252 2.67094ZM4 5.42343C2.89543 5.42343 2 6.31886 2 7.42343V13.0702C2 14.1748 2.89543 15.0702 4 15.0702H14C15.1046 15.0702 16 14.1748 16 13.0702V7.42343C16 6.31886 15.1046 5.42343 14 5.42343H4ZM5 9.31747C5 8.76519 5.44772 8.31747 6 8.31747C6.55228 8.31747 7 8.76519 7 9.31747V10.2115C7 10.7638 6.55228 11.2115 6 11.2115C5.44772 11.2115 5 10.7638 5 10.2115V9.31747ZM12 8.31747C11.4477 8.31747 11 8.76519 11 9.31747V10.2115C11 10.7638 11.4477 11.2115 12 11.2115C12.5523 11.2115 13 10.7638 13 10.2115V9.31747C13 8.76519 12.5523 8.31747 12 8.31747Z" fill="currentColor"></path></svg>';
//     container.innerHTML = newSvg;
//   }
// });

// 全局变量，用于跟踪 addTimeTracker() 是否已经执行过
let timeTrackerAdded = false;

// 添加计时器功能
function addTimeTracker() {
  // 如果已经添加过计时器，则不再执行
  if (timeTrackerAdded) {
    return;
  }
  
  var timeTrackerDiv = document.createElement('div');
  timeTrackerDiv.id = 'time-tracker';
  timeTrackerDiv.innerHTML = '您已浏览 <span class="time-value" id="elapsed-hours">0</span> 时 <span class="time-value" id="elapsed-minutes">0</span> 分 <span class="time-value" id="elapsed-seconds">0</span> 秒';
  var noticeWrapper = document.querySelector('.vp-notice-wrapper');
  noticeWrapper.appendChild(timeTrackerDiv);
  
  // 将标志变量设置为 true，表示已经执行过 addTimeTracker()
  timeTrackerAdded = true;
}




// 封装创建元素并添加到指定元素的函数
function createAndAppendElement(htmlString, targetSelector) {
  const parser = new DOMParser();
  const parsedHtml = parser.parseFromString(htmlString, 'text/html');
  const element = parsedHtml.body.firstChild;

  const targetElement = document.querySelector(targetSelector);
  if (targetElement) {
    targetElement.appendChild(element);
  }
}

// 封装设置主题样式的函数
function setThemeStyles(theme) {
  const root = document.documentElement;
  const element = document.querySelector('.vp-site-name.hide-in-pad');
  if (element) {
    if (theme === 'dark') {
      createAndAppendElement(mouseScrollHtml, '.vp-hero-mask.dark');
      // 为highlights添加半透明背景
      var style = document.createElement('style');
      style.innerHTML = '.vp-feature-bg::before { content: ""; position: absolute; top: 0; right: 0; bottom: 0; left: 0; background: rgba(17, 17, 17, 0.5); z-index: -1; }';
      document.head.appendChild(style);
      // 添加计时器
      var timeTracker = document.getElementById('time-tracker');
      if (!timeTracker) {
          addTimeTracker();
      }
    } else if (theme === 'light') {
      createAndAppendElement(mouseScrollDarkHtml, '.vp-hero-mask.light');
      // 为highlights添加半透明背景
      var style = document.createElement('style');
      style.innerHTML = '.vp-feature-bg::before { content: ""; position: absolute; top: 0; right: 0; bottom: 0; left: 0; background: rgba(253, 253, 253, 0.5); z-index: -1; }';
      document.head.appendChild(style);
      // 添加计时器
      var timeTracker = document.getElementById('time-tracker');
      if (!timeTracker) {
          addTimeTracker();
      }
    }
  }
}

// MutationObserver实例
const observer = new MutationObserver((mutationsList, observerInstance) => {
  // 遍历变动的列表
  for (const mutation of mutationsList) {
    if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
      // 检查变动的属性是否为data-theme
      const newTheme = document.documentElement.getAttribute('data-theme');
      console.log('主题已变更：', newTheme);
      // 设置主题样式
      setThemeStyles(newTheme);
      addTimeTracker();
    }
  }
});

// 配置MutationObserver以观察特定的变动
const config = { attributes: true, attributeFilter: ['data-theme'] };
// 开始监听HTML元素的变动
observer.observe(document.documentElement, config);

// 首次载入检测
setThemeStyles(document.documentElement.getAttribute('data-theme'));
