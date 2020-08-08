学习笔记

1、关于java中的HashMap
    HashMap实现了Map接口，Map是用于映射(key value 键值对)处理的数据结构，而HashMap则根据键的hashcode值存储数据，因此大多数
情况下可以直接定位到它的值，具有很快的访问速度。
    JDK1.8 之前 HashMap 由 数组+链表 组成的，数组是 HashMap 的主体，链表则是主要为了解决哈希冲突而存在的(“拉链法”解决冲突)。
JDK1.8 以后在解决哈希冲突时有了较大的变化，当链表长度大于阈值（默认为 8）时，将链表转化为红黑树，以减少搜索时间。Java中HashMap
的默认容量为16，默认负载因子为0.75f，即当HashMap中的数据达到容量的0.75倍时，将进行扩容，而扩容则涉及到rehash、复制数据等操作，
非常消耗性能，因此使用过程中尽量注意初始化时的设定。
    HashMap主要有以下方法：
    put: 存数据   map.put(key, value)
    get: 取值     map.get(key)
    isEmpty: 判断是否为空    map.isEmpty()
    containsKey: 判断是否含有key    map.containsKey()
    remove: 删除key下的值  map.remove(key)
    values: 显示所有的value值  map.values()
    size: 显示元素个数  map.size()
    putAll: 添加另一个同一类型的map下的所有值  map.putAll(map2)
    HashMap的时间复杂度：当不发生hash冲突时，HashMap的时间复杂度 皆为O(1);当定位到的数组为链表时则为O(1) + O(n) = O(n)
当定位到的数组为红黑树时则为O(1) + O(logn) = O(logn)。
2、学习总结
    本周主要学习了一些非线性数据结构，包括哈希表、树、二叉树、二叉搜索树、堆、二叉堆以及图等。
    首先哈希表在大多数情况下具有0(1)的时间复杂度，因此时非常常用的用于存储的数据结构，
    树最常用的即为递归，二叉搜索树是有序的，高级语言中其使用的都为平衡树，其时间复杂度为O(logn),其中序遍历为升序的。
    堆常用于取最大最小值
    图常用于最优路径
    对于树和堆的实现以及一些操作相对还是比较抽象的，不够熟练
    总结：刷题就完事了
    