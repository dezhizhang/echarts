import echarts from 'echarts';

let root = document.getElementById('root');

let myCharts  = echarts.init(root);

let options = {
    xAxis:{
        type:'category',
        data:['red','yellow','pink'],
    },
    yAxis:{
        type:'value',
    },
    series:[
        {
            name:'英语',
            type:'bar',
            data:[70,80,66]
        }
    ]
}

myCharts.setOption(options);
