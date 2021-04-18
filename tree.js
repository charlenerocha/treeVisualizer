drawTree = function(){
    $(document).ready( function(){
        var c = $('#canvas1');
        var ctx = c.get(0).getContext('2d');
        var container = $(c).parent();
    
        $(window).resize( canvas1 );
        
        function canvas1(){
            c.attr('width', $(container).width() ); //max width
    
            draw = function(){
                
                var i;
                var j;
                var k = 1;
                var l = 1;
    
                var w = $(container).width();
                var h = 500;
    
                for(j = 1; j <= numberOfTimes; j++){
                    k = 1;
                    l = 1;
                    for(i = 1; i <= (Math.pow(numberOfOptions,j)); i++){
                        if(l > (Math.pow(numberOfOptions,j)/Math.pow(numberOfOptions,j-1))){
                            k++;
                            l = 1;
                        }
                        ctx.beginPath();
    
                        if(l==1)
                            ctx.fillStyle = "#f3d26d";
                        else if(l==2)
                            ctx.fillStyle = "#d1462e";
                        else if(l==3)
                            ctx.fillStyle = "#f3935f";
                        else if(l==4)
                            ctx.fillStyle = "#d08947";
                        else if(l==5)
                            ctx.fillStyle = "#f3b366";
                        else if(l==6)
                            ctx.fillStyle = "#a46242";
                        else if(l==7)
                            ctx.fillStyle = "#ca5b3a";
                        else if(l==8)
                            ctx.fillStyle = "#c36f46";
                        else if(l==9)
                            ctx.fillStyle = "#e28c4e";
                        else if(l==10)
                            ctx.fillStyle = "#cc8b54";
    
                        ctx.strokeStyle = "rgb(146, 107, 50)";
                        ctx.lineWidth = 2;
                        if (numberOfTimes == 1){
                            ctx.fillRect((w/(numberOfTimes+1)*j)-15, (h/(Math.pow(numberOfOptions,j)+1)*i)-15, (500/(numberOfTimes+1))/Math.pow(numberOfOptions, j), (500/(numberOfTimes+1))/Math.pow(numberOfOptions, j));
                        }else if(j == 1){
                            ctx.fillRect((w/(numberOfTimes+1)*j)-15, (h/(Math.pow(numberOfOptions,j)+1)*i)-15, (500/numberOfTimes)/Math.pow(numberOfOptions, j), (500/numberOfTimes)/Math.pow(numberOfOptions, j));
                        }else{
                            ctx.fillRect((w/(numberOfTimes+1)*j)-15, (h/(Math.pow(numberOfOptions,j)+1)*i)-15, (500/numberOfTimes)/Math.pow(numberOfOptions, j), (500/numberOfTimes)/Math.pow(numberOfOptions, j));
    
                            ctx.moveTo((w/(numberOfTimes+1)*j)-14, ((h/(Math.pow(numberOfOptions,j)+1)*i)-15)+((500/numberOfTimes)/Math.pow(numberOfOptions, j))/2);
                            ctx.lineTo((w/(numberOfTimes+1)*(j-1))-16+((500/numberOfTimes)/Math.pow(numberOfOptions, (j-1))), ((h/(Math.pow(numberOfOptions,(j-1))+1)*k)-15)+((500/numberOfTimes)/Math.pow(numberOfOptions, (j-1)))/2);
                        }
                        ctx.stroke();
                        l++;
                    }
                }
            }
            jQuery(document).ready(draw)
        }
        
        canvas1()
    }); 
}








