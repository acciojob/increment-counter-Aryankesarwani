//your JS code here. If required.
function count() {
	let n = Number(document.getElementById('counter').innerHTML);
	alert(n);
	n++;
	document.getElementById('counter').innerHTML=n;
}