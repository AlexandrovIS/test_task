export  function isActiveBtn(dataParam,param){
  const activeEl=document.querySelector(`[data-${dataParam}='${param}']`)
  activeEl.classList.toggle('active')
}
