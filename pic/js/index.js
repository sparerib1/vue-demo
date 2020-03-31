var app=new Vue({
    el:'#app',
    data: {
        imgArr:
        ["images/1920x1080.jpg",
        "images/1920x1080a.jpg",
        "images/1920x1080b.jpg",
        "images/1920x1080c.jpg"],
        index:0,
        
        
    },
    methods: {
        pre:function(){
            if(this.index>0){
                this.index--
                
            }
            else if(this.index==0){
                this.index=3
            }
            
        },
        next:function(){
            if(this.index<3){
                this.index++
            }
            else if(this.index==3){
                this.index=0
            }
        },
       
    }, 
    mounted() {
            this.next();//先调用一遍
            setInterval(this.next,5000);
        },
})