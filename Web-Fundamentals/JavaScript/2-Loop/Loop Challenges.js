var result;
var index = "Print odds";
    if (index == "Print odds")
        for (var i=0;i<=20;i++)
        {
            if (i%2 == 0)
            {
                console.log(i);
            }
            
        }
    else if (index == "Decreasing 3")
    {
        var i = 100;
        while(i>0)
        {
            console.log(i);
            i -=3;
            
        }
    }
    else if (index == "sequence")
    {
        for(var i=4;i>-4;i-=1.5)
        {
            console.log(i);
        }
    }
    else if (index == "Sigma")
    {
        for(var i = 0; i <= 100;i++)
        {
            result +=i;
        }
        console.log(result);
    }
    else if (index == "Factorial")
    {
        for(var i = 0; i <= 100;i++)
        {
            result +=i;
        }
        console.log(result);
    }

