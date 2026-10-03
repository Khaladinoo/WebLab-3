# University Course Management System:

A JavaScript-based simulated university course management system demonstrating ES6 classes, immutable object property descriptors, asynchronous callbacks, array manipulations, and higher-order functions.

## File Organization
- `models.js`: Defines the `Student` class with read-only ID property descriptors (`Object.defineProperty`) and grade handling methods.
- `database.js`: Simulates an asynchronous slow database fetching operation using `setTimeout` and callback execution.
- `analytics.js`: Implements reporting logic including class average calculation, top student evaluation via `.reduce()`, and generic list filtering.
- `main.js`: Operates as the main execution script linking data retrieval, object instantiation, immutability tests, and report generation.

## Challenges Faced
1. **Enforcing ID Immutability**: Ensuring the student ID property remained read-only while remaining accessible in normal iteration required exact property descriptor settings (`writable: false`, `configurable: false`).
2. **Handling Asynchronous Flow**: Coordinating the instantiation and analytics processes exclusively inside the `fetchStudents` callback to avoid referencing unpopulated data arrays.
