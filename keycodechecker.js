const inserts=document.getElementById('insert');
window.addEventListener('keydown',function(e){
  inserts.innerHTML=`
  <div>
    <table>
    <tr>
      <th>Key</th>
      <th>codeKey</th>
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>  
    </tr>
</table>
  </div>`
});
