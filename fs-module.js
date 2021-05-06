const fs = require("fs");
//fs.writeFileSync('./contents/demofile.txt','we are learning js');
//fs.appendFileSync('./contents/demofile.txt','we are learning node js');
//fs.rename ("./contents/demofile.txt","./contents/myfile.txt",(err)=>
//{
  //  if(err)
    //{
      //  console.log("err");
    //}
    //else
    //{
      //  console.log("rename successful");
    //}
//});

fs.readFilen("./contents/myfile.txt","utf-8",(err,data)=>
{
    if(err)
    {
        console.log(err);
    }
    else
    {
       fs.appendFile("./contents/myfile.txt","is this a synchonous process", (err) =>
       {
           console.log(err);
       });
       fs.readFile("./contents/myfile.txt","utf-8",(err,data)=>
       {
           if(err)
           {
               console.log(err);
           }
           else
           {
               console.log(data)
           }
       });
    }
}
);

//fs.unlink("./contents/myfile.txt",(err)=>
//{
  //  if(!err)
    //{
      //  console.log("deleted successfully");
    //}
//});