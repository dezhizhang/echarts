import echarts from 'echarts';
let root = document.getElementById('root');
let myCharts = echarts.init(root);
let option = {
   series:[
       {
            type:'pie',
            data:[
                {
                    name:'京东',
                    value:998
                },
                {
                    name:'唯品会',
                    value:2209
                },
                {
                    name:'淘宝',
                    value:2440
                }
            ]
       }
   ]
}
myCharts.setOption(option);
