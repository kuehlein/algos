# Glossary Of Terms - Basics

### Distributed System
>A distributed system is a system whose components are located on different networked computers, which communicate and coordinate their actions by passing messages to one another. The components interact with one another in order to achieve a common goal.
  - Three significant characteristics of distributed systems are:
      * Concurrency of components
      * Lack of a global clock
      * Independent failure of components
  - `Reliability` is one of the main characteristics of any distributed system since in these systems any failing machine can always be replaced by a healthy one ensuring task completion.

---

### Scalability:
>`Scalability` is the capability of a system, process, or a network to grow and manage increased demand. Any `distributed system` that can continuously evolve in order to support the growing amount of work is considered to be `scalable`.

---

### Horizontal Scaling
>`Scaling` by adding more servers into a pool of resources.
  - Cassandra
  - MongoDB

---

### Vertical Scaling
>`Scaling` by adding more power (CPU, RAM, Storage, etc.) to an existing server.
  - MySQL

---

### Reliability
>`Reliability` is the probability a system will fail in a given period. In simple terms, a `distributed system` is considered `reliable` if it keeps delivering its services even when one or several of its software or hardware components fail.
  - Use redundant software components and data
    - *Redundancy comes at a cost*
  - High `reliability` contributes to high `availability`

---

### Availability
>`Availability` is the time a system remains operational to perform its required function in a specific period.  It is a simple measure of percentage of time that a system, service, or a machine remains operational under normal conditions. `Availability` takes into accound maintainability, repair time, the `availability` of spares, and other logistics considerations.
  - High `reliability` contributes to high `availability`
    - It's possible to have high `availability` with an unreliable product by minimizing repair time and ensuring that spares are available when needed

---

### Efficiency
>The two standard measures of a system's `efficiency` are the response time (or `latency`) that denotes the delay to obtain the first item and the throughput (or `bandwidth`) which denotes the number of items delivered in a given time unit (e.g., a second).
  - *Generally speaking*, analyzing a distributed structure is difficult because of many aspects such as:
      * network topology
      * network load
      * varation
      * possible heterogeneity of software and hardware components
      * etc.
    - *Because it is difficult to develop accurate cost models that consider all these factors, we often use rough but robust estimates of system behavior*

---

### Serviceability/Manageability
>`Serviceability` or `manageability` is the simplicity and speed with which a system can be repaired or maintained; if the time to fix a failed system increases, the availability will decrease.
  - Factors that contribute to a system's serviceability or manageability are:
      * The ease of diagnosing and understanding problems when they occur
      * The ease of making updates or modifications
      * How simple the system is to operate (i.e., does it routinely operate without failure or exceptions?)
  - Early detection of faults can decrease system downtime, thus increasing `availability`

---

### Load Balancer (LB)
>`Load Balancers` help to spread traffic across a cluster of servers to improve responsiveness and availability of applications, websites or databases. `Load Balancers` also keep track of the status of all the resources while distributing requests. If a server is not available to take new requests or it is not responding or has an elevated error rate, the LB will stop sending traffic to such a server. Typically a load balancer sits between the client and the server accepting incoming network and application traffic and distributing the traffic accross multiple backend servers using various algorithms. By balancing application requests across multiple servers, a load balancer reduces individual server load and prevents any one application server from becoming a single point of failure, thus improving overall application availability and responsiveness.

---

### Cache
>A cache is a hardware or software component that stores data so that future requests for that data can be served faster; the data stored in a cache might be the result of an earlier computation or a copy of data stored elsewhere.
  - Caching lets you make better use of resources that are already on hand
  - Uses `locality of reference principle`: recently requested data is likely to be requested again.
  - They are used in almost every layer of computing:
      * hardware
      * operating systems
      * web browsers
      * web applications
  - Usually near frontend - returns data quickly without touching downstream levels

---

### Application Server Cache
>A cache placed directly on a request layer node enables the local storage of response data. Each time a request is made to the service, the node will quickly return local cached data if it exists. If it is not in the cache, the requesting node will query the data from the disk. The cache on one request layer node could also be located both in memory (which is very fast) and on the node's local disk (faster than going to network storage).
  - If the request layer is expanded to multiple nodes, it's still quite possible to have each node host its own cache.
    - However, if your load balancer randomly distributes requests across the nodes, the same request will go to different nodes, thus increasing cache misses. Two choices for overcoming this hurdle are global caches and distributed caches.

---

### Content Distribution Network (CDN)
>`CDN`s are a kind of `cache` that comes into play for sites serving large amounts of static media. Typically, the client will query a `CDN` for a piece of static media, the `CDN` will return it if it is present, if not, it will query a backend server for the data, cache it locally and return it to the client.

---

### Cache Invalidation
>The process of ensuring that the data located in the cache is up to date with the data in the database. If a cache's data is out of date, inconsistent behavior can occur in the application.

---

### Write-Through Cache
>A form of `cache invalidation` where data is written into the cacahe and the corresponding database at the same time. Since the data is being stored in the cache, it allows for fast retrieval, and since it is also being stored in the database, ensures complete data consistency.
  - This scheme ensures that nothing will get lost during a crash, power failure, or other system disruptions
  - Since every write operation must be done twice, there is a higher latency cost for this scheme

---

### Write-Around Cache
>A form of `cache invalidation` where data is written directly to permanent storage, bypassing the cache.
  - This can reduce the cache being flooded by write operations that will not subsequently be re-read
    - Latency is also improved over a `write-though cache`
  - Read requests for recently written data will create a "cache miss" which will increase the latency in this scenario.

---

