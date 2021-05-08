import echarts from 'echarts';
let root = document.getElementById('root');
let myCharts = echarts.init(root);

let option = {
    grid:{
        show:true,
        borderWidth:5,
        borderColor:'pink',
    },
    xAxis:{
        type:'category',
        data:['一月','二月','三月','四月','五月'],
        boundaryGap:false,
    },
    yAxis:{
        type:'value',
        scale:true,
    },
   
    series:[
        {
            type:'line',
            stack:'all',
            data:[22,44,20,99,55],
        },
        {
            type:'line',
            stack:'all',
            data:[55,66,88,22,10],
        }
    ]
};
myCharts.setOption(option);
