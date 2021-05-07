# echarts 相关学习
### 柱状图 
```
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

```
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

```
![image.png](https://i.loli.net/2021/05/07/5xcZBwQar46mCGn.png)




