# echarts 相关学习
### 柱状图 
```diff
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

```
### 柱状图配置最大值最小值平均值
```diff
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
    series:[
        {   
            name:'语文',
            type:'bar',
            +markPoint:{
                +data:[
                    +{
                        +type:'max',
                        +name:'最大值',
                    +},
                    +{
                        +type:'min',
                        +name:'最小值'
                    +}
                +]
            +},
            +markLine:{
                +data:[
                    +{
                        +type:'average',
                        +name:'平均值',
                    +}
                +]
            +},
            +data:[88,92,63,77,94,80,72,]
        +}
    +]
+}
+myCharts.setOption(option);

```diff
![image.png](https://i.loli.net/2021/05/07/zHBik6MFaWQvSUe.png)
### 柱状图 娄值 柱宽度 显示设置
```
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
    series:[
        {   
            name:'语文',
            type:'bar',
            +label:{
                +show:true,
                +position:'top',
            +},
            +barWidth:'40%',
            data:[88,92,63,77,94,80,72,]
        }
    ]
}
myCharts.setOption(option);

```diff
![image.png](https://i.loli.net/2021/05/07/5xcZBwQar46mCGn.png)
### 通用配置title
```
import echarts from 'echarts';
let root = document.getElementById('root');
let myCharts = echarts.init(root);
let option = {
    +title:{
        +text:'成绩展示',
        +textStyle:{
            +color:'pink',
           
        +},
        +borderWidth:2,
        +borderColor:'blue',
        +borderRadius:5,
        +left:'50%',
    +},
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

```
![image.png](https://i.loli.net/2021/05/08/gpN6HeMyscBODlz.png)
### tooltip的通用配置 触发类型trigger,触发时机triggerOn格式化formatter
```diff
import echarts from 'echarts';
let root = document.getElementById('root');
let myCharts = echarts.init(root);
let option = {
    tooltip:{
        // trigger:'item',
        trigger:'item',
        // triggerOn:'click',
        formatter:(args) => {
            return `${args.seriesName}的分数是${args.data}`;
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

```
![image.png](https://i.loli.net/2021/05/08/3X2YFskQIOiCAhT.png)
### toolbox工具栏配置 导出图片，动态类型，数据区域缩放
```diff
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
```
![image.png](https://i.loli.net/2021/05/08/L5NCOV6qtyDFjkT.png)
### 通用配置legend
```
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

```
![image.png](https://i.loli.net/2021/05/08/nrVWFuSD6evdfjG.png)
### 基本折线图
```
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

```
![image.png](https://i.loli.net/2021/05/08/2WLag93SJyQDGmB.png)
### 折线图最大值，最小值，平均值，标注区间，线条，平滑，风格的设置
```
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
            data:[22,44,20,99,55],
            markPoint:{
                data:[
                    {
                        type:'max',
                        name:'最大值'
                    },
                    {
                        type:'min',
                        name:'最小值'
                    }
                ]
            },
            markLine:{
                data:[
                    {
                        type:'average',
                    }
                ]
            },
            smooth:true,
            lineStyle:{
                color:'yellow',
                type:'dashed'
            },
            markArea:{
                data:[
                    [
                        {
                            xAxis:'一月'
                        },
                        {
                            xAxis:'二月'
                        }
                ]
                ]
            }
        }
    ]
};
myCharts.setOption(option);

```
![image.png](https://i.loli.net/2021/05/08/wG8YAEztCpsHgS2.png)
### grid基本配置
```diff
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

```
