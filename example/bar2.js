import echarts from 'echarts';

let root = document.getElementById('root');
let myCharts = echarts.init(root);

let option = {
    title:{
        text:'晓智',
        link:'http://www.xiaozhi.shop',
        textStyle:{
            color:'pink'
        }
    },
    xAxis:{
        type:'category',
        data:['red','yellow','pink'],
    },
    yAxis:{
        type:'value',
    },
    series:[
        {
            name:'网丫',
            type:'bar',
            data:[60,90,20]
        }
    ]
}

myCharts.setOption(option);