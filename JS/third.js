const main = document.getElementById('main-container');
const section = document.createElement('section');
section.innerHTML = `
<h1>my dynamic section</h1>
<p> Fuck You shihab</p>
<ul>
<li>First Item</li>
<li>First Item</li>
<li>First Item</li>
<li>First Item</li>
</ul>

`
main.appendChild(section);