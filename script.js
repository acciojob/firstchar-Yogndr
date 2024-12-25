function firstChar(text) {
	
	let ans=text.trim();
	if(ans.length==0){
		return "";
	}
	return ans[0];
  // your code here
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
// const text = prompt("Enter text:");
alert(firstChar(text));
