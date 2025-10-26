
function openDonate(){document.getElementById('donateModal').style.display='flex'}
function closeDonate(){document.getElementById('donateModal').style.display='none';document.getElementById('thanks').style.display='block';try{document.getElementById('chime').play()}catch(e){};setTimeout(()=>{document.getElementById('thanks').style.display='none'},3000)}
