 //for Loop
for(let i=0;i<10;i++)
    console.log(i);

 let strArray=["madhu","ranjit","vaibhav","shubhangi"];

//Foreach (for....of) gives value
for(let strdata of strArray)
{
    //document.write("<h1>"+strdata+"</h1>"); Muttable String (Bad Practice)
    document.write(`<h1>${strdata}</h1>`); //Immuttable String (Good Practice) 
} 

//Foreach (for...in) gives position
for(let strdata in strArray)
{
    document.writeln(`<h1>${strdata}</h1>`); 
} 

// for break
for(var i=0;i<10;i++)
{
    console.log(i);
    if(i==5)
    break;
}

//for continue
for(var i=0;i<10;i++)
{
    if(i==5)
    continue;
    console.log(i);
}
 
for(i=0;i<5;i++)
{
    for(j=0;j<=i;j++)
    {
        document.write("*");
    }
    document.write("<br/>");
}
document.write("-------------------");
for(i=0;i<5;i++)
{
    for(j=5;j>i;j--)
    {
        document.write("*");
    }
    document.write("<br/>");
}

