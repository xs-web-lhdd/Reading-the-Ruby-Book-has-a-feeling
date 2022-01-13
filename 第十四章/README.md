# 第十四章：DOM
1、跟子节点有关的几个节点：
childNodes：孩子节点列表
firstChild：第一个孩子
lastChild：最后一个孩子
nextSibling：前一个兄弟节点
previousSibling：前一个兄弟节点

2、操纵节点的方法：
appendChild：追加节点
insertBefore：两个参数：要插入的节点和参照节点
replaceChild：两个参数：要插入的节点和替换的节点
removeChild：要移除的节点
cloneNode：接受一个布尔值，表示是否深复制，传true则复制节点及整个DOM树，false只复制调用该方法的节点，另外该方法不会复制添加到DOM节点的JavaScript属性
normalize：空文本删除，如果同胞节点是相邻的，则将其合并为一个节点

3、定位元素：
getElementById()
getElementByTagName()：不区分大小写，返回的是一个HTMLCollection，可通过数组下标、item()、通过namedItem()、接收字符串索引访问。 对HTMLCollection对象而言，中括号既可以接收数值索引，也可以接收字符串索引，在后台数值索引会调用item()字符串索引会调用namedItem()

4、取得属性：
getAttribute()：既可以获取HTML语言正式属性也可以获取不是HTML语言正式属性的自定义属性的值，因为该方法在获取DOM上的style属性和事件处理程序与DOM对象的访问结果不一致，所以开发者在进行DOM编程时通常放弃该方法，因此该方法主要用于取得自定义属性的值
setAttribute()：设置属性值，属性名会被规范为小写形式
removeAttribute()：删除属性
attributes：类似NodeList的实时集合

5、几个创建：
创建元素：createElement()
创建文本节点：createTextNode()


6、
Text节点中的文本可以通过nodeValue属性访问也可以通过data属性访问

7、MutationObserver：
觉得这个地方与vue中nexttick好像！！！


