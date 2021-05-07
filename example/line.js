import echarts from 'echarts';
let root = document.getElementById('root');
let myCharts = echarts.init(root);

let option = {
    xAxis:{
        type:'category',
        data:['一月','二月','三月','四月','五月'],
    },
    yAxis:{
        type:'value'
    },
    series:[
        {
            type:'line',
            data:[22,44,20,99,55]
        }
    ]
};
myCharts.setOption(option);
