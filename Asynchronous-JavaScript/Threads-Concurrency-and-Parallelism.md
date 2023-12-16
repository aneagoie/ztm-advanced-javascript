### Threads, Concurrency and Parallelism

```
let worker = new Worker
('worker.js');

worker.postMessage("Hellooooo!!!!");
```


```
Concurrency (single-core CPU)

 ----
|th1|
|   |
|___|___
    |th2|
____|___|
|th1|
|___|___
    |th2|
```


```
Concurrency  + Parallelism (multi-core CPU)

_________
|th1|th2|
|   |___|
|   |___
|___|th2|
____|___|
|th1|
|   |
|   |___
|   |th2|


```