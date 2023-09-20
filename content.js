// content.js
const pageURL = window.location.href;
const urlList=['https://cn.bing.com/?mkt=zh-CN','https://www.bing.com/?mkt=zh-CN']
if ( urlList.includes(pageURL)) {
  // Remove elements with class "moduleCont"
  const moduleContElements = document.querySelectorAll('.moduleCont');
  for (const element of moduleContElements) {
    element.remove();
  }

  // Hide scrollbars
  document.documentElement.style.overflow = 'hidden';
}
