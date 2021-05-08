import echarts from 'echarts';
let root = document.getElementById('root');
let myCharts = echarts.init(root);
let option = {
  radar:{
    //   shape:'circle',
      indicator:[
            {
                name:'功能',
                value:100
            },
            {
                name:'拍照',
                value:100,
            },
            {
                name:'跑分',
                value:100,
            },
            {
                name:'续航',
                value:100,
            },
            {
                name:'易用性',
                value:100
            }
        ]
  },
  series:[
    {
        type:'radar',
        label:{
            show:true,
        },
        areaStyle:{

        },
        data:[
            {
                name:'华为手机',
                value:[80,90,80,82,94],
                type:'specified'
            },
            {
                name:'中兴手机',
                type:'specified',
                value:[70,82,75,70,78]
            }
        ]

    }
    ]
}
myCharts.setOption(option);