### Write-Back Cache
>A form of `cache invalidation` where data is written to the cache alone and completion is immediately confirmed to the client. The write to the permanent storage is done after specified intervals or under certain conditions.
  - This results in lower latency and high throughput for write-intensive applications
  - There is a risk of data loss during a crash or other adverse event

---

### Cache Eviction Policies
  1. **First In First Out (FIFO):** The cache evicts the first block accessed first without any regard to how often or how many times it was accessed before.
  2. **Last In First Out (LIFO):** The cache evicts the block accessed most recently first without any regard to how often or how many times it was accessed before.
  3. **Least Recently Used (LRU):** Discards the least recently used items first.
  4. **Most Recently Used (MRU):** Discards, in contrast to LRU, the most recently used items first.
  5. **Least Frequently Used (LFU):** Counts how often an item is needed. Those that are used least often are discarded first.
  6. **Random Replacement (RR):** Randomly selects a candidate item and discards it to make space when necessary.

---

### Sharding/Data Partitioning
>A technique to break up a big database into many smaller parts. It is the process of splitting up a DB/table across multiple machines to improve the `manageability`, `performance`, `availability` and `load balancing` of an application.
  - After a certain point, it is cheaper and more feasible to scale horizontally by adding more machines than it is to grow vertically.

---

### Horizontal Partitioning
>A database partitioned by splitting a single table across different tables/machines; e.g storing ZIP codes less than 10000 on one table on one machine, and ZIP codes greater than 10000 on another. This is also called `ranged based sharding`.
  - If the range values are not chosen carefully, servers will be unbalanced.
    - e.g. one ZIP code might be very active while another might not be.

---

### Vertical Partitioning
>A database partitioned by splitting different concerns across different machines; e.g. storing users on one server, photos on another, etc.
  - `Vertical partitioning` is straightforward to implement and has a low impact on the application, but the main problem with this approach is partitioning even further after growth.

---

### Directory Based Partitioning
>A database partitioned by means of a loosely coupled approach of `horizontal partitioning` and `vertical partitioning` that uses a service that knows your scheme as an intermediary for lookups.
  - So, to find out where a particular data entity resides, we query the directory server that holds the mapping between each tuple key to its DB server.
  - This loosely coupled approach means we can perform tasks like adding servers to the DB pool or changing our partitioning scheme without having an impact on the application.

---

### Key/Hash-Based Partitioning
>This scheme utilizes a hash function to some key attributes of the entity being stored that yields the partition number.
  - For example, if we have 100 DB servers and our ID is a numeric value that gets incremented by one each time a new record is inserted. In this example, the hash function could be ‘ID % 100’, which will give us the server number where we can store/read that record.
    - This approach should ensure a uniform allocation of data among servers.
    - The fundamental problem with this approach is that it effectively fixes the total number of DB servers, since adding new servers means changing the hash function which would require redistribution of data and downtime for the service.
      - A workaround for this problem is to use `Consistent Hashing`.

---

### List Partitioning
>This scheme utilizes a list of values assigned to each partition. Whenever a value is queried, we can see which partition contains our key.
  - For example, we can decide all users living in Iceland, Norway, Sweden, Finland, or Denmark will be stored in a partition for the Nordic countries.

---

### Round-Robin Partitioning
>A very simple partitioning strategy that ensures uniform data distribution using modular arithmetic.
  - For "n" partitions, the row with an id of "i" might go into partition "i mod n".

---

### Composite Partitioning
>A partitioning strategy that uses other types of partitioning strategies in combination; e.g. first applying `list partitioning`, then `hash based partitioning`.
  - `Consistent hashing` could be considered a composite of `hash partitioning` and `list partitioning` where the hash reduces the key space to a size that can be listed.

---

### Denormalization
>In computing, denormalization is the process of trying to improve the read performance of a database, at the expense of losing some write performance, by adding redundant copies of data or by grouping data. It is often motivated by performance or scalability in relational database software needing to carry out very large numbers of read operations. `Denormalization` should not be confused with `Unnormalized form`. Databases/tables must first be `normalized` to efficiently `denormalize` them.
  - Issues like data inconsistency become an issue by `denormalizing`.

---

### Referential Integrity
>A property of data stating that all of its references are valid. In the context of relational databases, it requires that if a value of one attribute (column) of a relation (table) references a value of another attribute (either in the same or a different relation), then the referenced value must exist.
  - Most of `RDBMS` do not support foreign keys constraints across databases on different database servers, which means that applications that require `referential integrity` on sharded databases often have to enforce it in application code.
  - Trying to enforce data integrity constraints such as foreign keys in a sharded database can be extremely difficult. Often in such cases, applications have to run regular SQL jobs to clean up dangling references.

---

### Rebalancing
>The process of creating more DB shards or rebalancing existing shards. This may need to occur if the data distribution is not uniform (`ranged based sharding` or `list partitioning` improperly balanced), or there is a heavy load on any single shard (too many requests).
  - This means the partitioning scheme changed and all existing data is moved to new locations.
    - Doing this without incurring downtime is extremely difficult.
    - Using a scheme like `directory based partitioning` does make rebalancing a more palatable experience at the cost of increasing the complexity of the system and creating a new single point of failure (i.e. the lookup service/database).

---

### Indexing
>A database index is a data structure that improves the speed of data retrieval operations on a database table at the cost of additional writes and storage space to maintain the index data structure. Indexes are used to quickly locate data without having to search every row in a database table every time a database table is accessed. Indexes can be created using one or more columns of a database table, providing the basis for both rapid random lookups and efficient access of ordered records.
