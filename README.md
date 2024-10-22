# Parallel and Distributed Computing Project
Parallel and distributed versions in C++ of the KNN algorithm:

- Parallel Version using ***OpenMP***. The approach used for parallelization is to parallelize the inner functions of the algorithm of the ball algorithm on the first node.
Then, parallelize the tree construction, at two levels (outtermost and inner levels), dividing the threads in half to each of the nodes ( build tree parallelization)and also parallelizing the inner functions, until there is
one node for each thread. At this point, the parallelization stops occurring at the lower inner level functions of the ballAlg algorithm and occurs only at the node construction level (outtermost
level). In summary, there is a cutoff for the parallelization of the algorithms, after which the parallelization is done only in the tree node construction. This cutoff is defined as the execution point where each
thread can be assigned a node without being stalled ( threads available <= 1 ). The following table shows the speedups obtained for the serial and parallel versions with different number of points used as input for the KNN algorithm:

![image](https://github.com/user-attachments/assets/664e0472-2554-4bc7-8820-b00e0151345b)
