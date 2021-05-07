import echarts from 'echarts';
let root = document.getElementById('root');
let myCharts = echarts.init(root);
let option = {
    title:{
        text:'成绩展示',
        textStyle:{
            color:'pink',
           
        },
        borderWidth:2,
        borderColor:'blue',
        borderRadius:5,
        left:'50%',
    },
    xAxis:{
        type:'category',
        data:['张三','李四','王五','马六','小明','二妞','大强'],
    },
    yAxis:{
        type:'value'
    },
    series:[
        {   
            name:'语文',
            type:'bar',
            label:{
                show:true,
                position:'top',
            },
            barWidth:'40%',
            data:[88,92,63,77,94,80,72,]
        }
    ]
}
myCharts.setOption(option);
