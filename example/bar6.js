import echarts from 'echarts';
let root = document.getElementById('root');
let myCharts = echarts.init(root);
let option = {
    toolbox:{
        feature:{
            saveAsImage:{ //导出图片
                show:true,
            },
            dataView:{ //数据视图
                show:true,
            },
            restore:{ //数据重置
                show:true,
            },
            dataZoom:{//区域缩放
                show:true,
            },
            magicType:{ //动态图表类形切换
                type:['bar','line']
            }

        }
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
