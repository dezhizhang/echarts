import echarts from 'echarts';
let root = document.getElementById('root');
let myCharts = echarts.init(root);
let option = {
    
    xAxis:{
        type:'category',
        data:['张三','李四','王五','马六','小明','二妞','大强'],
    },
    yAxis:{
        type:'value'
    },
    legend:{
        data:['语文','数学']
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
        },
        {
            name:'数学',
            type:'bar',
            barWidth:'40%',
            data:[88,22,44,77,94,80,72,]
        }
    ]
}
myCharts.setOption(option);
