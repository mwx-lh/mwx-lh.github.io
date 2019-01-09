function isArray(obj)
{
	return Object.prototype.toString.call(obj) === '[object Array]';
}

Array.prototype.has = function(data)
{
	for(var i=0;i<this.length;i++)
	{
		if(this[i] == data)
			return true;
	}
	return false;
};
var AffList = [];
var BGList =[];

//根据EVTLIB 获取AFFLIST 和BGLIST
for(var i=0;i<EvtLib.length;i++)
{
	if(!(EvtLib[i]["affCond"] === undefined))
	{
		var data = eval('(' + EvtLib[i]["affCond"] + ')');
		if(isArray(data))
		{
			for(var j = 0;j<data.length;j++)
			{
				if(!AffList.has(data[0]))
				{
					AffList.push(data[0]);
				}
			}
		}
		else
		{		
			if(!AffList.has(data))
			{
				AffList.push(data);
			}
		}

	}
	
	if(!(EvtLib[i]["background"] === undefined))
	{
		var data = eval('(' + EvtLib[i]["background"] + ')');
		if(isArray(data))
		{
			for(var j = 0;j<data.length;j++)
			{
				if(!BGList.has(data[0]))
				{
					BGList.push(data[0]);
				}
			}
		}
		else
		{		
			if(!BGList.has(data))
			{
				BGList.push(data);
			}
		}

	}
}