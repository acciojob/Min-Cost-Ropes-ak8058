function mincost(arr)
{ 
//write your code here
	if(arr.length<=1)
	{
		return 0;
	}
	let totalcost=0;
	arr.sort((a,b)=>{
		a-b;
	});
	while(arr.length>1)
		{
			const first=arr.shift();
			const second=arr.shift();
			const cost=first+second;
			totalcost=totalcost+cost;
			arr.push(cost);
			arr.sort((a,b)=>{
				a-b;
			});
		}
// return the min cost
  retrun totalcost;
}

module.exports=mincost;
