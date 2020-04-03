var app=new Vue({
    el: '#app',
    data:{
        student:{
            id1:'',
            name1:'',
            class1:'',
            major:''
        },
        sear:'',
        students:[]
    },
    methods: {
        add:function(){
            if(this.student.id1==''||this.student.name1==''||this.student.class1==''||this.student.major=='')
            {
                alert("输入框不允许为空！！！");
            }
            else{
                this.students.push(this.student);
                this.student={};
            }
            
        },
        remove:function(index){
            this.students.splice(index,1)
        },
        search:function(){
            if(this.sear=='')
            {
                alert("学号不允许为空！！！");
            }
            else
            {
                for(var i=0;i<this.students.length;i++)
            {
                if(this.students[i].id1==this.sear){
                    alert("该学生姓名："+this.students[i].name1);
                    
                }
                else{
                    alert("没有该学生")
                }
            }
            
            }
            
        },
        updatestu(index){
            
                this.students.splice(index,1,this.student);
                this.student={};  
       }
        
    },
})