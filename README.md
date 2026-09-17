# Java Practice Compiler & Lab Bench (70 Curated Challenges)

[![Python 3.11](https://img.shields.io/badge/Python-3.11-3776AB?style=flat&logo=python&logoColor=white)](https://python.org)
[![Java 17+](https://img.shields.io/badge/Java-17%2B-ED8B00?style=flat&logo=openjdk&logoColor=white)](https://openjdk.org)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=flat&logo=docker&logoColor=white)](https://www.docker.com/)
[![Render](https://img.shields.io/badge/Render-Deploy%20Ready-46E3B7?style=flat&logo=render&logoColor=white)](https://render.com)
[![Vercel](https://img.shields.io/badge/Vercel-Compatible-000000?style=flat&logo=vercel&logoColor=white)](https://vercel.com)
[![Tests Passing](https://img.shields.io/badge/Test%20Cases-70%2F70%20Passing-22c55e?style=flat)]()

**Run offline:** 
```cd
cd /d "c:\Users\Asus\Documents\Projects\CSE PA Q" && start http://localhost:2090 && python server.py
```


**Live Web Application:** [https://cse-pa-q.onrender.com](https://cse-pa-q.onrender.com)


https://cse-pa-q.vercel.app/

A production-grade, browser-based Java execution workbench built for mastering algorithmic programming, object-oriented concepts, the Collections Framework, Streams API, multi-threading synchronization, database normalization, and SQL.

---

## What This Lab Solves
* **Zero Client Setup:** Practice and verify code directly in the browser without IDE configuration or JDK switching.
* **Instant Single-JVM Test Harness:** Runs dynamic assertions against sample and hidden boundary inputs with millisecond timing and static classloader isolation.
* **Curated Curriculum:** Exactly 70 challenges categorized across 16 core conceptual modules with progressive hint accordions, time/space complexity estimates, and solution walkthroughs.
* **Database & SQL Integration:** Includes 1NF/2NF/3NF database normalization challenges and full MySQL query tasks (DDL, DML, GROUP BY, HAVING, subqueries, and multi-table joins).

---

## Curriculum Breakdown (70 Problems across 16 Modules)

| # | Topic / Module | Questions | Key Concepts & API |
|---|---|---|---|
| 1 | **Java Basics & Data Types** | Q01, Q04, Q40 | Precision arithmetic, primitive ranges, bytecode salary calculation |
| 2 | **Control Flow & Logic** | Q03, Q08, Q44, Q45 | Modulo digit extraction, grading ladders, boundary conditions |
| 3 | **Arrays & Array Manipulation** | Q02, Q06 | Shift statistics, in-place stable even/odd partition |
| 4 | **Strings & Text Processing** | Q07 | Palindrome sentence verification, two-pointer scanning |
| 5 | **Object-Oriented Programming** | Q05 | Class design, attributes, `calculateValue()` method |
| 6 | **Java Collections Framework** | Q09 - Q15 | `ArrayList`, `Vector`, `LinkedList`, `HashSet`, `TreeSet`, `HashMap`, `PriorityQueue` |
| 7 | **Java Generics** | Q16 | Generic class `Box<T>`, type parameterization |
| 8 | **Exception Handling** | Q17, Q18, Q25 | `try-catch-finally`, custom exceptions (`InvalidScoreException`), multiple catch |
| 9 | **Java Stream API** | Q19 - Q24 | `filter()`, `map()`, `sorted()`, `distinct()`, `reduce()`, `Collectors.groupingBy()` |
| 10 | **Database Normalization** | Q26 - Q29 | 1NF atomic attributes, 2NF partial dependencies, 3NF transitive dependencies |
| 11 | **Java Date-Time API** | Q30, Q31, Q36 | `LocalDate`, `LocalTime`, `LocalDateTime`, `ChronoUnit.DAYS` |
| 12 | **Functional Programming & Lambdas** | Q32 - Q35, Q46 - Q48 | `@FunctionalInterface`, `Predicate<T>`, `Optional<T>`, method references |
| 13 | **JVM Architecture & Memory** | Q37 - Q39 | Stack frames vs heap allocations, object references, `System.gc()` |
| 14 | **Fast I/O & StringBuilder** | Q41 - Q43 | `BufferedReader`, `StringTokenizer`, high-throughput `StringBuilder` |
| 15 | **Multithreading & Concurrency** | Q49 - Q58 | `Thread`, `Runnable`, `join()`, `synchronized` methods/blocks, deadlock/livelock |
| 16 | **SQL & Database Queries** | Q59 - Q70 | DDL constraints, `UPDATE`, `DELETE`, `GROUP BY`, `HAVING`, subqueries, JOINS |

---



## Repository Structure

```
├── Dockerfile              # Production Docker image with Python 3.11 & OpenJDK
├── .dockerignore           # Excludes local artifacts & node_modules from container
├── render.yaml             # Render Blueprint configuration
├── vercel.json             # Vercel static routing & backend proxy configuration
├── Procfile                # Heroku / Dokku process configuration
├── requirements.txt        # Flask, Flask-CORS, and Gunicorn dependencies
├── package.json            # Node.js project metadata
├── server.py               # Fast Flask backend & Single-JVM TestHarness compiler
├── index.html              # Workbench UI layout, sidebar, and CodeMirror mounting
├── app.js                  # Application state, problem routing, tests & CodeMirror setup
├── questions.js            # 70 Curated Coding Problems with solutions, hints & test cases
├── style.css               # Dracula and warm light responsive styling
└── run.bat                 # One-click Windows runner script
```

---

## License & Acknowledgments
Created for Computer Science & Engineering students mastering Java, Object-Oriented Programming, and Database Systems.
