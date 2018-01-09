function calTotal(){
	var pprice=document.getElementById("pprice").value;
	var pquan=document.getElementById("pquan").value;
	var total=pprice*pquan;
	var country=document.getElementById("country").value;
	var distotal=total;
	if(total > 10000)
	{
		if(country=="INDIA")
			distotal=total-(total*0.1);
		else if(country=="USA")
			distotal=total-(total*0.05);
		
	}
	var cname=document.getElementById("cname").value;
	var pname=document.getElementById("pname").value;
	
	var w=window.open("","_self")
	w.document.writeln("<html><head><title>Product Display Page</title></head><body>");
	w.document.writeln("Customer name: " + cname + "<br>");
	w.document.writeln("Product name: " + pname + "<br>");
	w.document.writeln("Total amount before discount: " + total+"<br>");
	w.document.writeln("Total amount after discount: " + distotal + "<br>");
	w.document.writeln("</body></html>");
	
	
	
}

