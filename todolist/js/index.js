var app=new Vue({
    el:'#todoapp',
    data : {
        list:[],
        inputvalue:"",
        isshow:false,
        todocount:"",
        arr:[],
        
        
    },
    methods: {
        add:function(){
            if(this.inputvalue==""){
                alert("输入不允许为空！")
                return false
            }
            else{
                this.list.push(this.inputvalue)
            }
            
        },
        remove:function(index){
            this.list.splice(index,1);
            
            
        },
        finish:function(item,index){
             
             this.arr.push(item);
             item.state=!item.state;
             this.list.splice(index,1);
             
        },
        remove2:function(indexes){
            this.arr.splice(indexes,1);
        },
        clear:function(){
            this.list=[];
            this.arr=[];
        }
       
    },
})