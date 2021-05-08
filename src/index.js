import echarts from 'echarts';
let root = document.getElementById('root');
let myCharts = echarts.init(root);
let option = {
  series:[{
      type:'gauge',
      data:[
          {
              value:97,

          }
        ]
  }]
}
myCharts.setOption(option);
