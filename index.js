let img=document.getElementsByClassName("mainphoto");
console.log(img);
let s=-1;
setInterval(slide,1000);
function slide()
{

s=s+1


for(i=0;i<5;i++)   //this is for hide another element 
{
    // if(i==s) //if we create defoult all image display none than this can use
    // {
    //     continue;   //this is for not change any in current eliment 
    // }
    img[i].style.display="none";
    
}
img[s].style.display="block";

if(s==4)
{
    s=-1;
}

}


function change()
{
    document.getElementById("btn").style.backgroundColor="rgb(35, 112, 244)";
}