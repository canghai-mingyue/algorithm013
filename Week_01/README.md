学习笔记

1、用 add first 或 add last 这套新的 API 改写 Deque 的代码
void dequeTest() {
        Deque<String> deque = new LinkedList<String>();
        deque.addLast("a");
        deque.addLast("b");
        deque.addLast("c");
        System.out.println(deque);
        String str = deque.peekFirst();
        System.out.println(str);
        System.out.println(deque);
        while (deque.size() > 0) {
            System.out.println(deque.removeFirst());
        }
        System.out.println(deque);
    }
    
2、分析 Queue 和 Priority Queue 的源码
Queue 是接口
继承关系：
    Iterable<E> => Queue<E> => Collection<E>
接口实现类：
    AbstractQueue, ArrayBlockingQueue, ArrayDeque, ConcurrentLinkedDeque, ConcurrentLinkedQueue,
    DelayQueue, LinkedBlockingDeque, LinkedBlockingQueue, LinkedList, LinkedTransferQueue, 
    PriorityBlockingQueue, PriorityQueue, SynchronousQueue等等
常用方法:
    add(e), remove(), element()
    offer(e), poll(), peek()
    
PriorityQueue 是类
继承关系:
    java.lang.Object => java.util.AbstractCollection<E> =>
    java.util.AbstractQueue<E> => java.util.PriorityQueue<E>
实现接口：
    Serializable, Iterable<E>, Collection<E>, Queue<E>    
常用方法：
    add(E e), clear(), contains(Object o), offer(E e), peek(),	poll()，remove(Object o)等
其构造函数接收initialCapacity，comparator两个参数。

3、学习总结
   第一周主要学习了常用的数据结构，包括数组、链表、调表以及栈和队列等，包括其主要特性、时间空间复杂度以及实现原理及方式，
这些数据结构是后面学习一些复杂数据结构与算法的基础，虽然其实现原理及特性都还算熟悉，但当落实到代码上时总会显得生疏。对于
算法的学习方法，其实就像数学题一样，掌握好基础知识，疯狂刷题就完事了，间的多，思路越多，就更加容易做出一些难题，而且这个
刷题是要体现在敲代码上面的，而不是光想思路，对于算法题，真的很容易出现思路有，但是实现的时候，会遇到各种问题，而且熟练度
也是一个很重要的问题，这周因为一些事情比较忙。所以刷题量偏少，要尽量补回来，继续加油!