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

### Serviceability or Manageability
>`Serviceability` or `manageability` is the simplicity and speed with which a system can be repaired or maintained; if the time to fix a failed system increases, the availability will decrease.
  - Factors that contribute to a system's serviceability or manageability are:
      * The ease of diagnosing and understanding problems when they occur
      * The ease of making updates or modifications
      * How simple the system is to operate (i.e., does it routinely operate without failure or exceptions?)
  - Early detection of faults can decrease system downtime, thus increasing `availability`
